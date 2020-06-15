---
id: dapps
title: Creating a web dapp (javascript)
sidebar_label: Creating a web dapp (javascript)
---

### Pre-requisities for development the dAPP in Lamden
For development the dApp you need to meet several conditions:

1. Your smart contract should be written and deployed to one of the Lamden networks.
2. The smart contract should have public functions for communication with frontend components of the dApp.
4. A brand new account is created for your dApp in the Lamden Wallet and you are permitted to only transaction against that.
5. The account should be with a reasonable amount of TAU.
6. The contract must exists on the network and be approved.
   
### Connections to the Lamden Wallet 

All connections to the Lamden Wallet are defined and restricted in the following ways for the safety of the user

- The Lamden Wallet associates all interaction with the dApp via the dApp's host.  

### Images customization

All images used for customization are prefixed with the dApp's hostname when displayed in the wallet.

- All transactions are locked to the approved contract for that network
    - this includes state variable lookups when creating charms

## Interfacing with the Lamden Wallet from a webpage

### Network API Endpoints

To interact with blockchain, you can use the next API endpoints.

All API methods return a value, Promise or callback if provided

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



### All messages from the webpage must be JSON encoded for security
- All event detail is passed in JSON format.
- Wallet interactions are done via browser events.
    - For security, no script tags are injected into the browser
- If Locked, the Lamden Wallet will return a `Wallet is Locked` error for all events except `lamdenWalletGetInfo`
    - It is up to the dApp to handle prompting the user to unlock their wallet
  
### Creating and Listening for wallet events


| Event  | Type | Description  |
| ------------- |------------| -----|
| lamdenWalletGetInfo | CustomEvent | Ask the Wallet for the current info which includes version, installed/setup status, locked status, wallet key assigned to your dApp and which connection approvals you currently have |
| lamdenWalletConnect | CustomEvent | Send an initial connection request to have the wallet paired up with your dApp.  See below for API instructions. |
| lamdenWalletSendTx | CustomEvent | Send a transactions request to the wallet for transmission |
| lamdenWalletTxStatus | Event Listener | Results from your transactions request will be sent here  |
| lamdenWalletInfo | Event Listener | Results from your Information request will be sent here.  All locking and unlocking of the user's wallet will automatically generate an event here. |


## Advanced Connection Requests Options



### Sending an approve message to the wallet to have the user approve your dapp (website)
Once you launch the dApp it sends the request to approval to the wallet. As a result, of approval hash of approval created.

### If approved the wallet will create a new account specifically for your dapp

The approval means that a new account for dApp was created, and you can interact with the blockchain through this account. 

To check if a new account was created, you can open the wallet - > `Accounts`.

In the list of accounts, you will get
- a new row with `name of your dApp` that consists of
  - the `balance of TAU` and `link to the dApp`.

## “Approve event” details

If you send the transaction through your dapp the wallet initiates an approval event in order to confirm if you are going to approve the transaction. You can set amount of TAU for future transactions.

### What Lamden network to approve for (mainnet, testnet)

To use dapp on every network, you need to deploy the smart contract for each of them, respectively.

The dapp will be approved for every blockchain network separately, as well. 

#### What contract to approve for (your dapp can only be associated with one contract , and you can only submit transactions against that one contract

To use the dApp with the interaction of blockchain, you need to develop and submit a smart contract to the blockchain.

It is not possible to add more than one smart contract in the dApp.
All further transactions of the dapp will go through the contract and new account that was created in your wallet.

At the same time, logically, you are not limited only by one smart contract in a dApp. 

There is an option to import other smart-contracts. 
more detailed information about smart contracts you can find in the section **[Smart contracting](/docs/contracting_and_smart_contract).**

### The user will get a popup to approve the transaction

Users should approve every transaction initiated by the dApp. 
For this reason, the wallet initiates a pop-up window with the option to `Deny` or `Approve` the transaction.

By approving the transaction, you confirm that you pay for processing this transaction by blockchain. Also, you can pre-approve a defined amount of stamps for further transactions, and this pop-up window will not appear until your preapproved amount of stamps run out.

## Sending Transaction Requests
- Transactions are locked to the name of the contract that was approved during the connection request.
- The Lamden Wallet will automatically supply this information to your transactions
    - contractName: what was supplied in the connection request
    - senderVk: The public key of the keypair associated to your dApp
    - network: The masternode information for the network type in the request (mainnet, testnet)
    - signature: The Lamden Wallet will sign the transaction with the keypair assocatied with your dApp.

### Send a transaction
#### Supply the method name, kwargs and network

```javascript
const detail = JSON.stringify({
    //Which Lamden Network to send this to
    //mainnet, testnet o are the only acceptable values
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
The wallet fills in the approved contract name
The wallet fills in the public key (vk) that the was automatically created for your dapp

## Listen for Wallet Info
### Getting Wallet Information

Wallet Information Details: 
- Listening to `lamdenWalletInfo` will provide you the info object everytime the user locks and unlocks their wallet
- `wallets` and `approvals` will return empty until the user unlocks the Lamden Wallet

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
| version | The version of the installed Lamden Wallet you are conencted to |
| installed | Boolean: Wallet is installed in the broswer |
| setup | Boolean: If the user has run the Lamden Wallet through the inital setup |
| locked | Boolean: If the wallet is locked or not |
| wallets | The Lamden public key your dApp was assigned.  There will only ever be 1 value in this array. |
| approvals | The contracts you currently have approved on which networks along with a hash of the last approved connection information |


#### Only sent when wallet is unlocked

All transactions of the dApp can be processed only in the unlocked wallet. If you sign out from the wallet, the dapp will return an error.

### dApp can use this to check the TAU balance of it from the masternode

Among all available functions that lamden-js provide, there is a function that allows to check the balance of your account.

```javascript
getCurrencyBalance(vk)
```
More detailed information you can check following the **[link](#network-api-endpoints)**


### Current approvals by network (mainnet, testnet)

To track the dapps you can open your wallet and check the accounts that are associated with your dapps. 

### You can only have one approval on each Lamden network type
It is possible to setup the dapp only for one network. If you would like to deploy the dapp for the different networks you need to setup new dapp for every network. 

### Contract names can be different

You can create the same smart contract and deploy it to the network under different names as many times as you want.

### This info is only sent when the wallet is unlocked
Any interaction with a wallet can be done only with an unlocked wallet. To unlock, you need to sign in to the wallet.

### Wallet info will automatically when the wallet is locked and unlocked
Basically, the 'lamdenWalletInfo' listener will fire automatically when the user locks and unlocks the wallet. So your app can respond immediately

## Listen for Transaction Results
### “TxStatus” can be listened to get the result of a transaction

 - If this is a` transaction you will not get a hash, just a state result
 - If this is a `testnet` or `mainnet` transaction you will get a hash back and then a subsequent state change result. It’s the dapps responsibility to keep track of these things
- 
```javascript
document.addEventListener('lamdenWalletTxStatus', (response) => {
    if (response.resultInfo.type === 'error') {
        console.log(response.resultInfo.errors)
        //Handle Errors
    }else{
        //Do soemething
    } 
});

```

#### Response object
This information is avaiable in both responses

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
|  nonceResult | Information on the nonce recieved from the masternode |
| txBlockResult | Will be empty on first response |

#### txBlockResult

Only available on the second response

| Property | Description |
| ------------- | -----|
|hash | Your transaction hash |
|stampsUsed | The stamp cost of your transaction |
|state | The state changes caused by your transaction |
|status | status code |
|transaction | the transaction payload sent to the masternode |
|timestamp | date/time stamp |

#### Interfacing with the blockchain via Lamden-js

Lamden-js is a published npm package that you can install by regular command as any other npm package.

```bash
npm install lamden-js
```

To check the consistency of the package, you can launch tests.

```bash
npm run tests
```
