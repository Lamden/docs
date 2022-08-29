---
id: accounts_linked_approval
title: Give Permission to Spend your TAU
sidebar_label: Approve TAU Spending
---

# Give Permission to Spend your TAU

![](img/wallet/linked_account_approve.png)

## What are Approvals for?
The system contract that holds the "TAU" token on the Lamden Network is called the currency contract.

The currency contract will let YOU, the owner of the account, do what you wish with your TAU because you can sign the transaction to the currency contract with your account keys. All you need to do is sign a transaction to the "transfer" method of the currency contract and it will execute that for you, no "approval" is needed because it knows you are you.

DAPPS have their OWN smart contract and will "import" the currency contract into their contract to execute transfers.

When a DAPP's contract calls the currency contract, from within itself, the currency contract sees this as the DAPP's contract calling it, not YOU; even though you signed the transaction to the DAPPS's contract initially.  This is obvioulsy for security as without this anyone could call the currency contract "as you" and take your TAU.

To put it simply, if the **con_cool_dapp** contract calls **currency.transfer** from within itself, the currency contract sees that as **con_cool_dapp** initiating the transfer, not you.

## How do I Approve a DAPP?
What DAPPS need first is for YOU to give them permission to spend your TAU.  They do this by having you send an "approve" transaction to the currency contract, that they initate through the Lamden Vault API.  This lets the currency contract know you are allowing a specific person, or contract to spend some of your TAU. Then the DAPP calls another function called "transfer_from" which allows the currency contract to check that the calling contract, **con_cool_dapps** has been approved to transfer funds out of your account.

## How does the Lamden Vault keep me safe?
In general you never want to give anyone or any contract access to your TAU unless you are sure they are using it in your best interest.  Maybe you are paying TAU to buy something or maybe the DAPP is using it on your behalf to facilitate a process.  Either way, **the responsibility is on you**, the owner of the TAU to understand why you are giving permission and if that party is trustworthy. If you are unsure you can always ask in our <u>[Telegram Group](https://t.me/lamdenchat)</u>.

As a Lamden Vault user, you have a few safeguards but ultimately none of these will help you if you give permission to a malicious DAPP.
1. The DAPP can only send approvals for its own approved smart contract.  Meaning, you cannot accidentally approve the DAPPS owner's account address and then they spend your TAU.  So if you trust all methods of the the DAPP's contract then you can be sure that the approval is always good when you see the popup.
2. You will see the approval popup EVERY TIME even if you have enabled automatic transactions by <u>[setting the Linked Account as trusted](/accounts_linked_create#make-account-trusted)</u>.  The DAPP cannot sneak in an approval that you did not authorize.




