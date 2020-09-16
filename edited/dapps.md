---
id: dapps
hide_title: Creating a web dapp (javascript)
sidebar_label: Creating a web dapp (javascript)
---

## Pre-requisites for development the dAPP in Lamden
For development the dApp you need to meet several conditions:

1. Your smart contract should be written and deployed to one of the Lamden networks.
2. The smart contract should have public functions for communication with frontend components of the dApp.
4. A brand new account is created for your dApp in the Lamden Wallet and you are permitted an only transaction against that.
5. The account should be with a reasonable amount of TAU.
6. The contract must exist on the network and be approved.
 
## Interfacing with the Lamden Wallet from a webpage

### Network API Endpoints

To interact with the blockchain, you can use the next API endpoints.

All API methods return a value, promise or callback if provided

| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| getContractInfo(contractName)  |  /contracts/*contractName* | Returns the contract code of *contractName*  **[example](http://167.172.126.5:18080/contracts/currency/)** |
| getVariable(contractName, variableName, parms) |    /contracts/*contractName*/*variableName*?key=*parm*   |   Retrieve the current state of a contract variable  **[example](http://167.172.126.5:18080/contracts/currency/balances?key=7497cfd946eb332f66fe096d6473aa869cdc3836f1c7ac3630cea68e78228e3e)** |
| getContractMethods(contractName) | /contracts/*contractName*/methods |    Returns all methods belonging to *contractName*  **[example](http://167.172.126.5:18080/contracts/currency/methods)** |
| pingServer() | /ping | Checks if network is online  **[example](http://167.172.126.5:18080/ping)** |
| getCurrencyBalance(vk) | /contracts/currency/balances | A wrapper method for getVariable() which always returns the result of the currency contract's balances?key=*vk*  **[example](http://167.172.126.5:18080/contracts/currency/balances?key=7497cfd946eb332f66fe096d6473aa869cdc3836f1c7ac3630cea68e78228e3e)**  |
|contractExists(contractName) | NA | a wrapper method for getContractInfo() which returns if a contract exists on the blockchain |
|sendTransaction(txData, *callback*) | / | submits a contract to the network a txHash will be returned.  Use checkTransaction() to get tx result |
| getNonce(senderVk, *callback*) | /nonce/*senderVk* |    Get the current *nonce* and *processor* for a public key (vk) **[example](http://167.172.126.5:18080/nonce/d41b8ed0d747ca6dfacdc58b78e1dba86cd9616359014eebd5f3443509111120)**|
| checkTransaction(txHash, callback) | /tx?hash=*txHash* | Get the result of a transaction **[example](http://167.172.126.5:18080/tx?hash=998922b0e3ea6b5334ef8f134d5e3d2b08bb61b6f13da737abdfa475b25a4865)**|

## 1. Create a Connection Request
Send a connection request via the `lamdenWalletConnect` event.  

:::note
All event`s detail is passed in JSON format for security.
:::

- Wallet interactions are done via browser events.
  
:::caution 
For security, no script tags are injected into the browser.
:::

- If Locked, the Lamden Wallet will return a `Wallet is Locked` error for all events except `lamdenWalletGetInfo`.
    - It is up to the dApp to handle prompting the user to unlock their wallet.
  

This is an example of a basic connection request

```javascript
const detail = JSON.stringify({
    appName: 'My Favorite dApp',
    description: 'Welcome to My Favorite dApp!',
    contractName: 'myDappContract',
    networkType: 'testnet',
})

document.dispatchEvent(new CustomEvent('lamdenWalletConnect', {detail}));
```

The user will get a browser pop-up and be asked to confirm your connection. On approval, the Lamden Wallet will create a new account in the user's wallet and assign it to your dApp.

### 1.1 Upgrading Connection Information
Sometime you will want to make changes to the connection information to add or change charms or maybe even change the contract.
As part of the `lamdenWalletGetInfo` event, you will be returned a hashed value of the wallet's previously approved request.  

You can use this hash to determine if the wallet using your dApp has the most current connection approval and if not, then you can send them a new connection approval with the updated info.  See [Re-approving](/docs/dapps#re-approving-your-application) below.

## 2. Creating and Listening for wallet events

| Event  | Type | Description  |
| ------------- |------------| -----|
| lamdenWalletGetInfo | CustomEvent | Ask the Wallet for the current info which includes version, installed/setup status, locked status, wallet key assigned to your dApp and which connection approvals you currently have |
| lamdenWalletConnect | CustomEvent | Send an initial connection request to have the wallet paired up with your dApp.  See below for API instructions. |
| lamdenWalletSendTx | CustomEvent | Send a transactions request to the wallet for transmission |
| lamdenWalletTxStatus | Event Listener | Results from your transactions request will be sent here  |
| lamdenWalletInfo | Event Listener | Results from your Information request will be sent here.  All locking and unlocking of the user's wallet will automatically generate an event here. |

### 2.1 Getting Wallet Information

Wallet Information Details: 
- Listening to `lamdenWalletInfo` will provide you the info object every time the user locks and unlocks their wallet
- `wallets` and `approvals` will return empty until the user unlocks the Lamden Wallet.

This example assumes your dApp has been approved using the steps above

```javascript
document.addEventListener('lamdenWalletInfo', (response) => {
    if (response.locked){
        //Prompt user to unlock wallet
    }else{
        //Do something
    } 
});
// Get Wallet Info
document.dispatchEvent(new CustomEvent('lamdenWalletGetInfo'));

```

| Property  | Description  |
| ------------- | -----|
| version | The version of the installed Lamden Wallet you are connected to |
| installed | Boolean: Wallet is installed in the broswer |
| setup | Boolean: If the user has run the Lamden Wallet through the inital setup |
| locked | Boolean: If the wallet is locked or not |
| wallets | The Lamden public key your dApp was assigned.  There will only ever be 1 value in this array. |
| approvals | The contracts you currently have approved on which networks along with a hash of the last approved connection information |

## 3. Sending Transaction Requests
- Transactions are locked to the name of the contract that was approved during the connection request.
- The Lamden Wallet will automatically supply this information to your transactions
    - contractName: what was supplied in the connection request
    - senderVk: The public key of the keypair associated to your dApp
    - network: The masternode information for the network type in the request (mainnet, testnet, mockchain)
    - signature: The Lamden Wallet will sign the transaction with the keypair assocatied with your dApp.

### 3.1 Send a transaction

```javascript
const detail = JSON.stringify({
    //Which Lamden Network to send this to
    //mainnet, testnet or mockchain are the only acceptable values
    networkType: 'mainnet', 
    //The method in your contract to call
    methodName: 'movePlayer', 
    //The argument values for your method
    kwargs: {
        newPosX: 3,
        newPosY: 14
    }, 
    //The maximum amount of stamps this transaction is allowed to use
    //Could you less but won't be allowed to use more
    stampLimit: 30000
});
//Send transaction to the wallet
document.dispatchEvent(new CustomEvent('lamdenWalletSendTx', {detail}));

```

### 3.2 Listen for the result
- On mainnet and testnet you will get two transaction responses

```javascript
document.addEventListener('lamdenWalletTxStatus', (response) => {
    if (response.resultInfo.type === 'error') {
        console.log(response.resultInfo.errors)
        //Handle Errors
    }else{
        //Do something
    } 
});

```

### 3.3 Response object
This information is available in both responses

| Property | Description |
| ------------- | -----|
| status | "success" or "error"|
| uid | a unique ID assigned to your tx by the Lamden Wallet.  Not needed for anything. |
| txHash | The hash assigned to your transaction by the network |
| signed | transaction was successfully signed |
| signature | the signature of your transaction |
| networkInfo | masternode info your transaction was sent to |
| txInfo | The information used to create your transaction |
| txSendResult | the response recieved back from the masternode |
| resultInfo | A success / failure object created from the txSendResult |
|  nonceResult | Information on the nonce received from the masternode |
| txBlockResult | Will be empty on first response |

### 3.4 txBlockResult
Only available on the second response

| Property | Description |
| ------------- | -----|
|hash | Your transaction hash |
|stampsUsed | The stamp cost of your transaction |
|state | The state changes caused by your transaction |
|status | status code |
|transaction | the transaction payload sent to the masternode |
|timestamp | date/time stamp |

## 4. Approvement of transaction

### 4.1 Sending an approve message to the wallet to have the user approve your dapp (website)
Once you launch the dApp it sends the request to approve to the wallet. As a result, approval hash of approval created.

### 4.2 If approved the wallet will create a new account specifically for your dapp

The approval means that a new account for dApp was created and you can interact with the blockchain through this account. 

To check if a new account was created, you can open the wallet - > `Accounts`.

In the list of accounts, you will get
- a new row with `name of your dApp` that consists of
  - the `balance of TAU` and `link to the dApp`.

### 4.3 “Approve event” details

If you send the transaction through your dapp the wallet initiates an approval event in order to confirm if you are going to approve the transaction. You can set the amount of TAU for future transactions.

### 4.5 What Lamden network to approve for (mainnet, testnet)

To use dapp on every network, you need to deploy the smart contract for each of them respectively.

The dapp will be approved for every blockchain network separately as well. 

#### a. What contract to approve for (your dapp can only be associated with one contract and you can only submit transactions against that one contract)

To use the dApp with the interaction of blockchain you need to develop and submit a smart contract to the blockchain.

It is not possible to add more than one smart contract in the dApp. All further transactions of the dapp will go through the contract and a new account that was created in your wallet.

At the same time, logically, you are not limited only by one smart contract in a dApp. 

There is an option to import other smart-contracts. For more detailed information about smart contracts you can find it in the section **[Smart contracting](/docs/contracting_and_smart_contract).**

#### b. The user will get a popup to approve the transaction

Users should approve every transaction initiated by the dApp. 
For this reason, the wallet initiates a pop-up window with the option to `Deny` or `Approve` the transaction.

By approving the transaction, you confirm that you pay for processing this transaction by blockchain. Also, you can pre-approve a defined amount of stamps for further transactions and this pop-up window will not appear until your pre-approved amount of stamps run out.

### 4.6 RE-Approving Your Application
Any subsequent connection requests sent to the Lamden Wallet will bounce back the error **"App is already authorized to use &lt;your contract&gt; on &lt;requested network&gt;"**.
If you wish the change any of the information that was initially approved, such as the contract name, icon paths, charms, etc., you can set the `reapprove` flag on the connection request and the user will get an approve pop-up to confirm your new changes.

```javascript
detail.reapprove = true
```

It could happen that a user deleted the keypair that was created for your dApp previously and now is trying to connect to your dApp again. 

In that case, you will get this error: 

**Your dApp was previously approved, but no matching vk is currently found in the wallet. Prompt the user to restore their keypair for vk 'user's key' or add 'reapprove = true, newKeypair = true' to your approve request to have a new keypair generated.** 

If you need to generate a new keypair you can specify the newKeypair flag like this. A brand new keypair will be generated in the Lamden Wallet and associated with your dApp.

```javascript
detail.newKeypair = true
```

#### Only sent when the wallet is unlocked

All transactions of the dApp can be processed only in the unlocked wallet. If you sign out from the wallet, the dApp will return an error.

### dApp can use this to check the TAU balance of it from the masternode

Among all available functions that lamden-js provide, there is a function that allows to check the balance of your account.

```javascript
getCurrencyBalance(vk)
```
For more detailed information you can check the following **[link](#network-api-endpoints)**

### Current approvals by network (mainnet, testnet)

To track the dapps you can open your wallet and check the accounts that are associated with your dapps. 

### You can only have one approval on each Lamden network type
It is possible to setup the dapp only for one network. If you would like to deploy the dapp for the different networks, you need to set up a new dapp for every network. 

### Contract names can be different

You can create the same smart contract and deploy it to the network under different names as many times as you want.

### This info is only sent when the wallet is unlocked
Any interaction with a wallet can be done only with an unlocked wallet. To unlock, you need to sign in to the wallet.

### Wallet info will automatically be returned when the wallet is locked and unlocked
Basically, the `lamdenWalletInfo` listener will fire automatically when the user locks and unlocks the wallet. So your app can respond immediately.
