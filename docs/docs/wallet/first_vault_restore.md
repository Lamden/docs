---
id: first_vault_restore
title: First Time Restore Lamden Vault
sidebar_label: Firstrun Restore Lamden Vault
---

You can restore accounts to your Lamden Vault in three ways at the first time you run.

### Restore Wallet from Keystore

1. Click, `Restore A WALLET`.
    ![](/img/wallet/firstrun_intro.png)
2. Enter a strong password in the `Password` box that:
    - Is 10 or more characters in length
    - Has 1 lowercase letter
    - Has 1 uppercase letter
    - Has 1 number
    - Has 1 special character
  ![](/img/wallet/firstrun_create_password.png)
3. Re-enter the password in the `Confirm Password` box.
4. Click, `SAVE PASSWORD`.
5. Select the option you want from the dropown.
    1. Select "Seed Recovery Phrase". Enter your seed recovery phrase in the seperate boxes.
       ![](/img/wallet/firstrun_recovery_phrase.png)
    2. Select "Keystore File". Chose a Keystore File in one of the following ways:
       - Click the link `click here to choose a file` to browse to the Keystore file.
       - Drag and drop the Keystore file into the `Drop File Here` box on the Lamden Vault. 
        ![](/img/wallet/firstrun_keystore.png)
    3. Select "Private Keys". Enter the private key of the account you want to restore in the `Private Key` input box.
    ![](/img/wallet/firstrun_privatekeys.png)
6. Click the `NEXT` button.
7. If you don't select "Keystore File" to restore your account in step 5, skip this step. Enter the password which was used to back up the Keystore.
    - If you entered a hint when you <u>[Created the Keystore](/restore_keystore)</u> you will see it displayed.
8. Put a checkmark next to each accout you wish to restore
    ![](/img/wallet/firstrun_add_wallet.png)
9.  Click the `RESTORE ACCOUNTS` button.
10. After the restoration is complete you may see the following messages:
    - (success) `Added <account name> to your wallet` - This means the account was successfully restored.
    - (success) `Updated the private key for ` - This means a previously <u>[Watched Account](/accounts_creation#track-account)</u> has been updated with the associated secret key and is now a full account.
    - (error) `Keypair already exists as <account name>` - There is an Account in your wallet that already has the keypair you're trying to restore.
    - (error) `Cannot decrypt Secret Key: wrong password or bad data. Encrypted Data: <secret key>` - After the key was decrypted with the keystore password the resulting information was not a secret key.
11. Click, `FINISH`


#### Re-linking Accounts
If you had any <u>[linked accounts](/accounts_linked_overview)</u> previously, they will not be connected.  You will have to follow the process to manually <u>[Re-Link](/restore_linked_account)</u> to DAPPs.