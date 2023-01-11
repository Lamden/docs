# Get User Account Info from Vault

Your Dapp can get the user's <u>[Linked Account](/docs/wallet/accounts_linked_overview)</u> information by listening for the lamdenWalletInfo event.

This event is triggered when:
1. You send a "lamdenWalletConnect" event
2. You request information from the Lamden Vault by sending a "lamdenWalletGetInfo" event
3. The user locks or unlocks the wallet 

## Listen for Wallet Info
This example assumes your Dapp has previously been approved
```javascript
document.addEventListener('lamdenWalletInfo', (response) => {
    if (response.error.length > 0){
        //Respond to Errors
        return
    }
    if (response.locked){
        //Prompt user to unlock wallet
    }else{
        //Get user's account address
        console.log(response.wallets[0])
    } 
});
// Get Wallet Info
document.dispatchEvent(new CustomEvent('lamdenWalletGetInfo'));

```

## Request Wallet Info
```javascript
// Get Wallet Info
document.dispatchEvent(new CustomEvent('lamdenWalletGetInfo'));

```

| Property  | Description  |
| ------------- | -----|
| walletVersion | The version of the installed Lamden Vault you are conencted to |
| installed | Boolean: Wallet is installed in the broswer |
| setup | Boolean: If the user has run the Lamden Vault through the inital setup |
| locked | Boolean: If the wallet is locked or not |
| wallets | Array: The Lamden public key your dApp was assigned.  There will only ever be 1 value in this array. |
| approvals | Object: The networks that are currently approved and the information about those approvals including, ContractName, trustedApp and version. |

The **wallets** and **approvals** properties will return empty objects until the user unlocks the Lamden Vault