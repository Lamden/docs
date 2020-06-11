---
id: purpose_of_the_wallet
title: The Purpose of the Wallet
sidebar_label: The Purpose of the Wallet
---


## Keeps keys safe
Keys are credentials to your assets in Lamden. Anybody who has keys can get assets and withdraw them by transferring to another account. 

### Strong password

There are some general rules about creating a password. 

1. Don't use words or phrases from dictionaries. 
2. Don't use as password your birthdate or your's relatives.
3. Don't stick written notes with a password on the display of your laptop.

While creating a wallet in Lamden, you need to enter at least ten symbols, among them should be:

* 1 Lowercase Letter
* 1 Capital Letter
* 1 Number
* 1 Special Character

You can follow the next instruction on how to create a wallet in Lamden

![](/img/wallet/creating_wallet.gif)

### Private keys Encrypted in browser storage

### Extension storage and messaging is sandboxed to the extension namespace

## Allows backing up and restoring of keys

In the Lamden wallet, you can backup the keys and store them anywhere offline. 

### What is a Keystore file
By using the Keystore file, you can restore your access to the wallet in the case if you forgot the password. 

You can backup your Keystore file by using the next instruction.

![](/img/wallet/backup_keystore.gif)

### Restoring keys

To restore the key is pretty straightforward. All you need to have is a Keystore file that you backed up before and a password. 

The instruction on how to do it as follows:

1. Open the wallet
2. In the left sidebar, click on `Restore Wallet.`
3. In the right part of the screen, click `Restore Wallet.`
4. For passing the next  screen, you need to choose/pick a Keystore file from your filesystem and bring it to the area `Drop File Here`.
5. Click `Confirm Keystore.`
6. Enter the password that you used to back up a Keystore.
   
You will find the list of accounts to restore. 

1. Mark checkboxes near the accounts that you would like to restore. 
   

![](/img/wallet/restore_wallet.gif)

###  Smart contract IDE
In the Lamden wallet there is an IDE that your can use for development the smart contract.

#### Create Lamden Smart contracts

1. Open the wallet 
2. Click `Smart Contracts`
3. At the right part of the screen, click on the `+` to add a new smart contract.
4. On the next screen, select one of the options `Blank Contract` or `Example Contract`. 

If you select  `Blank Contract`, the area for writing a contract will be empty.
In other cases, if you select `Example Contract,` you will see smart-contract with like an example for reference.

More detailed information you can get following the  [link](/docs/using_the_wallet#ide)

### “Lint” for python syntax and “contracting” specific errors
The embedded IDE in the wallet support the python syntax and helps to catch the errors by using `contracting` methods.

### Test Lamden Smart contracts
#### Test Methods
Lamden platform allows very flexible methods for testing smart contracts. 

Among available methods you can choose to test directly on the test networks by deploying the smart contract through IDE in Lamden wallet. 

Another available method to deploy a local Python server such as `Sanic Server`.

More detailed instruction you can find here by following the **[link](/docs/basics_smart_contracts.md)**

You can test smart contracts on different Blockchain networks by submission them through IDE.

More information about blockchain networks you can read following the **[link](/docs/using_the_wallet#types-of-networks-mainnet-testnet-mockchain)**



## Allows approving and whitelisting of dapps that can access your keys
### Approving a dapp (via popup)
### Approving a transactions from a dapp (via popup)
### Whitelisting dapp transactions
## Risks
### You must trust the App
### Benefits
#### You don't need to approve each transaction


