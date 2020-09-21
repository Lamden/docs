---
id: create_connection
title: Create a Connection to the Lamden Wallet
sidebar_label: Create Wallet Connection
---

The Lamden Wallet listens for a "lamdenWalletConnect" event.

The event detail is expected to be a JSON object.  Anything other than a JSON object will cause an error.

This is an example of a basic connection request
```javascript
const detail = JSON.stringify({
    appName: 'My Killer dApp',
    version: '1.0.0',
    description: 'Welcome to My Killer dApp!',
    contractName: 'con_killer_app', //Will never change
    networkType: 'testnet', // other option is 'mainnet'
})

document.dispatchEvent(new CustomEvent('lamdenWalletConnect', {detail}));
```
**VERY IMPORTANT**
For secutiry you will never be able to chagne the smart contract name after the user approves your conenction and the Linked Account is created.

The user will follow the <u>[Linked Account](/docs/wallet/accounts_linked_overview)</u> creation popups to create the Linked Account. 

If the user denies your connection request or closes the popyup you will get an error on the <u>[lamdenWalletGetInfo](/docs/develop/wallet_api/get_wallet_info)</u> listener.


## Upgrading Linked Account Information
At this time you cannot update the Linked Account information.  In a future Lamden Wallet release we would like to implement the ability to increment the version of your connection to update the connection information such as the name, logos or the charms.  We are reviewing weither or not to allow the DAPP to change the smart contract.

```