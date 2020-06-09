---
id: using_the_wallet
title: Using the Wallet
sidebar_label: Using the Wallet
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Wallet and interacting with the wallet

Github: [https://github.com/Lamden/wallet](https://github.com/Lamden/wallet)

Current Doco: none

###  Locking and Unlocking
### Adding/Deleting a keypair
### Editing keypair info
### Changing nickname
You can change the name of the wallet by following next instruction.

![](/img/wallet/Rename_Wallet.gif)

### Copy public key

## Sending Transactions

### What is a transaction on Lamden

### Data Types to choose (text, address, number etc)

In order to transfer TAU you need to take into account next fields:

- `The Wallet to sent from:` this field populating automatically once you select a a source account in the wallet.
  
- `Stamp Limit:` by default thi field has value '15000'.
  
- `Enter Contract Name`: since you are transfering money it has value 'currency'.

#### The field `Function name:` has next values to select:

- `transfer`
- `balance of`
- `total_supply`
- `allowance`
- `approve`
- `transfer from`


### How to send “TAU”

![](/img/wallet/send_tx_and_check_balance.gif)

### What is the currency contract

Currency contract allows to process cryptocurrency transferring between accounts.


### What is the transfer method

Transfer method has two arguments

- `Amount(decimal)`
- `To (txt)` - where address of recipient should be

### What are the args you need

To send transaction you need to enter only two arguments `Amount(decimal)` and `To (txt)` .

### Purging transactions

If you would like to clear the history of transactions in your wallet follow next steps:


1. Open the wallet
2. At left sidebar select `Holdings`
3. Select the wallet at which you would like to purge transactions.
4. Select `Options`.
5. Click on the `Purge Transactions`

To verify if transactions were purged
1. Open item `History` at the sidebar.

all transactions related to the selected wallet should be purged.

## Backup

### Step by step explanation
![](/img/wallet/backup_keystore.gif)

## What is the backup warning for?

The backup is stored and you got a tiny icon near item menu 'Backup Wallet'.

It warns you to make backup your wallet regularly. 


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
To restore your wallet you need to have a password that you used for creating keystore. 
Keep that password in a safe place. For example, you can use LastPass.

![](/img/wallet/restore_wallet.gif)

## IDE

### How to create a new blank contract
### How to open an existing contract from the Lamden network
### How to check contract for errors
### How to submit contract the the network

### Changing/Adding Lamden Blockchain networks

To change blockchain network follow next steps to change or add a new blockchain network.

1. Open the wallet
2. At the left navigation sidebar select `Developer Tools` .

You will get an interface where you can add new network by adding such parameters as:

- `Blockchain Network Name`
- `Network Type`
- `Hostname`
- `Port`
- `Network Symbol`
  
After adding network you will get an option to select new network in the dropdown list at the left.


### Types of networks (mainnet, testnet, mockchain)

There are three types of network that propose Lamden:

- Mainnet


- [Testnet](https://github.com/Lamden/cilantro-enterprise)
  

- [Mockchain](https://github.com/Lamden/mockchain)



### Explain dTAU for testnet and mTAU for mockchain



### Adding a new dev network


## Deleting Wallet and wallet information

The deletion of wallet is irreversible process. Before deletion be sure that you have made a backup of the wallet and you don't any assets on the account.


![](/img/wallet/wallet_deletion.gif)

### Removing extension

You can easily remove extension from the browser. 
![](/img/wallet/remove_wallet.gif)

### Deleting all storage info

Along with removing the lamden wallet extension from the chrome all data is removed from the local storage as well. So you can be sure that all sensitive information deleted.

1. Creating a web dapp (javascript)
    1.  Interfacing with the Lamden Wallet from a webpage
        1.  All messages from the webpage must be JSON encoded for security
        2.  Creating and Listening for wallet events
            1.  Sending an approve message to the wallet to have the user approve your dapp (website)
                1.  “Approve event” details
                    1. What Lamden network to approve for (mainnet, testnet, mockchain)
                    2. What contract to approve for (your dapp can only be associated with 1 contract and you can only submit transactions against that 1 contract
                    3. The user will get a popup to approve the transaction
                    4. If approved the wallet will create a new keypair specifically for your dapp
                    5. 
## Sending a transaction request

                1.  “SendTx” event details
                    1. Supply the method name, kwargs and network
                    2.  The wallet fills in the approved contract name
                    3.  The wallet fills in the public key (vk) that the was automatically created for your dapp
                    4.  The user will get a popup to approve the transaction


            1.  Listen for Wallet Info
                1.  “Wallet info” event can be listened to, to get
                    1.  Wallet installed status
                    2.  Wallet Locked status
                    3.  Wallet version
                    4.  Wallet vk associated with this dapp
                        1. Only sent when wallet is unlocked
                        2. dDApp can use this to check the TAU balance of it from the masternode
                    5.  Current approvals by network (mainnet, testnet, mockchain)
                        1. You can only have 1 approval on each Lamden network type
                        2. Contract names can be different
                        3. This info is only sent when the wallet is unlocked
                2.  Wallet info will automatically when the wallet is locked and unlocked
            2.  Listen for Transaction Results
                1.  “TxStatus” can be listened to to get the result of a transaction
                    1.  If this is a “mockchain” transaction you will not get a hash, just a state result
                    2.  If this is a testnet or mainnet transaction you will get a hash back and then a subsequent state change result. It’s the dapps responsibility to keep track of these things
    1.  Interfacing with the blockchain via Lamden-js
        1.  Lots of examples exists at [https://github.com/Lamden/lamden-js](https://github.com/Lamden/lamden-js)
    2.  Create a SMALL example website that interfaces with the wallet to show all workflows and features that developers can take advantage of
        1.  [https://github.com/Lamden/wallet-integration-example](https://github.com/Lamden/wallet-integration-example) can be reworked to do this
        2.  Comment website code verbosely to show how it all works
1. Creating a server dapp (python)
    1.  How to use Lampy to create a dapp…
    2.  Create small dApp that can be shared on github as an example
    3.  Comment code verbosely
