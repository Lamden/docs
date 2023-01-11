# Send Transactions

This tutorial will make you understand how to send a transaction and allow users to buy some tickets through the lottery dapp.

![image](/img/toturials/send_tx_1.gif)

<!--truncate-->

[<strong style={{color: "tomato"}}><u>Here is the completed Git repo for this part</u></strong>](https://github.com/Dapiguabc/lottery)

### Buy Tickets

Open the file `src\Pages\Home\Play.jsx`. Add a method called **buyTicket**.  Note that you should add a key **uid** to the message which will be sent to 
Lamden Vault. It's useful to help you figure out which message of responese is for your transaction.

```js
const buyTicket = () => {
    setTxPending(true)
    uid.current = new Date().toISOString()
    const detail = JSON.stringify({
        uid: uid.current,
        networkType: networkType, 
        methodName: 'buy', 
        kwargs: {
            ticket: selectedFruit,
            amount: parseInt(amountValue),
            round_num: currentRound
        }, 
        stampLimit: 300
    })

    //Send transaction to the wallet
    document.dispatchEvent(new CustomEvent('lamdenWalletSendTx', {detail}));
}
```

:::info

For more details about send transaction, [`click here`](https://docs.lamden.io/docs/develop/wallet_api/send_transactions).

:::

Next we should add a listener for **lamdenWalletTxStatus** event. It will get you know the result of the transaction you've send.
We can use the attribute "uid" to distinguish responses.

```js
useEffect(() => {
    const handleTxInfo = (response) => {
        console.log(response)
        if (response.detail.data.errors) {
            // Tell user the tx is failed
            toast({
                # 'Wallet Error',
                description: response.detail.data.errors[0],
                status: 'error',
                duration: 9000,
                position: 'top',
                isClosable: true,
            })
        }else{
            let data = response.detail.data.resultInfo
            // check whether this response is we want
            if (uid.current !== response.detail.data.uid) {
                return
            }

            // Tell user the result of tx.
            toast({
                # data.title,
                description: `${data.subtitle}`,
                status: 'success',
                duration: 9000,
                position: 'top',
                isClosable: true,
            })
            setTxPending(false)
        } 
    }

    document.addEventListener('lamdenWalletTxStatus', handleTxInfo)

    return () => {
        document.removeEventListener('lamdenWalletTxStatus', handleTxInfo)
    }
}, [])
```
Now, click the button `Buy Tickets` to show the back of draw card.
Select a fruit you want to buy and input the amount you want to spend.

![image](/img/toturials/send_tx_2.png)

Click button `Confirm` and wait a minute.

![image](/img/toturials/send_tx_3.png)


### Claim Prize

If you win the lottery, then you will want to claim your prize.
Open the file `src\Pages\Home\Claim.jsx`. It is time to complete the function `claimBonus()` in component "Round". 
Same to the last section that we send a transaction to call the `cliam()` method of the lottery contract.

```js
const claimBonus = () => {
    setTxPending(false)
    uid.current = new Date().toISOString()
    const detail = JSON.stringify({
        uid: uid.current,
        networkType: networkType, 
        methodName: 'claim', 
        kwargs: {
            round_num: parseInt(data.id)
        }, 
        stampLimit: 300
    })

    //Send transaction to the wallet
    document.dispatchEvent(new CustomEvent('lamdenWalletSendTx', {detail}));
}
```

```js
useEffect(() => {
    const handleTxInfo = (response) => {
        console.log(response)
        if (response.detail.data.errors) {
            toast({
                # 'Wallet Error',
                description: response.detail.data.errors[0],
                status: 'error',
                duration: 9000,
                position: 'top',
                isClosable: true,
            })
        }else{
            let data = response.detail.data.resultInfo
            if (uid.current !== response.detail.data.uid) {
                return
            }

            toast({
                # data.title,
                description: `${data.subtitle}`,
                status: 'success',
                duration: 9000,
                position: 'top',
                isClosable: true,
            })
            setTxPending(false)
        } 
    }

    document.addEventListener('lamdenWalletTxStatus', handleTxInfo)

    return () => {
        document.removeEventListener('lamdenWalletTxStatus', handleTxInfo)
    }
}, [])
```

Save the code above and have a try.

![image](/img/toturials/send_tx_4.png)

Click the "Claim" button to get your prize.

![image](/img/toturials/send_tx_5.png)


**Congratulations you have completed your dapp ! **