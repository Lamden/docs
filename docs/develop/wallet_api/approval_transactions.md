# Send an Approval Transaction

It's a common practise to have your DAPP transfer TAU on the user's behalf espeically if you are going to have them pay for certain things on the blockchain.

Usually this would require the user to create and send a currency.approve transaction first.

You can initiate this process on the user's behalf, and the Lamden Vault will prompt them to accept the Approval Request.

**Approval popups ALWAYS show**, regaless of your DAPP's <u>[Trusted Status](/docs/wallet/accounts_linked_create#make-account-trusted)</u>.

## Create an Approval Transaction

```javascript
const detail = JSON.stringify({
    contractName: 'currency',
    methodName: 'approve',
    networkType: 'mainnet',
    kwargs: {
        amount: 100,  // amount of TAU to approve
        to: 'con_your_contract_name' // contract to approve
    }
});
```

## Send Transaction
```javascript
//Send transaction to the wallet
document.dispatchEvent(new CustomEvent('lamdenWalletSendTx', {detail}));
```

## Listen for Transaction Result
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



