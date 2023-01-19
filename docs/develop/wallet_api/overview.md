# Overview

Follow this documentation if you would like to have your Dapp connected to the Lamden Vault and create a [Linked Account](/docs/wallet/accounts_linked_overview). 

The Lamden Vault **does not pass any information** to Dapps without approved Linked Accounts.

## Benefits
Connecting your Dapp to the <u>[Lamden Vault](/docs/wallet/overview)</u> will create a smoother blockchain experience for your users in the following ways:

1. Sign transactions to your Dapp's smart contract AS the user.
2. Retrieve information about the user's Lamden Vault including the [Linked Account](/docs/wallet/accounts_linked_overview) address that was created for your Dapp.
3. Enables Automatic Transactions for <u>[Trusted Accounts](docs/wallet/accounts_linked_create#make-account-trusted)</u>; eliminating the need for the user to approve every transaction.

## Restrictions
Connections to the Lamden Vault are defined and restricted in the following ways for the security of the user.

1. All images used for customization are prefixed with the Dapps's hostname when displayed in the wallet.
2. A Dapp can only approve ONE smartcontract for automatic transactions. Any other smart contracts interacted with will always cause a popup.
3. The contract to be approved must exist on the network it's being approved on before trying to create a connection request.
4. All event detail is passed in JSON format.
5. Wallet interactions are done via the browser event API.
6. For security, no script tags are injected into the browser
7. If Locked, the Lamden Vault will return a "Wallet is Locked" error for all events except <u>[lamdenWalletGetInfo](/docs/develop/wallet_api/get_wallet_info)</u>
8. It is up to the Dapp to handle prompting the user to unlock their wallet or inform them when they need more TAU to make transactions.


## Lamden Vault Events
| Event  | Type | Description  |
| ------------- |------------| -----|
| lamdenWalletConnect | CustomEvent | Send an initial connection request to have the wallet paired up with your dApp.  See below for API instructions. |
| lamdenWalletGetInfo | CustomEvent | Ask the Wallet for the current info which includes version, installed/setup status, locked status, wallet key assigned to your dApp and which connection approvals you currently have |
| lamdenWalletSendTx | CustomEvent | Send a transactions request to the wallet for transmission |
| lamdenWalletTxStatus | Event Listener | Results from your transactions request will be sent here  |
| lamdenWalletInfo | Event Listener | Results from your Information request will be sent here.  All locking and unlocking of the user's wallet will automatically generate an event here. |

**All event detail is passed in JSON format for security.**