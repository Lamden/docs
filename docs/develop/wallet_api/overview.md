---
id: overview
title: Lamden Wallet DAPP API Overview
sidebar_label: Overview
---

![](/img/develop/wallet_api/linked_account_details.png)
The Lamden Wallet allows your DAPP to create an experiece for your users unlike any current wallet on any platform. No other wallet allows you to tailor the user experience and increase engagement.

Follow this documentaion if you would like to have your DAPP connected to the Lamden Wallet and create a [Linked Account](/docs/wallet/accounts_linked_overview). 

The Lamden Wallet **does not pass any information** to DAPPS without approved Linked Accounts.

## Benefits
Connecting your DAPP to the <u>[Lamden Wallet](/docs/wallet/overview)</u> will create a smoother blockchain experience for your users in the following ways:
1. Sign transactions to your DAPP's smart contract AS the user.
2. A custom Account for your DAPP is created in the user's wallet which adds visability for your DAPP and allows the user some control over your connection.
3. Retrieve information about the user's Lamden Wallet including the [Linked Account](/docs/wallet/accounts_linked_overview) address that was created for your DAPP.
3. Enables Automatic Transactions for <u>[Trusted Accounts](docs/wallet/accounts_linked_create#make-account-trusted)</u>; elemiating the need for the user to approve every transaction.

## Restrictions
Connections to the Lamden Wallet are defined and restricted in the following ways for the security of the user.
1. The Lamden Wallet creates ONE [Linked Account](/docs/wallet/accounts_linked_overview) for each URL.  Example, DAPP1.mydomain.com and DAPP2.mydomain.com would be concidered 2 seperate DAPPS Lamden Wallet.
2. All images used for customization are prefixed with the DAPPS's hostname when displayed in the wallet.
3. A brand new [Linked Account](/docs/wallet/accounts_linked_overview) is created for your dApp in the Lamden Wallet and you are permitted to only transaction against that one account.
4. A DAPP can only approve ONE smartcontract per network type (testnet, mainnet). User approval is needed for EACH network. The smartcontract can be changed later, but it's not recommended. The user will be provided a popup to warn them if your smart contract is changing.
5. The contract to be approved must exist on the network it's being approved on before trying to create a connection request.
6. All transacations are locked to the user approved contract for that network. This includes state variable lookups when creating charms; although this could change in the future.
7. All event detail is passed in JSON format.
8. Wallet interactions are done via the broswer event API.
9. For security, no script tags are injected into the browser
10. If Locked, the Lamden Wallet will return a "Wallet is Locked" error for all events except <u>[lamdenWalletGetInfo](/docs/develop/wallet_api/get_wallet_info)</u>
11. It is up to the DAPP to handle prompting the user to unlock their wallet or inform them when they need more TAU to make transactions.


## Lamden Wallet Events
| Event  | Type | Description  |
| ------------- |------------| -----|
| lamdenWalletConnect | CustomEvent | Send an inital connection request to have the wallet paired up with your dApp.  See below for API instructions. |
| lamdenWalletGetInfo | CustomEvent | Ask the Wallet for the current info which includes version, installed/setup status, locked status, wallet key assigned to your dApp and which connection approvals you currently have |
| lamdenWalletSendTx | CustomEvent | Send a transactions request to the wallet for transmission |
| lamdenWalletTxStatus | Event Listener | Results from your transactions request will be sent here  |
| lamdenWalletInfo | Event Listener | Results from your Information request will be sent here.  All locking and unlocking of the user's wallet will automatically generate an event here. |

**All event detail is passed in JSON format for security.**