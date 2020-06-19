---
id: using_the_wallet
title: Using the Wallet
sidebar_label: Using the Wallet
---

## Wallet and interacting with the wallet

Github: [https://github.com/Lamden/wallet](https://github.com/Lamden/wallet)

###  Locking and Unlocking
Unlocking: 
If the wallet is locked, you will be required to enter your password before using it. Once you enter your password, the wallet will unlock.

The wallet will stay unlocked if you close the browser tab. It remains active in the background of the browser so that dApps can interact with it.

Locking:
There are two ways to lock the wallet.

Explicitly: Click the "Sign out & Lock" menu item on the left-side menu

Implicitly: Closing down your browser (not just the tab)

### Adding/Deleting a account

There are three types of accounts that you can add to the wallet

1. Create New
2. Add Existing
3. Add Address that you will track only.

To create a new account 

1. Open the Lamden extension in the browser
2. Click on the `Accounts`
3. At the right screen, select `Add Account.`
4. Select `Create New`
5. Enter Wallet Nickname (Optional)
6. Click Save

To add Existing account 

1. Open the Lamden extension in the browser
2. Click on the `Accounts`
3. At the right screen, select `Add Account.`
4. Select `Add Existing Account`
5.  Enter Private Key
6.  Enter Wallet Nickname (Optional)
7.  Click Save

To add Track Address 

1. Open the Lamden extension in the browser
2. Click on the `Accounts`
3. At the right screen, select `Add Account.`
4. Select `Add Track Address`
5.  Enter Private Key
6.  Enter Wallet Nickname (Optional)
7.  Click Save

### Editing wallet info

#### Changing nickname

You can change the name of the wallet by following the next instruction.

1. Open the Lamden extension in the browser
2. Click on the `Account`
3. Click on the wallet that you would like to change a nickname.
4. Click on the options.
5. Select `Edit Wallet Nickname.`
6. Change `Nickname`.
7. Click Save.
8. Click Back.

![](/img/wallet/Rename_Wallet.gif)

### Copy Account Address

1. Open the Lamden extension in the browser
2. Click on the `Accounts`
3. Select the account.
4. Click on the `Options`.
5. Click on the button `Copy Key to Clipboard`.

Now you can send on the copied address funds from your accounts, or you can give the Address to somebody and ask them to send funds in the future.

## Sending Transactions

### What is a transaction on Lamden

The transaction is a result of a smart working contract that was called by function internally or externally.

Technically the transaction in Lamden is a record stored in the database with specific arguments.
The arguments include all necessary data to track the event related to the transaction. 

### Data Types to choose (text, address, number etc)

To transfer TAU, you need to take into account the next fields:

- `The Account to sent from`: once you select a source account in the wallet, this field is populating automatically.
  
- `Stamp Limit:` by default, this field has value '15000'.
  
- `Enter Contract Name`: since you are transferring money, it has value 'currency.'
"The currency contract is the contract where TAU is held."


#### The field `Function name`: has next values to select:

- `transfer`
- `balance of`
- `total_supply`
- `allowance`
- `approve`
- `transfer from`

### How to send “TAU”
1. Open wallet 
2. Click on the `Account`
3. At the right part of the screen click on `SEND TX`
4. Select `The Account to send From` 
5. Leave fields populated by default: `Stamp Limit` `Enter Contact Name`, `Function Name`.

To send transactions to enter `Transaction Arguments`.

In the field, `Amount` enter any amount that you are going to send and `To(text)-account address` the Address of recipient.

Click `Next`

On the next screen, click `Confirm Transaction` and click Ok. 

Click `Home`.

![](/img/wallet/send_tx_and_check_balance.gif)

### What is the currency contract

Currency contract allows processing cryptocurrency transferring between accounts.

That smart-contract checks the balance on your account, and if you have enough funds, the amount that you set will be sent to the recipient.

The code of the contract you can see by this link

**[Currency.py](https://github.com/Lamden/cilantro/blob/dev/cilantro_ee/contracts/genesis/currency.s.py)**

### What is the transfer method

Transfer method has two arguments

- `Amount(decimal)`
- `To (txt)` - where Address of recipient should be

### What are the args you need

To send transaction, you need to enter only two arguments `Amount(decimal)` and `To (txt)`.

### Purging transactions

If you would like to clear the history of transactions in your wallet, follow the next steps:

1. Open the wallet
2. At left sidebar select `Accounts`
3. Select the account at which you would like to purge transactions.
4. Select `Options`.
5. Click on the `Purge Transactions`

To verify if transactions were purged

6. Open item `History` at the sidebar.

All transactions related to the selected account should be purged.

## Backup 

You can save a backup of your main account or all of your accounts stored in the wallet. 

There are some cases when this feature can help you. For example, you are going to change your laptop or delete a browser, in other cases, to re-install the OS. 

All mentioned cases required to make a back up of your wallet. Once you delete the extension, the storage space for the extension will be deleted as well, so all data related to the wallet will be deleted too.

As a result of backup keystore file will be created.

The keystore is just an encrypted file containing all "wallets" (accounts and private keys) in storage. 

So you can take that keystore, and restore those keypairs to a different wallet if you have the KEYSTORE password.  

The keystore does not use the wallet's password at all.

:::note

Keystore does not backup dapp realationships or transaction history.

:::

### Step by step explanation

1. Open wallet 

2. At the left sidebar, click on the item `Backup Wallet`.
3. On the right side of the screen, click on the button `Backup Wallet`.
4. Click `Create Backup File`
5. In the next screen enter 
   
- Password
- Confirm Password
- Password Hint

6. Click `Keystore`

:::note  
To keep passwords in one place you can use **[LastPass.com](https://www.lastpass.com)**
Keep that password in a safe place. For example, you can use LastPass.
:::

On the next step, the Keystore file will be generated, and you will be asked to confirm by marking the checkbox `I Understand` and click on `Download File.`

In the opened interface to the filesystem, select a disk and a folder where you would like to store a Keystore file.

7. Click `Save`.
   
![](/img/wallet/backup_keystore.gif)

## What is the backup warning for?

Regular backups are nessessary everytime a new account is created (that's why the wallet has that warning).

The backup is stored, and you create a new account then you get a tiny icon near the item menu 'Backup Wallet'.

It warns you to make a backup of your wallet in order to include new account in the backup. 


<div class="alert alert--warning" role="alert">
  <button aria-label="Close" class="close" type="button">
    <span aria-hidden="true">×</span>
  </button>
  `You have added Keys since your last backup so it is HIGHLY recommended that you create another backup.`
</div>

![](/img/wallet/backup_warning.gif)

### Dismissing the warning

You can click on the icon at the end of the warning and dismiss it.

## Restore


1. Open the wallet
2. In the left sidebar click `Restore Wallet`.
3. In the right part of the screen click `Restore Wallet`.

For restoring the wallets you need to have a keystore file that your save while making backup of wallets. 

4. Click on the link `Click here to choose a file` or drag and drop a file in the area `Drop File Here`.
5. Click on the `Confirm Keystore`
6. On the next screen enter the password that you used for storing the keystore.
7. Select the accounts that you would like to restore by marking the checkbox
8. Click `Restore Wallets`

Your wallets will be restored.

### Option 2 to backup your account without generating keystorefile
1. Open the wallet
2. Click `Backup Wallet`
3. At the right side of the screen click `Backup wallet`
4. On the next screen click `View Account Keys`.
5. The window with request of your wallet will appear. 
6. Enter `password` of your account
7. Click `Ok`.

At the right part of the screen you will see the list of all your accounts and associated private keys. 

You can copy private key of selected account and store it in secure way. 

You can restore the account following next steps.
1. Open the wallet.
2. Click on `Accounts`.
3. Click on `Add Account`.
4. On the next screen select an appropriate network.
5. In the block `Choose Action`.
   1. Click `Add Existing`.
   2. Enter the copied Private Key.
   3. Enter `Account Nickname`.
   4. Click `Save`.


## IDE

The Lamden wallet includes an interface for the smart contract submission. 
Using embedded IDE in the Lamden wallet, you can view existed contracts on the network and submit new smart contracts.

### How to create a new blank contract

1. Open the wallet 
2. Click `Smart Contracts`
3. At the right part of the screen, click on the `+` to add a new smart contract.
4. On the next screen, select `Blank Contract`. 

In option  `Blank Contract`, the area for writing a contract will be empty.
In other cases, if you select `Example Contract,` you will see smart-contract with an example for reference.

### How to open an existing contract from the Lamden network

There is an option to get the sources of smart contract that was submitted to the Blockchain. 

1. Open the wallet.
2. Click `Smart Contracts`
3. At the right part of the screen, click on the `+` to add a new smart contract.

In the field `From Blockchain`, you can enter the name of the contract that was submitted before in the Blockchain, for example - `currency` and click `Open`. The new tab with the contract will be opened.

### How to check contract for errors

Once you finished writing the smart contract or just paste it there, you can check if the smart contact has errors. 

To check the smart contract, you can click on `Check Contract`. If the smart contract has any errors, you will get  warnings. 

### How to submit contract to the network

1. Open the wallet.
2. Click `Smart Contracts`
3. At the right part of the screen, click on the `+` to add a new smart contract.
4. Write a smart contract and click `Submit to Network`.

### Changing/Adding Lamden Blockchain networks

To change blockchain network follow next steps to change or add a new blockchain network.

1. Open the wallet
2. At the left navigation sidebar, select `Developer Tools`.

You will get an interface where you can add a new network by adding such parameters as:

- `Blockchain Network Name`
- `Network Type`
- `Hostname`
- `Port`
- `Network Symbol`
  
After adding the network you will get an option to select a new network in the dropdown list at the left.

### Types of networks (mainnet, testnet)

There are three types of network that propose Lamden:

- Mainnet

- [Testnet](https://github.com/Lamden/cilantro-enterprise)
  

### Explain dTAU for testnet and mTAU for mockchain

Testnet and Mockchain network has cryptocurrency. 

These cryptocurrencies  exist only in mentioned networks and cannot be exchanged or transferred between networks.

However, you can use cryptocurrencies for the test of dApps and smart contracts.

### Adding a new dev network

In the wallet, click on the top right corner `Current Network`.
At the opened screen you will see two sections:

- `Current Network` and 
- `Add Network`

In the section `Add Network`, you enter the next parameters.

- Name 
- Select `Network Type` among values Mockchain, Testnet, Mainnet
- Hostname
- Port
- Network Symbol

Click `Add Network`.

## Deleting Wallet and account information

:::danger
If you don't have a backup of the wallet the deletion of wallet is irreversible process. Before deletion be sure that you have made a backup of the wallet and/or you don't have any assets on the account.
:::

1. Open the wallet
2. Click on `Accounts`
3. From the list of accounts in right part of the screen click on the account that you would like to delete.
4. Click on `Options`.
5. On the next screen select `Delete Wallet`
6. Enter the password to validate wallet deletion.
7. Confirm Wallet Deletion

![](/img/wallet/wallet_deletion.gif)

### Removing extension

You can easily remove extension from the browser. 

In the Chrome

1. Click on the options. 
2. Select More Tools -> Extensions
3. Find Lamden Wallet extension.
4. Click on button `Remove`.
5. Confirm the deletion of the extension by clicking `Remove` one more time.
Now the extension is removed from the browser.

![](/img/wallet/remove_wallet.gif)

### Deleting all storage info

Along with removing the lamden wallet extension from the chrome all data is removed from the local storage as well. So you can be sure that all sensitive information deleted.
