---
id: overview
hide_title: Lamden Vault Overview
sidebar_label: Overview
---
 
## Keeps keys safe
`Keys` are credentials to access assets within Lamden. Anybody who possesses keys can access assets, and then withdraw them by transferring them to another account. 
 
### Strong password
 
There are some general rules regarding the creation of a password. 
 
1. Do not use words or phrases commonly found in dictionaries. 
2. Do not use the birthdate of either yourself or or your relatives.
3. Do not keep written notes with your password on display in the vicinity of your laptop.
 
whilst creating a wallet in Lamden, one must enter a minimum of ten symbols, among them, the following must be included:
 
* 1 Lowercase Letter
* 1 Capital Letter
* 1 Number
* 1 Special Character
 
To create a wallet in Lamden, follow the instructions below.
 
![](/img/wallet/creating_wallet.gif)
 
### Private keys Encrypted in browser storage
 
### Extension storage and messaging is sandboxed to the extension namespace
 
## Allows backing up and restoring of keys
 
Within the Lamden Vault, the keys are able to be backed up and stored anywhere offline. 
 
### What is a Keystore file
Using the Keystore file, it provides the ability to restore access to the wallet in case the password was forgotten. 
 
TheKeystore file can be backed up by following the instructions below.
 
![](/img/wallet/backup_keystore.gif)
 
### Restoring keys
 
Restoration of the key is a straightforward process. To do so, all that is necessary is a Keystore file that was previously backed up and a password. 
 
The instruction to do so are as follows:
 
1. Open the wallet
2. From the left sidebar, click `Restore Wallet.`
3. On the right-hand side of the screen, click `Restore Wallet`.
4. To progress to the next screen, it is necessary to choose/pick a Keystore file from your filesystem and drag it to the area `Drop File Here`.
5. Click `Confirm Keystore.`
6. Enter the password which was used to back up the Keystore.
   
The list of accounts able to be restored will appear. 
 
1. Select the accounts that you would like to restore by checking the corresponding box. 
   
 
![](/img/wallet/restore_wallet.gif)
 
###  Smart contract IDE
In the Lamden Vault, an IDE is present which can be used to develop the smart contract.
 
#### Create Lamden Smart contracts
 
1. Open the wallet 
2. Click on `Smart Contracts`
3. On the right-hand side of the screen, click `+` to add a new smart contract.
4. On the next screen, select either of the available options, `Blank Contract` or `Example Contract`. 
 
In the event that `Blank Contract`is selected, the area designated for writing a contract will remain empty.
In other cases, if `Example Contract` is selected, a smart-contract example will be visible for reference.
 
For more detailed information follow the given link  [link](/docs/using_the_wallet#ide)
 
### “Lint” for python syntax and “contracting” specific errors
The embedded IDE in the wallet supports the python syntax, and helps to catch errors using `contracting` methods.
 
### Test Lamden Smart contracts
#### Test Methods
Lamden platform allows very flexible methods in order to  test smart contracts. 
 
Amongst various available methods, the user is able to choose to test directly on the test networks, by deploying the smart contract through IDE in the Lamden Vault. 
 
Another available method entails the  deployment of a local Python server such as `Sanic Server`.
 
More detailed instructions can be found by following the **[link](/docs/basics_smart_contracts.md)**
 
Smart contracts can be tested on different Blockchain networks by submitting them through IDE.
 
More information regarding  blockchain networks can be found by following the **[link](/docs/using_the_wallet#types-of-networks-mainnet-testnet-mockchain)**
 
 
 
 
 
 
 

