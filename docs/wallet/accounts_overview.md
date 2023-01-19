
# What Are Wallet Accounts?


Wallet accounts store your TAU Tokens.

There are two types of accounts. One is Vault Accounts, and the other is Legacy Accounts.

## What are Vault Accounts

These accounts are created through a unique 24-word phrase that is generated when you first setup. Your funds are connected to that phrase.

It is important to write the 24-word phrase down on paper and hide it somewhere, put it in a safety deposit box, or use a secure password manager.

## What are Legacy Accounts

Only old users own such accounts. Each account has its own unique keypair which is encrypted in the Lamden Vault.

It is heavily recommended that you do a <u>[BACKUP](/docs/wallet/backup_overview)</u> **every time** you add a new account as each backup only stores the accounts you had at that specific point in time.

## What are keypairs?
Each account in your Lamden Vault has an associated cryptographic keypair.

1. Public Key 
    - Referred to as "Account Address" in the wallet but also commonly referred to as a "public key" or "verifying key (vk)"
    - Can be "public knowledge" and you are free to share this without risking the security of your account
    
2. Secret Key
    - As the name suggests this **MUST BE KEPT SECRET!**
    - Used to sign transactions. Transactions signed by this key identify you on the blockchain by your Public Key.
    - If someone has your secret key then, to the blockchain, they are you and can act as you!