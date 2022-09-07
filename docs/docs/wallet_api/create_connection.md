---
id: create_connection
title: Create a Connection to the Lamden Vault
sidebar_label: Create Wallet Connection
---

# Create a Connection to the Lamden Vault

The Lamden Vault listens for a "lamdenWalletConnect" event.

The event detail is expected to be a JSON object.  Anything other than a JSON object will cause an error.

This is an example of a basic connection request
## Basic Connection Info
```javascript
const detail = JSON.stringify({
    appName: 'My Killer dApp',
    version: '1.0.0',
    logo: 'images/logo.png', //or whatever the location of your logo
    contractName: 'con_killer_app', //Will never change
    networkType: 'testnet', // other option is 'mainnet'
})
```

## Sending Connection Request
```javascript
    document.dispatchEvent(new CustomEvent('lamdenWalletConnect', {detail}));
```

If the user has not previously approved your app then they will get an approval popup and follow the new <u>[Linked Account](/wallet/accounts_linked_overview)</u> process.

If the user has previously approved your DAPP then you will be provided the <u>[lamdenWalletGetInfo](/wallet_api/get_wallet_info)</u> object if you are listening to <u>[lamdenWalletInfo](/wallet_api/get_wallet_info)</u>.

If the user denies your connection request or closes the popup you will get an error on the <u>[lamdenWalletGetInfo](/wallet_api/get_wallet_info)</u> listener.


## Upgrading Linked Account Information
If at some point you need to make a change to the connection information you can resend the 'lamdenWalletConnect' event with an incremented version. The Lamden Vault will update the information automatically and then send back a <u>[lamdenWalletGetInfo](/wallet_api/get_wallet_info)</u> object on the <u>[lamdenWalletInfo](/wallet_api/get_wallet_info)</u> listener.

### Updating Smart Contracts
All the connection information can be updated by incrementing the the version of your request. This includes the smart contract name associated to the user's Linked Account.  

**Changing the smart contract of your DAPP should not be taken lightly and is not recommended.**  But the option is available. 

Here are some considerations you may want to make before changing the smart contract.
1. Any associations the user's account address had to the previous smart contract will not carry over to your new one.  This will cause your users to lose items or ownership they once had. If you are migrating from one smart contract to another, you may need to setup some initial state in the new smart contract to accommodate this. 
2. The user will be supplied a popup when you change the smart contract. They will have to approve the change manually even if your DAPP has <u>[Trusted Status](/wallet/accounts_linked_create#make-account-trusted)</u>
3. It's important that you communicate the reason for the change to your users. Before they click "Accept Change" on the popup they will be instructed to look to you for a reason for the change.

```