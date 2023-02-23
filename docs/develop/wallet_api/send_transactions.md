# Submit Transactions via the Lamden Vault

## Sending Transaction Requests
- Transactions are locked to the name of the contract that was approved during the connection request.
    - One exception to this rule is <u>[TAU Approval](/docs/develop/wallet_api/approval_transactions)</u> transactions. Which ALWAYS prompt for a popup.
- The Lamden Vault will automatically supply this information to your transactions
    - contractName: what was supplied in the connection request
    - senderVk: The public key of the Linked Account
    - network: The masternode information for the network type in the request (mainnet, testnet)
    - signature: The Lamden Vault will sign the transaction with the Linked Account keys.

## Create Transaction Detail
```javascript
const detail = JSON.stringify({
    //Which Lamden Network to send this to
    //mainnet, testnet are the only acceptable values
    networkType: 'mainnet', 
    // if not provided, the default version is legacy. 
    networkName: 'arko',

    //The method in your contract to call
    methodName: 'movePlayer', 

    //The argument values for your method
    kwargs: {
        newPosX: 3,
        newPosY: 14
    }, 
    //The maximum amount of stamps this transaction is allowed to use
    //Could you less but won't be allowed to use more
    stampLimit: 100
});
```

### StampLimit
The stampLimit property is a failsafe to prevent rogue transactions from eating TAU unexpectedly.
Transactions will abort and fail if while processing the accumulated stamps EXCEED the stampLimit value provided.

In addition to being a failsafe the nodes will also check the stampLimit against the user's ACTUAL TAU balance.  If the user does not have an amount of TAU greater than or equal to the stampLimit then the transaction will be rejected all together; giving the error code "Transaction sender has too few stamps for this transaction."

**Example:**  If you provide a stampLimit of 10 and a during the method execution the stamps reach 11, then the method will immediately abort. The transaction sender is still charged the 10 stamps for the transaction processing that was done up to it aborting even though the transaction will end up failing and have no state results.

#### Calculating StampLimit
As the developer you need to determine how many stamps your methods will take to run.  As a reference, calling the currency contract's transfer method (which a standard "TAU" transfer) costs around 20 stamps. If the amount of state your method changes is consistent, then so will the stamp cost for each run of that method. You should always run your methods on testnet to get an idea of the stamp cost and use this for the stampLimit. It's a good idea to pad the stampLimit number to a point where it won't ever fail, but not too much that the user can call that method without needing a LARGE TAU balance in their account at all times.

For the best user experience, when sending a transaction through the wallet you should alway handle the possibility of "Transaction sender has too few stamps for this transaction.".  This can be done proactively by getting the TAU balance first and then making sure they would have enough stamps, or reactively by waiting for the error to occur and then prompting them to fund your Dapp with more TAU.

#### Stamp Ratio

While the stamp cost for 1 tx will not change, the amount of TAU that 1 stamp costs WILL.  The governance model on the Lamden blockchain can change the cost of stamps. This is done by changing the cost of stamps, in TAU, either up or down depending on market pressures.

For your app to gauge if the user has enough TAU in their wallet to cover the stampLimit value of your transaction you will need to pull the current stamp ratio from any of the Lamden masternodes.

You can see the current ratio from the masternode API; <u>[Current Mainnet Stamp Ratio](https://masternode-01.lamden.io/contracts/stamp_cost/S?key=value)</u>. That value is the number of stamps that equal 1 TAU.

**Example** If the current stamp ratio is 20, and your stampLimit value is 60, then your user would need AT LEAST 3 TAU in their wallet to run the transaction.  If the resulting transaction only took 30 stamps then 1.5 TAU would be deducted from the user's account as a transaction cost leaving them with 1.5 TAU. If they were to run that transaction again you would get an error of "Transaction sender has too few stamps for this transaction.".


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

Every **successful** transaction will get 2 responses back from 'lamdenWalletTxStatus'.

- The first will populate txSendResult which includes the tx hash.
- The second will populate txBlockResult which will have the tx information such as final status, state changes and results.

### Response object
This information is available in both responses

| Property | Description |
| ------------- | -----|
| status | "success" or "error"|
| uid | a unique ID assigned to your tx by the Lamden Vault.  Not needed for anything. |
| txHash | The hash assigned to your transaction by the network |
| signed | transaction was successfully signed |
| signature | the signature of your transaction |
| networkInfo | masternode information |
| txInfo | The information used to create your transaction |
| txSendResult | the response received back from the masternode |
| resultInfo | A success / failure object created from the txSendResult |
| nonceResult | Information on the nonce received from the masternode, including which masternode the tx was sent to |
| txBlockResult | Will be empty on first response |

### txBlockResult
Only available on the second response

| Property | Description |
| ------------- | -----|
|hash | Your transaction hash |
|result | Default 'None' but could contain info returned by your method; including assertion errors. |
|stampsUsed | The stamp cost of your transaction |
|state | The state changes caused by your transaction |
|status | status code |
|transaction | the transaction payload sent to the masternode |
|timestamp | date/time stamp tx was sent|
