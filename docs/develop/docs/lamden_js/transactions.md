---
id: transactions
title: Create Lamden Transactions
sidebar_label: Transactions
---

# Create Lamden Transactions

## Create Transaction Info Object
This object will describe the transaction you are going to send

```javascript
//Sender and Receiver public keys
let senderVk = "ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298"
let receiverVk = "bb0fab41b9118f0afdabf3721fa9a6caae3c93845ed409d3118841065ad1a197"

let txInfo = {
    senderVk,
    contractName: "currency",
    methodName: "transfer",
    kwargs: {  // the method arguements
        to: receiverVk, // string
        amount: {"__fixed__":"1000.5"}  // fixed object required for float values
    }
    stampLimit: 50, //Max stamps to be used. Could use less, won't use more.
}
```

## Create transaction
Create a `Transaction Builder` instance

> Learn about creating a <u>[networkInfo](/lamden_js/network)</u> object

```javascript
let tx = new Lamden.TransactionBuilder(networkInfo, txInfo)
```

## Send transaction
```javascript
let senderSk = "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
// Specify a maternode URL here to direct the tx to a specific node. Setting this to undefined will use the nodes from the Network object
let masternodeURL = undefined

tx.send(senderSk, masternodeURL, (res, err) => {
    if (err) throw new Error(err)
    console.log(res.hash)
    tx.checkForTransactionResult()
    .then(res => console.log(res))
})

//or

tx.events.on('response', (response) => {
    if (tx.resultInfo.type === 'error') return
    console.log(response)
})
tx.send(senderSk).then(() => tx.checkForTransactionResult())

```

Returns the NEW changed state in the currency contract for whatever variables the transfer method effected.  
In this case, the <b>*new*</b> balances for both keys is returned
```javascript
{
    state_changes: {
        "currency:balances:ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298": "4895.0" // -1005 (amount + stamps)
        "currency:balances:bb0fab41b9118f0afdabf3721fa9a6caae3c93845ed409d3118841065ad1a197": "1000.0" // +1000
    }
    status_code: 0
    stamps_used: 19
}
```

## Getting a Nonce and Processor
> Nonce and processor will be retrieved from the masternode **automatcially** when `send()` is called.

`getNonce()` can be used to set the nonce and processor before hand.
```javascript
let tx = new Lamden.TransactionBuilder(networkInfo, TxInfo)

tx.getNonce((res, err) => {
    if (err) console.log("Nonce Not Set")
    else console.log(res)
})

/*
{
    "nonce": 37,
    "processor": "0000000000000000000000000000000000000000000000000000000000000000",
    "sender": "ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298"
}
*/
```

## Transaction Builder Class      

### Class Members
- **uid** (string): *txInfo.uid* || *txData.uid*
    - A unique identifier for this tx.
    - Used for keeping track of transactions
- **sender** (string): *txInfo.senderVk*
    - The transaction sender's vk
- **contract** (string): *txInfo.contractName*
    - The smartcontract to transact against
- **method** (string): *txInfo.methodName*
    - The method or function that will be called on the smartcontract
- **kwargs** (string):  *txInfo.kwargs* 
    - The arguement values that will be sent to the method
    - default `{}`
- **stampLimit** (string): *txInfo.stampLimit*
    - The stamps to be supplied to the transaction
    - This is the upper limit the transaction is allowed to use
    - The transaction could use less stamps
    - The transation will fail if the processing of the transaction causes it to clock more stamps then this value.
    - The sender's wallet must have at least the amount of TAU that would equale the stamp value, even if the transaction won't take that many stamps to complete. This means you cannot simply send `1,000,000` as the stampLimit for each transaction.
- **nonce** (integer): *txInfo.nonce* `if exists` || *txData.nonceResult.nonce* `if exists`
    - transaction nonce value
    - default `undefined`
    - Set with `getNonce()`;
- **processor** (integer): *txInfo.processor* `if exists` || *txData.nonceResult.processor* `if exists`
    - transaction processor
    - default `undefined`
    - Set with `getNonce()`;
- **nonceMasternode** (string):
    - The masternode the nonce was retrieved from
    - default `undefined`
- **signature** (string): 
    - The transaction signature
    - Set with `sign()`;
    - Automatically set when `send(<sk>)` is executed   
- **transactionSigned** (boolean): 
    - If the transaction has been signed or not   
    - default `false`
- **nonceResult** (object): *txData.nonceResult*
    - If the transaction has been signed or not       
- **txSendResult** (object): *txData.txSendResult*
    - The raw response from the masternode as a result of calling `send()`        
- **txBlockResult** (object):  *txData.txBlockResult*
    - The block result returned from the masternode as a result of a processed transaction
    - Created from `txCheckResult` after parsing for errors
- **txHash** (string): *txData.txSendResult.hash*
    - Transaction hash set as a result of calling `send()`
    - Only set if the transaction was accepted by the network
- **resultInfo** (object): *txData.resultInfo*
    - Current state of the transaction
    - Updated during each phase of the transaction process
- **txCheckResult** (object): 
    - The raw response from the masternode as a result of calling `checkForTransactionResult()`
    - could contain errors
- **txCheckAttempts** (integer): 
    - How many times the masternode has been checked for a transaction result
- **txCheckLimit** (integer): 
    - The amount of times to check for a transaction result before failing
- **payload** (object):
    - The transaction payload before sorting
- **sortedPayload** (object):
    - The transaction payload after sorting
    - This is what will actually be signed and sent in the transaction
- **tx** (object):
    - The completed and signed tx object to be sent

### Constructor( __networkInfo__, __txInfo__,  *txData*)
Creates an instance of `TransactionBuilder`

#### Arguments
- **networkInfo** (object): __required__ 
    - An Instance of the <u>[Network Object Class](/lamden_js/network#network-object-class)</u>
- **txInfo** (object): __required__
    - A <u>[Transaction Info Object](/lamden_js/transactions#create-transaction-info-object)</u>
    - Used for keeping track of transactions
- **txData** (object): *optional* 
    - The output from `getAllInfo()` can be used to hydrate a new `Transaction Builder` object from a previous object  

### makePayload()
- Sets `payload'
- Calls `sortObject()` to set `sortedPayload` using `payload` as input

### makeTransaction()
- Sets `tx`
- Creates `tx.metadata.signature` using `signature`
- Creates `tx.metadata.timestamp` using current datetime in seconds
- Createa `tx.payload` from `sortedPayload.orderedObj`

### verifySignature()
Validates the signature of the transaction

> **Returns** *boolean*: valid signature

> **Throws** *error*: If `sign()` has not previously been called.

### sign(sk)
Signs the payload of a transaction
- Sets `signature`
- Sets `transactionSigned` to `true`

#### Arguments
- **sk** (string): __required__ 
    - secret/private key of the `sender` wallet

> **Throws** *error*: If sk has not been provided

### sortObject( __object__ )
Sorts the keys and array values in an object recursivly.
This is required because while verifying the signature of the transaction the blockchain will sort the payload in the same way.

#### Arguments
- **object** (object): __required__ 
    - An object to be sorted

> **Returns** *object*: 
>```javascript
>{
>    "orderedObj": // The sorted object 
>    "json": // the sorted object as a JSON string
>}
>```

### *aync* getNonce( *callback* )
Get the current nonce and processor for the sender wallet.
- Calls `makePayload()`
- Sets `nonceResult`
- Sets `nonce`
- Sets `processor`
- Sets `nonceMasternode`

> `getNonce()` is called during the `send()` process and doesn't need to be called beforhand unless needed for some other reason.

#### Arguments
- **callback**  (object): *optional* 

> **Returns** *Promise*: Resolves to Nonce Information object
>```javascript
>{
>    "nonce": // current nonce 
>    "processor": // current processor
>    "sender": // sender vk
>    "masternode": // url of the masternode the nonce was recieved from
>    "timestamp": // The date/time Lamden-js attempted to get the nonce
>}
>```

### *aync* send( *sk*, *masternode*, *callback* )
Send a transaction.

- Calls `getNonce()` *if `nonce` is undefined*
- Calls `sign()` *if `transactionSigned` is false*
- Calls `makeTransaction()`
- Calls `API.sendTransaction()`
- Calls `handleMasterNodeResponse`

- Sets `txSendResult`

#### Arguments
- **sk**  (string): *optional* `if previously signed`
    - The secret/private key of the sender wallet
    - Used to sign the transaction before sending
- **masternode**  (string): *optional* 
    - default `nonceMasternode`
    - Provide a specific masternode to send the transaction to
- **callback**  (function): *optional* 

> **Returns** *Promise*: Resolved to
>
> Masternode <u>[Transaction Response](/blockchain/masternode_api#json-response-13)</u>
>
>**or**
>
>```javascript
> { errors: // Array of errors }
>```

> **Emits** *response*: Masternode <u>[Transaction Response](/blockchain/masternode_api#json-response-13)</u>

> **Throws** *error*: if transaction is unsigned and no sk provided

> **Throws** *error*: forwards erros from all methods called while completing the transaction process

### *aync* checkForTransactionResult( *callback* )
Checks the blockchain for a result to the `txHash` returned by `send()`.

- Calls `API.checkTransaction()`
- Calls `handleMasterNodeResponse`

- Sets `txCheckAttempts`
- Sets `txCheckResult`

> **Returns** *Promise*: Resolved to
>
> Masternode <u>[Transaction Details](/blockchain/masternode_api#get-transaction-details)</u>
>
>**or**
>
>```javascript
> { errors: // Array of errors }
>```

> **Emits** *response*: Masternode <u>[Transaction Details](/blockchain/masternode_api#get-transaction-details)</u>


### handleMasterNodeResponse(__result__, *callback*)
Parses the masternode return objects to determine the state of the transaction.

#### Arguments
- **result**  (object): __required__
    - Masternode <u>[Transaction Response](/blockchain/masternode_api#json-response-13)</u>
    - Masternode <u>[Transaction Details](/blockchain/masternode_api#get-transaction-details)</u>
- **callback**  (function): *optional* 

- Calls `setPendingBlockInfo`
- Calls `setBlockResultInfo`
- Sets `txHash`
- Sets `txBlockResult`

### setPendingBlockInfo()
Updates the status of the transaction to pending if the Masternode <u>[Transaction Response](/blockchain/masternode_api#json-response-13)</u> 
contained a `hash` property.

- Sets `resultInfo`

> Returns *object*: 
>```javascript
>{
    title: 'Transaction Pending',
    subtitle: 'Your transaction was submitted and is being processed',
    message: `Tx Hash: ${this.txHash}`,
    type: 'success',
>}
>```

### setBlockResultInfo( __result__ )
Parses the Masternode <u>[Transaction Details](/blockchain/masternode_api#get-transaction-details)</u> object for errors and creates the final version of `resultInfo` from the 
results of parsing.

- Sets `resultInfo`


#### Arguments
- **result**  (string): __required__
    - Masternode <u>[Transaction Details](/blockchain/masternode_api#get-transaction-details)</u>



# ** MORE COMING **