
# Backing up your Lamden Vault Accounts


At no point does the Lamden Vault do an Automatic Backup. **All backups are MANUAL and the user's responsibility.**

## When to backup
A backup must be created EVERY TIME a new legacy account is added to your Lamden Vault.

## Backup Options
There are a couple of ways to backup your Lamden Vault Accounts and either will allow you restore an account later:
1. View Recovery Phrase
   - A unique 24-word phrase which connected to your funds.
2. Backup legacy accounts. This will create <u>[Keystore File](/docs/wallet/backup_keystore)</u> 
    - This is an encrypted file that contains the keypairs associated with your account
3. View <u>[Secret Keys](/docs/wallet/backup_view_keys)</u>
    - Some people prefer to write the secret keys down manually and store them offline

These are the only ways to backup your accounts.

## Backing up Linked Accounts
A Keystore file will include the <u>[keypairs](/docs/wallet/accounts_linked_overview)</u> for your Linked Accounts but the Dapp association will be lost.

When the Linked Account keypairs are restored you can follow this process to re-link you account to the Dapp.
