---
id: lamdenjs
hide_title: Using Lamden-js in creation of web dapp
sidebar_label: Using Lamden-js in creation of web dapp
---
 
## Interfacing with the blockchain via Lamden-js
 
Lamden-js is a published npm package which can be  installed using regular command, like any other npm package.
 
By using Lamden-js, it is not necessary to communicate with a wallet installed in the browser. This package allows its users to develop a dApp on any platform.
 
```bash
npm install lamden-js
```
 
To gauge  the consistency of the package, users are able to  launch tests.
 
```bash
npm run tests
```
 
Whilst developing a  dApp, one must  follow very similar rules to those followed during development using the wallet extension. 
 
1. The smart-contract should be both developed,`	 and deployed on the network.
2. Funds must be accounted for on the network to pay for stamps  in order to  process transactions.
 
 
### next, there are classes and functions available in `wallet.js` which can be exported from the `Lamden-js` package.
 
## Classes
 
<dl>
<dt><a href="#generate_keys">generate_keys</a></dt>
<dd></dd>
<dt><a href="#new_wallet">new_wallet</a></dt>
<dd></dd>
</dl>
 
## Functions
 
<dl>
<dt><a href="#get_vk">get_vk(sk)</a> ⇒ String</dt>
<dd></dd>
<dt><a href="#format_to_keys">format_to_keys(sk)</a> ⇒ Object</dt>
<dd></dd>
<dt><a href="#keys_to_format">keys_to_format(kp)</a> ⇒ String | string</dt>
<dd></dd>
<dt><a href="#sign">sign(sk, msg)</a> ⇒ String</dt>
<dd></dd>
<dt><a href="#verify">verify(vk, msg, sig)</a> ⇒ Bool</dt>
<dd></dd>
</dl>
 
<a name="generate_keys"></a>
 
## generate\_keys
**Type**: global class
<a name="new_generate_keys_new"></a>
 
### new exports.generate\_keys(seed)
Represent an account.
 
| Param | Type | Description |
| --- | --- | --- |
| seed | array | A Uint8Array with a length of 32 to seed the keyPair with. This is advanced behavior and ought to be avoided by everyday users. |
 
**Returns**: 
 
vk - Verify Key (VK) represents a 32 byte verifying key. 
 
sk - Signing Key (SK) represents a 32 byte signing key.
 
<a name="new_wallet"></a>
 
## new\_wallet
**Type**: global class
<a name="new_new_wallet_new"></a>
 
### new exports.new\_wallet(seed)
Represents an account.
 
| Param | Type | Description |
| --- | --- | --- |
| seed | array | A Uint8Array with a length of 32 to seed the keyPair with, This is advanced behavior and ought to be avoided by everyday users. |
 
**Returns**:
 
vk - Verify Key (VK) represents a 32 byte verifying key.
 
sk - Signing Key (SK) represents a 32 byte signing key.
 
<a name="get_vk"></a>
 
## get\_vk(sk) ⇒ String
**Type**: global function
 
| Param | Type | Description |
| --- | --- | --- |
| sk | String | A 64 character long hex representation of a signing key (private key). |
 
**Returns**: 
String - vk - A 64 character long hex representation of a verify key (public key).
 
<a name="format_to_keys"></a>
 
## format\_to\_keys(sk) ⇒ Object
**Type**: global function
 
| Param | Type | Description |
| --- | --- | --- |
| sk | array | Signing Key (SK) represents a 32-byte signing key. |
 
**Returns**: 
 
vk - Verify Key (VK) represents a 32 byte verifying key.
 
kp - the object that contains vk and sk.
 
<a name="keys_to_format"></a>
 
## keys\_to\_format(kp) ⇒ string \| string
**Type**: global function
 
| Param | Type | Description |
| --- | --- | --- |
| kp | Object | Object containing the properties sk and vk |
 
**Returns**: 
 
string - vk - Verify Key (VK) represented as a 64 character hex string. 
string - sk - Signing Key (SK) represented as a 64 character hex string.
 
 ```javascript
<a name="sign"></a>
 ```

## sign(sk, msg) ⇒ String
 
**Type**: global function
 
| Param | Type | Description |
| --- | --- | --- |
| sk | String | A 64 character long hex representation of a signing key (private key). |
| msg | Uint8Array | A Uint8Array of bytes representing the message you would like to sign. |
 
**Returns**: 
 
String  sig -  A 128 character long hex string representing the message's signature

```javascript
<a name="verify"></a>
 ```
 
## verify(vk, msg, sig) ⇒ Bool
**Type**: global function
 
| Param | Type | Description |
| --- | --- | --- |
| vk | String | A 64 character long hex representation of a verify key (public key) |
| msg | Uint8Array | A Uint8Array (bytes) representation of a message that has been signed |
| sig | String | A 128 character long hex representation of a nacl signature |
 
**Returns**: Bool - true, false - true if verify checked out, false if not
 
 
In order for all functions of `Lamden-js` to be made available, it is necessary to import the package to your project. There are two available methods to do so:
 
#### Add to project
 
```javascript
import Lamden from 'lamden-js'
```
or
 
```javascript
const Lamden = require('lamden-js')
```
 
## Wallet Functions
### Create a Lamden Account
 
```javascript
let lamdenWallet = Lamden.wallet.new_wallet()
 
console.log(lamdenWallet)
>> {
       vk: "ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298",
       sk: "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
   }
```
 
### Get a public key (vk) from a private key (sk)
```javascript
let sk = "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
let vk = wallet.get_vk(sk)
 
console.log(vk)
>> 'ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298'
```
 
### Sign a message
```javascript
const stringBuffer = Buffer.from('message')
let messageBytes = new Uint8Array(stringBuffer);
let sk = "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
 
let signedMessage = wallet.sign(sk, messageBytes)
 
console.log(signedMessage)
>> '982c204fe88e620f3319558aa6b11f9d8be75b99b3199f434f5edf2834a9c52059ba4ea3d623ac1d550170e532e919c364aad1333f757f8f22e0355cb1dd8c09'
```
 
#### Verify signature
```javascript
let validSignature = wallet.verify(vk, messageBytes, signedMessage)
 
console.log(validSignature)
>> true
```
 
## Create a Lamden Transaction
Use `Lamden.TransactionBuilder(networkInfo, txInfo)` in order to create a new Lamden transaction.
 
Public Testnet masternode is http://167.172.126.5:18080
 
### Create networkInfo object
Create an object which describes the masternode/network that will be sent  via the transaction to the network.
 
```javascript
let networkInfo = {
    // Optional: Name of network
    name: 'Lamden Public Testnet',
 
    // Required: type of network 'mockchain', 'testnet', 'mainnet'
    type: 'testnet',
 
    // Required: must begin with http or https
    host: 'http://167.172.126.5',
 
    // Required: network port
    port: '18080' 
}
```
### Create txInfo object
create an object which describes the transaction that will be initiated 
```javascript
//Sender and Receiver public keys
let senderVk = "ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298"
let receiverVk = "bb0fab41b9118f0afdabf3721fa9a6caae3c93845ed409d3118841065ad1a197"
 
// Kwargs are the arguments which will be sent via the contract method.  
// For example, the ‘currency’ contract's ‘transfer’ method requires  two arguments to successfully create a transfer; the person receiving the TAU, and the amount to transfer.  In this manner, we create a kwargs object.
let kwargs: {
        to: receiverVk,
        amount: 1000
}
 
let txInfo = {
    senderVk,
    contractName: "currency",
    methodName: "transfer",
    kwargs,
    stampLimit: 50000, //Maximum stamps to be used. One could use less, but must not use more.
}
```
 
### Create transaction
 
```javascript
let tx = new Lamden.TransactionBuilder(networkInfo, txInfo)
```
 
### Send transaction
 
```javascript
let senderSk = "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
 
tx.send(senderSk, (res, err) => {
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
 
The  NEW changed state is returned within the currency contract for whichever variables the transfer method impacted.  
In this case, the <b>*new*</b> balance for both keys is returned
 
```javascript
{
    state_changes: {
        "currency:balances:ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298": "4895.0" // -1005 (amount + stamps)
        "currency:balances:bb0fab41b9118f0afdabf3721fa9a6caae3c93845ed409d3118841065ad1a197": "1000.0" // +1000
    }
    status_code: 0
    stamps_used: 13924
}
```
 
## Getting a Nonce and Processor
Note: Nonce and processor will be retrieved from the masternode automatically when send() is called.
 
getNonce() can be used in order to set the nonce and processor beforehand.
 
```javascript
let tx = new Lamden.TransactionBuilder(networkInfo, TxInfo)
 
tx.getNonce((res, err) => {
    if (err) {
        console.log("Nonce Not Set")
        return
    }
    console.log(res)
})
 
>> {
       "nonce": 37,
       "processor": "0000000000000000000000000000000000000000000000000000000000000000",
       "sender": "ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298"
   }
```
 
## Network and API
Create a network instance which  will allow you to retrieve the masternode API. This class utilises a ‘networkInfo’ object as described above.
 
### Create new Network instance
 
```javascript
const Lamden = require('lamden-js')
 
let testnet = new Lamden.Network({
    name: 'Lamden Public Testnet',
    type: 'testnet',
    host: 'http://167.172.126.5', port: '18080' 
})
 
testnet.events.on('online', (online) => {
    console.log(online)
}) 
 
testnet.ping()
```
 
### Examples of using masternode API
All API methods return a value, Promise or callback if provided
 
| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| getContractInfo(contractName)  |  /contracts/*contractName* | Returns the contract code of *contractName*  [example](http://167.172.126.5:18080/contracts/currency/) |
 
As an example, to demonstrate `getContractInfo` we utilise the contract `Currency`.
 
```javascript
testnet.API.getContractInfo('currency').then(cur=>console.log(cur))
```
 
| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| getVariable(contractName, variableName, parms) |    /contracts/*contractName*/*variableName*?key=*parm*   |   Retrieve the current state of a contract variable  [example](http://167.172.126.5:18080/contracts/currency/balances?key=7497cfd946eb332f66fe096d6473aa869cdc3836f1c7ac3630cea68e78228e3e) |
| getContractMethods(contractName) | /contracts/*contractName*/methods |    Returns all methods belonging to *contractName* [example](http://167.172.126.5:18080/contracts/currency/methods) |
 
```javascript
testnet.API.getContractMethods('currency').then(con_methods=>console.log(con_methods))
```
 
| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| pingServer() | /ping | Checks if network is online  [example](http://167.172.126.5:18080/ping) |
 
```javascript
testnet.events.on('online', (online) => {
        console.log(online)
}) 
 
testnet.ping()
```
 
| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| getCurrencyBalance(vk) | /contracts/currency/balances | A blanket method for getVariable() which always returns the result of the currency contracts balance?key=*vk* [example](http://167.172.126.5:18080/contracts/currency/balances?key=7497cfd946eb332f66fe096d6473aa869cdc3836f1c7ac3630cea68e78228e3e)  |
 
```javascript
testnet.API.getCurrencyBalance('d41b8ed0d747ca6dfacdc58b78e1dba86cd9616359014eebd5f3443509111120').
then(bal=>console.log(bal))
```
 
| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| contractExists(contractName) | contractExists | a blanket method for getContractInfo() which returns in the event that a contract exists on the blockchain |
```javascript
testnet.API.contractExists('currency').then(contr=>console.log(contr))
```
 
| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| sendTransaction(txData, *callback*) | / |a contract is submitted to the network, and a txHash is returned.  Use checkTransaction() in order to get tx result |
| getNonce(senderVk, *callback*) | /nonce/*senderVk* |    Get the current *nonce* and *processor* to utilise  a public key (vk) |
| checkTransaction(txHash, callback) | /tx?hash=*txHash* | to receive the result of a transaction |
