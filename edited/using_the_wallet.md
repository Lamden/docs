---
id: using_the_wallet
title: Using the Wallet
sidebar_label: Using the Wallet
---
 
## Using and interacting with the wallet
 
Github: [https://github.com/Lamden/wallet](https://github.com/Lamden/wallet)
 
###  Locking and Unlocking
Unlocking: 
If the wallet is locked, you will be required to enter your password before using it. Once your password has been entered, the wallet will unlock.
 
The wallet will remain unlocked if you close the browser tab. It remains active in the background of the browser so that dApps can interact with it.
 
Locking:
There are two ways to lock the wallet.
 
Explicitly: Click the `Sign out & Lock` menu item on the left hand  menu
 
Implicitly: Closing down your browser window (not just the tab)
 
### Adding/Deleting a account
 
There are three types of accounts thatcan be added to the wallet
 
1. Create a new account
2. Add an existing account
3. Add an address tracked only by you.
 
To Create a New Account 
 
1. Open the Lamden extension in your browser
2. Click on `Accounts`
3. On the right-hand screen, select `Add Account.`
4. Select `Create New`
5. Enter Wallet Nickname (Optional)
6. Click Save
 
To Add an Existing Account 
 
1. Open the Lamden extension in the browser
2. Click on `Accounts`
3. On the right-hand screen, select `Add Account.`
4. Select `Add Existing Account`
5.  Enter Private Key
6.  Enter Wallet Nickname (Optional)
7.  Click Save
 
To Add a Tracked Address 
 
1. Open the Lamden extension in the browser
2. Click on `Accounts`
3. On the right-hand screen, select `Add Account.`
4. Select `Add Track Address`
5. Enter Private Key
6. Enter Wallet Nickname (Optional)
7. Click Save
 
### Editing wallet info
 
#### Changing nickname
 
To rename the wallet follow the instructions below.
 
1. Open the Lamden extension in the browser
2. Click on `Account`
3. Click on the wallet that you would like to rename.
4. Click on `Options`.
5. Select `Edit Wallet Nickname.`
6. Change `Nickname`.
7. Click Save.
8. Click Back.
 
![](/img/wallet/Rename_Wallet.gif)
 
### Copy Account Address
 
1. Open the Lamden extension in the browser
2. Click on `Accounts`
3. Select the relevant account.
4. Click on `Options`.
5. Click on the option `Copy Key to Clipboard`.
 
Now you are able to send the copied address funds from your accounts, or you share the Address with somebody and ask them to send funds in the future.
 
## Sending Transactions
 
### What is a transaction on Lamden
 
The transaction occurs as a result of a smart working contract caused by an internal or external function.
 
Technically, the transaction in Lamden is stored as a record in the database with specific arguments.
The arguments include all data necessary to track the event related to the transaction. 
 
### Data Types to choose (text, address, number etc)
 
To transfer TAU,the following fields must be taken into account:
 
- `The Account to be sent from`: once you select a source account in the wallet, this field is automatically populated.
  
- `Stamp Limit:` by default, this field has value `15000`.
  
- `Enter Contract Name`: since money is being transferred, it has the value `currency`.
 
"The currency contract is the contract where TAU is held."
 
#### The field `Function name`: has the following  values to select:
 
- `transfer`
- `balance of`
- `total_supply`
- `allowance`
- `approve`
- `transfer from`
 
### How to send “TAU”
1. Open wallet 
2. Click on `Account`
3. On the right hand side of the screen click `SEND TX`
4. Select `The Account to send From` 
5. Leave fields populated by default: `Stamp Limit` `Enter Contact Name`, `Function Name`.
 
To send transactions to enter `Transaction Arguments`.
 
In the`Amount` field, enter any amount that you are going to send and in the `To(text)-account address` field, enter the Address of recipient.
 
Click `Next`
 
On the next screen, click `Confirm Transaction` and click Ok. 
 
Click `Home`.
 
![](/img/wallet/send_tx_and_check_balance.gif)
 
### What is the currency contract
 
Currency contract allows the processing of cryptocurrency transfers between accounts.
 
That smart-contract checks the balance on your account, and if enough funds are available, the set amount will be sent to the recipient.
 
The code of the contract is accessible through  this link
 
**[Currency.py](https://github.com/Lamden/cilantro/blob/dev/cilantro_ee/contracts/genesis/currency.s.py)**
 
### What is the transfer method
 
Transfer Method has two arguments:
 
- `Amount(decimal)`
- `To (txt)` - where Address of recipient is entered
 
### What are the arguments necessary
 
To send a transaction, it is necessary to enter only two arguments `Amount(decimal)` and `To (txt)`.
 
### Purging transactions
 
If you would like to clear the history of transactions in your wallet, follow thesteps below:
 
1. Open the wallet
2. From theleft sidebar, select `Accounts`
3. Select the account from which you would like to purge transaction records.
4. Select `Options`.
5. Click on the `Purge Transactions`
 
To verify if transactions were purged
 
6. Open item `History` at the sidebar.
 
All transactions related to the selected account should be purged.
 
## Backup 
 
You are able to save a backup of either your main account or all of your accounts stored in the wallet. 
 
There are several cases when this feature can help you. For example, when  replacing  your laptop or deleting a browser, in other cases, re-installing the OS. 
 
All cases above require a backup of your wallet to be made.  Once you delete the extension, the storage space for the extension is removed as well, so all data related to the wallet is removed too.
 
As a result, the account backup is stored as a keystore file.
 
The keystore is an encrypted file containing all `wallets` (accounts and private keys) in storage. 
 
So you are able to access that keystore, and restore those keypairs to a different wallet if you have the KEYSTORE password.  
 
The keystore does not use the wallet's password at all.
 
:::note
 
Keystore does not backup dapp relationships or transaction history.
 
:::
 
### Step by step explanation
 
1. Open wallet 
 
2. From the  left sidebar, click on the item `Backup Wallet`.
3. On the right side of the screen, click on the button `Backup Wallet`.
4. Click `Create Backup File`
5. On  the next screen enter 
   
- Password
- Confirm Password
- Password Hint
 
6. Click `Keystore`
 
:::note  
To keep passwords in one place, you can use **[LastPass.com](https://www.lastpass.com)**
Keep that password in a safe place. For example, using LastPass.
:::
 
On the next step, the Keystore file will be generatedonfirm by marking the checkbox `I Understand` and click on `Download File.`
 
In theinterface to the filesystem which opens, select a disk and a folder where you would like to store a Keystore file.
 
7. Click `Save`.
   
![](/img/wallet/backup_keystore.gif)
 
## What is the backup warning for?
 
Regular backups are necessary every time a new account is created (which is why the wallet has that warning).
 
The backup is stored, and you are able to create a new account. There is a tiny icon near the item menu `Backup Wallet`.
 
This  warns you to make a backup of your wallet in order to include a new account in the backup. 
 
<div class="alert alert--warning" role="alert">
  <button aria-label="Close" class="close" type="button">
    <span aria-hidden="true">×</span>
  </button>
  `You have added Keys since your last backup so it is HIGHLY recommended that you create another backup.`
</div>
 
![](/img/wallet/backup_warning.gif)
 
### Dismissing the warning
 
You are able to  click on the icon at the end of the warning and dismiss it.
 
## Restore
 
1. Open the wallet
2. On  the left sidebar, click `Restore Wallet`.
3. On  the right hand side  of the screen, click `Restore Wallet`.
 
In order to restore the wallets, it is necessary  to have a keystore file that you save while making a backup of wallets. 
 
4. Click on the link `Click here to choose a file` or drag and drop a file in the area `Drop File Here`.
5. Click on the `Confirm Keystore`
6. On the next screen, enter the password used for storing the keystore.
7. Select the accounts to be restored, by marking the checkbox
8. Click `Restore Wallets`
 
Your wallets will be restored.
 
### Option 2 to backup your account without generating keystore file
1. Open the wallet
2. Click `Backup Wallet`
3. On  the right side of the screen click `Backup wallet`
4. On the next screen, click `View Account Keys`.
5. The window with the wallet request will appear. 
6. Enter `password` of your account
7. Click `Ok`.
 
On  the right hand side of the screen, you will see the list of all your accounts and associated private keys. 
 
 The private key of the selected account can be copied and stored in a secure manner. 
 
The account can be restored byfollowing the next steps.
1. Open the wallet.
2. Click on `Accounts`.
3. Click on `Add Account`.
4. On the next screen, select an appropriate network.
5. Within  the block `Choose Action`.
   1. Click `Add Existing`.
   2. Enter the previously copied Private Key.
   3. Enter `Account Nickname`.
   4. Click `Save`.
 
## IDE
 
The Lamden Vault includes an interface utilised for the submission of smart contracts. 
Using embedded IDE in the Lamden Vault, you are able to  view existing contracts on the network, as well as  submit new smart contracts.
 
### How to create a new blank contract
 
1. Open the wallet 
2. Click `Smart Contracts`
3. On  the right hand side of the screen, click on `+` to add a new smart contract.
4. On the next screen, select `Blank Contract`. 
 
Within the option  `Blank Contract`, the area intended for writing a contract will be empty.
In other cases, if `Example Contract` is selected, you will see a smart-contract with an example for reference.
 
### How to open an existing contract from the Lamden network
 
There is an option to view the sources of the smart contract which was submitted to the Blockchain. 
 
1. Open the wallet.
2. Click on `Smart Contracts`
3. On  the right hand side of the screen, click on `+` to add a new smart contract.
 
In the field labelled `From Blockchain`, you are able to enter the name of the contract that was previously submitted  in the Blockchain. For example - `currency` and click `Open`. The new tab with the contract will be opened.
 
### How to check the contract for errors
 
Once you have finished writing the smart contract, orpasted it there, you are able to check if the smart-contact has errors. 
 
To check the smart contract, you can click on `Check Contract`. If the smart contract has any errors, a warning will appear.. 
 
### How to submit a contract to the network
 
1. Open the wallet.
2. Click `Smart Contracts`
3. On  the right hand side of the screen, click on`+` to add a new smart contract.
4. Write a smart contract and click `Submit to Network`.
 
### Changing/Adding Lamden Blockchain networks
 
Follow the steps below in order to change the blockchain  network, or add a  new one.
 
1. Open the wallet
2. Within the left navigation sidebar, select `Developer Tools`.
 
 An interface will appear, where you can add a new network by including parameters such as:
 
- `Blockchain Network Name`
- `Network Type`
- `Hostname`
- `Port`
- `Network Symbol`
  
After adding the network, you receive the  option to select a new network in the dropdown list to the left.
 
### Types of networks (mainnet, testnet)
 
There are three types of network that propose Lamden:
 
- Mainnet
 
- [Testnet](https://github.com/Lamden/cilantro-enterprise)
  
 
### Explain dTAU for testnet
 
The Testnet network utilises  cryptocurrency. 
 
These cryptocurrencies exist only in mentioned networks and cannot be exchanged or transferred between networks.
 
However, cryptocurrencies can be used for the testing of dApps and smart contracts.
 
### Adding a new dev network
 
Within  the wallet, click on the top right corner `Current Network`.
On  the newly opened screen you will see two sections:
 
- `Current Network` and 
- `Add Network`
 
In the section `Add Network`, enter the following parameters.
 
- Name 
- Select `Network Type` among values Mockchain, Testnet, Mainnet
- Hostname
- Port
- Network Symbol
 
Click `Add Network`.
 
## Deleting Wallet and account information
 
:::danger
If you do not possess a backup of the wallet, the deletion of the wallet is an irreversible process. Prior to deletion, make sure that you have already made a backup of the wallet, and/or don't have any assets remaining on the account.
:::
 
1. Open the wallet
2. Click on `Accounts`
3. From the list of accounts on the right hand side of the screen, click on the account that you would like to delete.
4. Click on `Options`.
5. On the next screen, select `Delete Wallet`
6. Enter the password to validate wallet deletion.
7. Confirm Wallet Deletion
 
![](/img/wallet/wallet_deletion.gif)
 
### Removing extension
 
You are able to easily remove the extension from the browser by completing the following process. 
 
In the Chrome browser:
 
1. Click on `Options`. 
2. Select `More Tools` -> `Extensions`
3. Find `Lamden Vault Extension`.
4. Click on the button `Remove`.
5. Confirm the deletion of the extension by clicking `Remove` once more.
The extension is now removed successfully from the browser.
 
![](/img/wallet/remove_wallet.gif)
 
### Deleting all storage info
 
Along with the removal of the Lamden Vault extension from Chrome, all related data is removed from local storage as well. It is thus guaranteed that all sensitive information has been deleted.
