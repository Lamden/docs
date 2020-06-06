---
id: using_the_wallet
title: Using the Wallet
sidebar_label: Using the Wallet
---

## Wallet and interacting with the wallet

Github: [https://github.com/Lamden/wallet](https://github.com/Lamden/wallet)

Current Doco: none

##  Locking and Unlocking
## Adding/Deleting a keypair
## Editing keypair info
### Changing nickname
You can change the name of the wallet by following next instruction.

![](img/wallet/../../../static/img/wallet/Rename_Wallet.gif)
### Purging transactions
### Copy public key

## Sending Transactions
            1.  What is a transaction on Lamden
                1. Data Types to choose (text, address, number etc)
            2.  How to send “TAU”
                1.  What is the currency contract
                2.  What is the transfer method
                3.  What are the args you need
        1.  Backup
            1.  Step by step explanation
            2.  What is the backup warning for?
            3.  Dismissing the warning
## Restore
            1.  Step by step explanation
## IDE
            1.  How to create a new blank contract
            2.  How to open an existing contract from the Lamden network
            3.  How to check contract for errors
            4.  How to submit contract the the network
        1.  Changing/Adding Lamden Blockchain networks
            1.  Types of networks (mainnet, testnet, mockchain)
            2.  Explain dTAU for testnet and mTAU for mockchain
            3.  Adding a new dev network
        2.  Deleting Wallet and wallet information
            1.  Removing extension
            2.  Deleting all storage info
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
            2.  Sending a transaction request
                1.  “SendTx” event details
                    1. Supply the method name, kwargs and network
                    2.  The wallet fills in the approved contract name
                    3.  The wallet fills in the public key (vk) that the was automatically created for your dapp
                    4.  The user will get a popup to approve the transaction
            3.  Listen for Wallet Info
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
            4.  Listen for Transaction Results
                1.  “TxStatus” can be listened to to get the result of a transaction
                    1.  If this is a “mockchain” transaction you will not get a hash, just a state result
                    2.  If this is a testnet or mainnet transaction you will get a hash back and then a subsequent state change result. It’s the dapps responsibility to keep track of these things
    2.  Interfacing with the blockchain via Lamden-js
        1.  Lots of examples exists at [https://github.com/Lamden/lamden-js](https://github.com/Lamden/lamden-js)
    3.  Create a SMALL example website that interfaces with the wallet to show all workflows and features that developers can take advantage of
        1.  [https://github.com/Lamden/wallet-integration-example](https://github.com/Lamden/wallet-integration-example) can be reworked to do this
        2.  Comment website code verbosely to show how it all works
2. Creating a server dapp (python)
    1.  How to use Lampy to create a dapp…
    2.  Create small dApp that can be shared on github as an example
    3.  Comment code verbosely
