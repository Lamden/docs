
# Create a Linked Account


This will create you a brand new wallet

![image](/img/wallet/gif/1.0.0_dapp_connection.gif)
To create a Linked Account to a Dapp first visit the Dapp's website. 

Some websites will prompt right away for a connection and some could have a "connect to wallet" button.  The way you initiate a connection is entirely up to the Dapp but you will always need to have your wallet unlocked to be able to accept Dapp connection requests.

Once the Dapp has initiated a connection request to your Lamden Vault the process will remain the same.

Lamden is not responsible for any losses or stolen funds with regard to accepting connections to malicious Dapps.

You do have some protections when creating Linked Accounts.
1. Dapps will ONLY be able to interact with their specific account and have no access to other accounts in your wallet.
2. Because a Dapp only has access to one account in your wallet, it can only use TAU in that specific account. This allows you to decide how much you want to transfer from your main account into each linked account, effectively limiting the TAU available to each Dapp.
3. The Dapp can only create transactions to 1 smart contract and it's the smart contract that you approve in the connection request. It sends transactions AS YOU by using your Lamden Account to sign transactions to this smart contract.  To be able to send transactions, the Dapp will need a TAU balance in its linked account but this does not mean that it’s spending your TAU directly. You are merely providing stamps needed for the Dapp to function correctly.
4. A Dapp cannot directly SPEND your TAU unless you explicitly give it permission. This permission is a separate popup which you will see every time (even if automatic transactions are enabled). Once you approve this popup, the Dapp will have the ability to SPEND your TAU directly. Always use caution when approving that popup.
5. Automatic transactions are recommended for Dapps that you trust, but you can turn this feature off to see a popup EVERY TIME the Dapp sends a transaction through your wallet. This means you will have the ability to manually approve every transaction.

## Linked Account Creation
![image](/img/wallet/linked_account_popup_1.png)

The first popup in the process tells you that you have a new request to create a Linked Account in your Lamden Vault.

The following information is contained in this request:
1. The name of the Dapp
2. Under the Dapp name is the URL of the website that created the popup.  You can click it to make sure that it's the same website you were on.
3. The smart contract that this Dapp will be locked to.
4. The network the Dapp will be allowed to operate on (Lamden Testnet or Lamden Mainet).

Only Click "Next" if:
1. You have verified that you trust the website that created the popup
2. You trust the smart contact that the Dapp will be transacting against

If you are having trouble deciding if you should trust the Dapp you can ask around in [Lamden's Telegram Group](https://t.me/lamdenchat)

If you did not expect this popup and do not want a Dapp connection to this website then you can click "Not Now".

## Choose Linked Account
![image](/img/wallet/linked_account_popup_2.png)

On this screen you should choose an existing account to associate with the dapp. 

## Make Account Trusted
![image](/img/wallet/linked_account_popup_3.png)
On this screen you will decide if this Linked Account will be treated as a "Trusted Account" by the Lamden Vault.  Trusted Accounts enable automatic transactions; which means you will not get a popup to any transactions the Dapp submits.

Note: Do not set an account as Trusted unelss you are sure you do. 

You can always ask around in the [Lamden Telegram Group](https://t.me/lamdenchat) to see if others trust the app.

If you close the popup window at this point then no Linked Account will be created.

Click "Create Account" to create the Linked Account in the Lamden Vault.

After the Linked Account is created the Dapp will be provided the Account Address for its Linked Account everytime you visit the website.

