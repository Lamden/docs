---
id: dapps
title: Creating a web dapp (javascript)
sidebar_label: Creating a web dapp (javascript)
---


## Interfacing with the Lamden Wallet from a webpage

### All messages from the webpage must be JSON encoded for security
Connections to the Lamden Wallet are defined and restricted in the following ways for the security of the user.
- The Lamden Wallet assocaites all interaction with the dApp via the dApp's host.  
    - All images used for customization are prefixed with the dApp's hostname when displayed in the wallet.
- A brand new keypair is created for your dApp in the Lamden Wallet and you are permitted to only transaction against that.
- A dApp can only approve 1 contract per network type (mockchain, testnet, mainnet)
    - The contract to be approved must exist on the network it's being approved on
- All transacations are locked to the approved contract for that network
    - this includes state variable lookups when creating charms
- All event detail is passed in JSON format.
- Wallet interactions are done via browser events.
    - For security, no script tags are injected into the browser
- If Locked, the Lamden Wallet will return a "Wallet is Locked" error for all events except lamdenWalletGetInfo
    - It is up to the dApp to handle prompting the user to unlock their wallet
    - 
### Creating and Listening for wallet events
| Event  | Type | Description  |
| ------------- |------------| -----|
| lamdenWalletGetInfo | CustomEvent | Ask the Wallet for the current info which includes version, installed/setup status, locked status, wallet key assigned to your dApp and which connection approvals you currently have |
| lamdenWalletConnect | CustomEvent | Send an inital connection request to have the wallet paired up with your dApp.  See below for API instructions. |
| lamdenWalletSendTx | CustomEvent | Send a transactions request to the wallet for transmission |
| lamdenWalletTxStatus | Event Listener | Results from your transactions request will be sent here  |
| lamdenWalletInfo | Event Listener | Results from your Information request will be sent here.  All locking and unlocking of the user's wallet will automatically generate an event here. |

**All event detail is passed in JSON format for security.**

## Advanced Connection Requests Options

### Customize the Lamden Wallet
There are a few configuration options you can use to customize your dApps view in the Lamden Wallet. **All image paths are relative to your dApp's hostname.**

| Property  | Example Value | Description  |
| ------------- |------------| -----|
| logo | 'images/logo.png' | This logo will be displayed next to your associated keypair in the main Lamden Wallet view as well as displayed in your dApps section of the Lamden Wallet |
| background | 'images/background.png' | This is a custome background you can set to repalce the defualt on in your dApps section of the Lamden Wallet  |

```javascript
detail.logo = 'images/logo.png'
deatil.background = 'images/background.png'
```
### State Charms
Charms can be added to your dApps section of the Lamden Wallet and provide state information about your dApps's contract.  Example would a custome token value, the current player's turn in a game, etc.  There is no limit on the amount of charms you can add.  Define the charms and send them along with your initial connection request.  All image paths are relative to your dApp's hostname.

Key Variables

**wallet vk** - The Lamden Wallet will subsitute the public key of the keypair created for your dApp

```javascript
//for example
key = "players:<wallet vk>"
// Becomes
"players:270add00fc708791c97aeb5255107c770434bd2ab71c2e103fbee75e202aa15e"
```

```javascript
detail.charms = [
    //This creates a charm that always shows the wallets balance of Stu Bucks
    {
        //The label displayed on the charm
        name: "Stu Bucks"
        //The state variable in yoru dApp's contract
        variableName: "customToken",
        //described in section above this
        key: "<wallet vk>",
        //What format to display the returned value (number will also display as float)
        formatAs: "number",
        //Icon path is relative to your dDapp's hostname
        //This iconPath will become http://www.mydapp.com/images/token.png
        iconPath: "images/token.png",
    },
    //This creates a charm that always shows the current player's turn in a game
    {
        variableName: "playerTurn",
        formatAs: "string",
        iconPath: "images/player.png",
        name: "Player Turn"
    }
]
```
!["Example of State Charms"](/img/charms.png)


### Sending an approve message to the wallet to have the user approve your dapp (website)
Once you launch the dApp it sends the request to approval to the wallet. As a result, of approval hash of approval created.

### If approved the wallet will create a new account specifically for your dapp

The approval means that a new account for dApp was created and you can interact with the blockchain through this account. 

To check if a new account was created you can open the wallet - > `Holdings`.

In the list of accounts, you will get
- a new row with `name of your dApp`, that consists of
- the `balance of TAU` and `link to the dApp`.

## “Approve event” details

### What Lamden network to approve for (mainnet, testnet, mockchain)

### What contract to approve for (your dapp can only be associated with 1 contract and you can only submit transactions against that 1 contract

In order to use the dApp with interaction of blockchain you need to develop and submit a smart contract to the blockchain.

It is not possible to add more than one smart contract in the dApp.
All further transactions of the dapp will go throught the contract and new account that was created in your wallet.

### The user will get a popup to approve the transaction

Every transaction that initiated by the dApp should be approved by user. 
For this reason the wallet initiate a pop-up window with option to `Deny` or `Approve` the transaction.

By approving the transaction you confirm that you pay for processing this transaction by blockchain. Also you can pre-approve defined amount of stamps for further transactions and this pop-up window will not appear untill your preapproved amount of stamps run out.


## Sending Transaction Requests
- Transactions are locked to the name of the contract that was approved durring the connection request.
- The Lamden Wallet will automatically supply this information to your transactions
    - contractName: what was supplied in the connection request
    - senderVk: The public key of the keypair associated to your dApp
    - network: The masternode information for the network type in the request (mainnet, testnet, mockchain)
    - signature: The Lamden Wallet will sign the transaction with the keypair assocatied with your dApp.

### Send a transaction
#### Supply the method name, kwargs and network

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

#### The wallet fills in the approved contract name
#### The wallet fills in the public key (vk) that the was automatically created for your dapp

## Listen for Wallet Info
### Getting Wallet Information

Wallet Information Details: 
- Listening to `lamdenWalletInfo` will provide you the info object everytime the user locks and unlocks their wallet
- `wallets` and `approvals` will return empty until the user unlocks the Lamden Wallet

This example assumes your dApp has been approved usign the steps above
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
| approvals | The contracts you currently have aprroved on which networks along with a hash of the last approved conenction infomation |


### “Wallet info” event can be listened to, to get

When you launch the dApp there are specific pre-requisities in order the dApp start work correctly.

- Wallet installed status

The dApp instance check if the Lamden wallet installed in your browser.

- Wallet Locked status

If you have installed the wallet and you click on `Sign out & Lock` and did not sign in you get a warning that your wallet is `Locked`.

- Wallet version

your dApp can check the current version of the Wallet and display the version on the screen.

- Wallet account associated with this dapp

After approvement of the dApp the wallet create new account. All further communications will be going through this account.

#### Only sent when wallet is unlocked

All transactions of the dApp can be processed only in unlocked wallet. If you sign out from the wallet the transaction will return a error.

### dDApp can use this to check the TAU balance of it from the masternode
## Current approvals by network (mainnet, testnet, mockchain)
### You can only have 1 approval on each Lamden network type

### Contract names can be different
### This info is only sent when the wallet is unlocked
## Wallet info will automatically when the wallet is locked and unlocked

## Listen for Transaction Results
### “TxStatus” can be listened to to get the result of a transaction

 - If this is a `mockchain` transaction you will not get a hash, just a state result
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

Lots of examples exists at **https://github.com/Lamden/lamden-js**

Create a SMALL example website that interfaces with the wallet to show all workflows and features that developers can take advantage of
**https://github.com/Lamden/wallet-integration-example** can be reworked to do this
Comment website code verbosely to show how it all works

