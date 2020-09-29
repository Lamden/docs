---
id: installation
title: Lamden Wallet Installation
sidebar_label: Installation
---
![](/img/wallet/gif/1.0.0_wallet_install.gif)

The Lamden Wallet is a Chrome Extention and can be installed from the Chrome Web Store.

**This is the only official wallet from Lamden**

The extention is created for and tested in <u>[Chrome Browser](https://www.google.ca/chrome)</u>.  If can work in other chromium based broswers, but **install at own risk**.
 
## Chrome Installation Steps
1. Click on <u>[HERE](https://chrome.google.com/webstore/detail/lamden-wallet-browser-ext/fhfffofbcgbjjojdnpcfompojdjjhdim)</u> to view the Lamden Wallet in the Chrome Web Store.
2. Click the `Add to Chrome` button
3. On the broswer popup click `Add extention`
4. In the top right hand corner of the Chrome Browser click the `puzzle piece` icon.
5. In the resulting popup menu click the `pin icon` next to the Lamden Wallet Entry.
6. Click the `lamden logo` to launch the wallet.

## First Time Setup
Click the `lamden logo` on the extentions bar to launch the wallet.

![](/img/wallet/wallet_extention_logo.png)

- If you don't see the `lamden logo` click the `puzzle piece` logo and then `pin` the Lamden Wallet to the extention bar.

### Fresh Wallet Setup
1. Click, `CREATE A WALLET`.
2. Enter a strong password in the `Password` box that:
    - Is 10 or more characters in length
    - Has 1 lowercase letter
    - Has 1 uppercase letter
    - Has 1 number
    - Has 1 special character
3. Re-enter the password in the `Confirm Password` box.
4. Click, `SAVE PASSWORD`.
5. Click, `I UNDERSTAND` if you understand **backing up your wallet and keeping your passwords safe is YOUR RESPONSIBILITY**.
6. Follow steps to <u>[Backup Lamden Wallet to Keystore File](/docs/wallet/backup_keystore)</u>.




### Restore Wallet from Keystore
![](/img/wallet/gif/1.0.0_setup_from_keystore.gif)
1. Click, `CREATE A WALLET`.
2. Enter a strong password in the `Password` box that:
    - Is 10 or more characters in length
    - Has 1 lowercase letter
    - Has 1 uppercase letter
    - Has 1 number
    - Has 1 special character
3. Re-enter the password in the `Confirm Password` box.
4. Click, `SAVE PASSWORD`.
5. Chose a Keystore File in one of the following ways:
    - Click the link `click here to choose a file` to browse to the Keystore file.
    - Drag and drop the Keystore file into the `Drop File Here` box on the Lamden Wallet.
6. Click the `CONFIRM KEYSTORE` button.
7. Enter the password which was used to back up the Keystore.
    - If you entered a hint when you <u>[Created the Keystore](/docs/wallet/restore_keystore)</u> you will see it displayed.
8. Put a checkmark next to each accout you wish to restore
9. Click the `RESTORE ACCOUNTS` button.
10. After the restoration is complete you may see the following messages:
    - (success) `Added <account name> to your wallet` - This means the account was successfully restored.
    - (success) `Updated the private key for ` - This means a previously <u>[Watched Account](/docs/wallet/accounts_creation#track-account)</u> has been updated with the associated secret key and is now a full account.
    - (error) `Keypair already exists as <account name>` - There is an Account in your wallet that already has the keypair you're trying to restore.
    - (error) `Cannot decrypt Secret Key: wrong password or bad data. Encrypted Data: <secret key>` - After the key was decrypted with the keystore password the resulting information was not a secret key.
11. Click, `FINISH`


#### Re-linking Accounts
If you had <u>[Linked Account](/docs/wallet/accounts_linked_overview)</u> previously they will not be conneted.  You will have to follow the process to manually <u>[Re-Link](/docs/wallet/restore_linked_account)</u> to DAPPs.