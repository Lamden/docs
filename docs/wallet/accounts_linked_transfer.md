---
id: accounts_linked_transfer
title: Approving Transfers from DAPPS
sidebar_label: Approve Transfers
---





## Confirm Transfer Popup
The approve transfer popup tells you that there is a DAPP that is trying to initate a transfer via the Linked Account in your Lamden Vault.

** You will not see the popup below if you have set the DAPPS's Linked Account to <u>[Trusted Status](/docs/wallet/accounts_linked_create#make-account-trusted)</u>.**

![](/img/wallet/linked_account_transfer.png)

## Information on the Confirm Popup
Here is an explanation of the parts of the popup and why they are important to you:
1. **DAPP name and source location:**  At the top of the popup you will see the name and icon of the DAPP as well as the location the popup was originated from.  You can click the link to verify the popup has come from the website you expected it to.
2. **Smart Contract:** This is the smart contract that this transaction will be going to.  This value is auto-populated by the Lamden Vault and should be the smart contract that you approved durring the <u>[Linked Account Creation](/docs/wallet/accounts_linked_create)</u> process.
3. **Network:** This is the network the transaction will be processed on.  The values are either "Lamden Mainnet" or "Lamden Testnet".
4. **Action:** The "method" on the smart contract that this transaction will invoke. If you are not sure what this method does, maybe ask the DAPP developer directly. Ideally, the developer of the smart contract has given this method a name that reflects the DAPP action to be performed that created the popup.
5. **Data:** Any additional information under "Action" will be sent as data in the transction and utilized by the smart contract while processing your transaction.  Take a look at this data to see if it accurately reflects the intention of your action. Depending on the action and smart contract, the data may or may not be discernable by you.  You can always check with the DAPP developer if you are unsure what data they are sending.

If you are confident with the contents of the popup then click "APPROVE" and the Lamden Vault will sign and send the transaction.
If you aren't sure you can always click "DENY" and no transaction will be sent.

## Automatic Transactions (No popups)
If you trust a DAPP or have been using it successfully for a while, you can turn on <u>[Trusted Status](/docs/wallet/accounts_linked_create#make-account-trusted)</u> from the Linked Account's "DAPP Settings" page.  This will remove the need to approve EVERY transaction and will allow for a smoother DAPP experience.  This is usually a good option for games that have a high frequency of transactions.  

Automatic Transactions can be enabled or disabled at any time but changing the <u>[Trusted Status](/docs/wallet/accounts_linked_create#make-account-trusted)</u> of the DAPPS's <u>[Linked Account](/docs/wallet/accounts_linked_overview)</u>.

## Transaction Costs
Every transaction you send on the Lamden Network costs some amount of TAU to pay the network for processing your transaction.

This means that a Linked Account with automatic transactions enabled will be SPENDING your TAU everytime it makes a transaction. This will cause a drain on your TAU balance for that Linked Account. If the DAPP has a lot of transactions required, the drain could seem more significant. If you feel you want more control you can turn automatic transaction off to get a sense of the amount and frequency of transactions the DAPP is processing.  A good DAPP will visually tell you when it's sending transactions, even though the transactions are not generating a popup.

It is recommended that you **only send the amount of TAU to a Trusted Linked Account that would be required to keep the DAPP running smoothly**.  A good DAPP will let you know when your Linked Account has run out of TAU and transactions are no longer processing.