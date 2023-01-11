
# Restore Accounts from a Keystore File

 ![image](/img/wallet/gif/1.0.0_restore_keystore.gif)

1. Unlock Lamden Vault
2. From the left-hand menu, click `Settings`
3. Click the `RESTORE WALLET` button from the Settings Menu.
4. Chose a Keystore File in one of the following ways:
    - Click the link `click here to choose a file` to browse to the Keystore file.
    - Drag and drop the Keystore file into the `Drop File Here` box on the Lamden Vault.
5. Click the `CONFIRM KEYSTORE` button.
6. Enter the password which was used to back up the Keystore.
    - If you entered a hint when you <u>[Created the Keystore](/docs/wallet/restore_keystore)</u> you will see it displayed.
7. Put a checkmark next to each accout you wish to restore
8. Click the `RESTORE ACCOUNTS` button.
9.  After the restoration is complete you may see the following messages:
    - (success) `Added <account name> to your wallet` - This means the account was successfully restored.
    - (success) `Updated the private key for ` - This means a previously <u>[Watched Account](/docs/wallet/accounts_creation#track-account)</u> has been updated with the associated secret key and is now a full account.
    - (error) `Keypair already exists as <account name>` - There is an Account in your wallet that already has the keypair you're trying to restore.
    - (error) `Cannot decrypt Secret Key: wrong password or bad data. Encrypted Data: <secret key>` - After the key was decrypted with the keystore password the resulting information was not a secret key.

After going back the the `Accounts` screen you will see the newly restored accounts.

## Restore Linked Accounts
If any of the newly restored account were once <u>[Linked Accounts](/docs/wallet/accounts_linked_overview)</u> then you will need to follow the <u>[Restore Linked Accounts](/docs/wallet/restore_linked_account)</u> process to reconnect them.

## Create a Keystore File
See <u>[Create Keystore](/docs/wallet/backup_keystore)</u>.
