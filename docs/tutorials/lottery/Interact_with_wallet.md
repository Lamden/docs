# Connect Lamden vault

![image](/img/toturials/connect_vault_overview.gif)

<!--truncate-->

:::info

the following skills are necessary for these tutorials(web):
- Experience using the command line
- Basic knowledge about JavaScript, React, Git

:::

[<strong style={{color: "tomato"}}><u>Here is the completed Git repo for this part</u></strong>](https://github.com/Dapiguabc/lottery)


### 1. Open the starter web project

Clone the exercise [<u>**repo**</u>](https://github.com/Dapiguabc/lottery).

```bash
git clone https://github.com/Dapiguabc/lottery.git
```

Open the folder ——— lottery-frontend(Tutorials) in Visual Studio Code

![image](/img/toturials/connect_vault_1.png)

Let's start this project!

```bash
npm run start
```

Open your browser and navigate to http://localhost:3000. You would see an uncompleted Lottery Dapp.

![image](/img/toturials/connect_vault_2.png)

### 2. Connect Lamden Vault

Open the file `src\Components\Layout.jsx`. We will complete the function of connecting the Lamden Vault.

![image](/img/toturials/connect_vault_3.png)

Now let us complete the function `connect()` which will send a connection request by dispatching a "lamdenWalletConnect" event.
For more details, click [<u>here</u>](/docs/develop/wallet_api/create_connection).

As you can see in the following code, there are two variables **AppInfo** and **Network**. 
**AppInfo** saves the dapp info and the **Network** records the Lamden Network info. You can edit them as needed in file `src\Constant.js`.

```js
const connect = () => {
    const detail = JSON.stringify({
        appName: AppInfo.appName, // dapp name
        version: AppInfo.version, // dapp verision
        logo: AppInfo.logo, // dapp logo
        contractName: Network[process.env.NODE_ENV].contractName, // the contract name you create at tutorial "Write Lottery Contract" 
        networkType: Network[process.env.NODE_ENV].networkType, // Network type
    })

    // Dispatch connection event
    document.dispatchEvent(new CustomEvent('lamdenWalletConnect', {detail}));
}
```

It's time to handle the response of the connection request from Lamden Vault.

First we should add a listener to receive the response and call the callback function to handle it.
We use `addEventListener` to add a listener for 'lamdenWalletConnect' event. The callback function `handleWalletConnect`
will be called when the listener receive a message. 

Also, don't forget to remove the existing listener to prevent memory leakage.

```js
useEffect(() => {
    document.addEventListener('lamdenWalletConnect', handleWalletConnect);
    return () => {
        document.removeEventListener('lamdenWalletConnect', handleWalletConnect);
    }
}, [])
```

When we get the response of the connecting request, we should give feedback to users whether the connection is successful.
**If success,  we should update the wallet context.**

```js
const handleWalletInfo = (response) => {
    if (response.detail.errors){
        // If an error occurs, a pop-up window will appear
        toast({
            # 'Wallet Error',
            description: response.detail.errors[0],
            status: 'error',
            duration: 9000,
            position: 'top',
            isClosable: true,
        });
        return;
    } else {
        let locked = response.detail.locked;
        let account = !locked && response.detail.wallets.length > 0 ? response.detail.wallets[0] : null;
        // account: Wallet account
        // locked: Whether the Lamden Vault is locked
        // connected: Whether connection is successful
        setWallet({
            ...wallet,
            locked,
            account,
            connected: account ? true : false,
        })
    }
}
```

If we want to disconnect from the Lamden vault, just reset the wallet context.

```js
const disconnect = () => {
    setWallet({
        connected: false,
        locked: true,
        tauBalance: 0,
        address: null,
    })
}
```

### 3. Test the application

Save the changes in the file `src\Components\Layout.jsx` and then come back to your browser.

**Click the button `Connect` on the top right-corner of the page.**

If your Lamden Vault is locked, you will see:

![image](/img/toturials/connect_vault_4.png)

If your Lamden Vault is unlock, you will see:

![image](/img/toturials/connect_vault_5.png)

![image](/img/toturials/connect_vault_6.png)

![image](/img/toturials/connect_vault_7.png)

![image](/img/toturials/connect_vault_8.png)
