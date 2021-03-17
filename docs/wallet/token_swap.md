---
id: token_swap
title: TAU Token Swap Process
sidebar_label: Token Swap
---

## What is a token swap?
If you currently hold ERC-20 TAU it will not be useable on the Lamden Mainnet.  To use it you will need to "swap" it over to Lamden TAU.
 
## Prerequisites
1. Install, Setup and Login to the Lamden Wallet
2. Install Setup and Loging to Metamask
3. Add the Lamden TAU Token to Metamask using our smart contract 0xc27a2f05fa577a83ba0fdb4c38443c0718356501.
4. Transfer your ERC-20 TAU to your Metamask address
5. Set your Metamask plugin to the "Main Network"

## FAQ
We have a [blog post](https://blog.lamden.io/lamden-tau-token-swap-faq-cb68ab59c38d) outlining most frequently asked questions. Feel free to contact us at team@lamden.io by email or in our [Telegram Room](https://t.me/lamdenchat) if you have questions that are not address there.

### Step 1 - Disclaimer & Questions
1. Make sure you are on "Lamden Mainnet" by checking the top right-hand corner of the screen.  If it says Lamden Testnet, click  it to change.
2. Click "Token Swap" on the left hand Wallet Menu
3. Click "Start Swap"
4. Read the [privacy policy](https://www.lamden.io/privacy) and then click the checkbox next to "I hereby consent to the processing of my personal data..."
5. Read the next section that pops up and click the checkbox next to "I have read and confirm the above statements are all true."
6. Answer the "Are you acting" question by clicking a radio button, and then answer the follow-up question in the same manner.
7. Click the "Accept & Proceed" button

8. Read the "TOKENS EXCHANGE" verbiage in the text area <u>to the bottom</u>.
7. Click the checkbox next to "I have read and confirm the above statements are all true."
9. Click the "Accept & Proceed" button

10. Read the "Exchange Terms and conditions" verbiage in the text area <u>to the bottom</u>.
11. Click the checkbox next to "I accept Exchange Terms and Conditions and am willing to proceed and make an exchange offer"
12. Click the "Accept & Proceed" button

### Step 2 - Lamden Account
This will be the Lamden Address that you receive the Lamden TAU <u>TO</u>.
1. Choose your Lamden Address from the drop down list
2. Click "Select Account"

### Step 3 - Connect Metamask
1. Click "Connect Metamask"
2. If your Metamask is setup correctly you should get a popup from Metamask "Connect With Metamask"
3. Click "Next" on the Metamask Popup
4. Click "Connect" on the Metamask Popup
5. After Metamask Connects, verify the ETH Address that was sent from
6. Click "Continue"

### Step 4 - Approve and send Ethereum ERC-20 TAU
This step will have you send two separate transactions:
* Approve - This transaction gives our Swap Contract the ability to "spend" your TAU. Which it will need to do while processing your swap.
* Send - Send a "swap" trigger to our Ethereum Swap Contract which includes the approved amount from the last transaction and the lamden address the TAU will be sent to (you chose this in Step 2)

#### Ethereum Approval Transaction
You only need to do this step once as it will approve plenty of TAU for subsequent swaps.
1. Click the "Send Approval" button
2. On the Metamask popup click "Confirm"
3. Wait for Ethereum transaction to complete... DO NOT CLOSE THE WALLET at this point.
4. When prompted that the transaction was "Approved" then click the "Continue" button

#### Ethereum Swap Contract Transaction
After this step your TAU will be committed to the swap!
1. Enter the amount of TAU you wish to Swap
2. Verify the Transaction Details include the correct amount of approved TAU and the correct Lamden Wallet address.
3. Click the "Send Transaction" button
4. On the Metamask popup click "Confirm"
5. Wait for Ethereum transaction to complete... DO NOT CLOSE THE WALLET at this point.
6. When prompted with the blue checkmark and the works "Transaction Successful" then click the "Continue" button


### Step 5 - Get Lamden Mainet TAU
In this step, we will process your ETH Swap transaction and send you the Lamden Mainnet TAU to the Lamden Account you specified in Step 2
1. The swap will begin automatically, wait for a result to appear
2. If you see "Swap is Complete" then everything processed correctly and you can go back to the "Accounts" page and view your balance has updated. If your balance has not updated then click the refresh button (circular arrow) beside your main wallet total.  If you still don't see your updated balance skip to the next step.  If you do see your updated balance then congrats on a successful swap!
3. If you see an error message then please contact team@lamden.io or get a hold of an admin in our [Telegram Room](https://t.me/lamdenchat) and provide the error.  You will be asked to provide all of your swap information, which can be found under "Token Swap" on the main menu.


## Restarting a swap

Swaps can be restarted in the following ways:
### From a saved swap
Saved Swaps can be restarted only after the walled knows that the second Ethereum Transaction (the swap transaction) COMPLETES. 

To retry a saved swap go back to the main swap screen and click "Retry" or "Continue".

If you are getting a specific error doing this then please get ahold of an admin in our [Telegram Room](https://t.me/lamdenchat). You will be asked to provide all of your swap information, which can be found under "Token Swap" on the main menu.

Once we find and fix the problem you can click the "Retry" button located under the failed swap in the swap log on the "Token Swap" page in the Lamden Wallet.

**Note:** If the second transaction (the swap transaction) reports as "failed" from the blockchian then you will have to start the entire process over again, but your ERC-20 TAU will not have moved from your Wallet.  If you have done an approval you will not need to do it again.

Only transactions where they Ethereum Swap transaction completes are logged in the wallet can be retried.

### From a Successful ETH Swap transaction
If you got to the point of sending the swap transaction (the second one) and something happened to the wallet then you can restart the swap from that point by doing the following steps:

**VIDEO OF SWAP RECOVERY process**
![](/img/wallet/gif/1.5.5_token_swap_recovery.gif)

### Step 1 - Disclaimer & Questions
1. Make sure you are on "Lamden Mainnet" by checking the top right-hand corner of the screen.  If it says Lamden Testnet, click  it to change.
2. Click "Token Swap" on the left hand Wallet Menu
3. Click "Start Swap"
4. Read the [privacy policy](https://www.lamden.io/privacy) and then click the checkbox next to "I hereby consent to the processing of my personal data..."
5. Read the next section that pops up and click the checkbox next to "I have read and confirm the above statements are all true."
6. Answer the "Are you acting" question by clicking a radio button, and then answer the follow-up question in the same manner.
7. Click the "Accept & Proceed" button

8. Read the "TOKENS EXCHANGE" verbiage in the text area <u>to the bottom</u>.
7. Click the checkbox next to "I have read and confirm the above statements are all true."
9. Click the "Accept & Proceed" button

10. Read the "Exchange Terms and conditions" verbiage in the text area <u>to the bottom</u>.
11. Click the checkbox next to "I accept Exchange Terms and Conditions and am willing to proceed and make an exchange offer"
12. Click the "Accept & Proceed" button

### Step 2 - Click RECOVER FAILED SWAP button
1. Click the "RECOVER FAILED SWAP" button instead of choosing a Lamden Wallet

### Step 3 - Recover a Failed Swap
1. Enter the ETH swap transaction hash (tx id) in the input box.  This transaction can be found in your metamask history.
2. Click the "GET SWAP DATA" button
3. If it's a valid swap transaction you will see the details of the transaction
4. Click "PROCESS SWAP" to start the swap process and get your Lamden TAU

### Step 4 - Get Lamden TAU
1. Wait for the swap to complete
2. Click the "HOME" button
3. validate your wallet balance has been credited


## Troubleshooting

### High gas fees
While Lamden can't control Ethereum gas prices (we wish we could, trust us!), there is one situation where you might be experiencing WAY higher gas fees than [https://ethgasstation.info](https://ethgasstation.info/) shows.  This happens if you don't have enough TAU approved to be able to cover the amount you are swapping.

This can happed if you did an early swap where we approved specific amounts instead of 1 large amount.

To send a new approve transaction follow these steps:
1. Visit the `swap contract` on etherscan at [THIS LINK](https://etherscan.io/address/0xc27a2f05fa577a83ba0fdb4c38443c0718356501#writeContract)
2. Click the "Connect to Web3" and connect your metamask to the website. Make sure to connect the metamask account that has your TAU.
3. Refresh the Page
4. Click the `Connect to Web3` once again and this time click "OK" to the alert that pops up.  The button should now change to say `Connected - Web3 [your ETH address]`
5. Click `1. approve`
6. in the `spender` box enter `0x78FC2eB9Dd55eb175c6145860385f84F8cbEE639`
7. in the `value` box enter `10000000000000000000000000` 
8. Click the `WRITE` button
9. Follow the metamask popup to complete the transaction
10. When you get a successful approval transaction go back to the wallet and start the process from the beginning. You gas estimate should be regularly high instead of astronomically high.

### Can't click the checkboxes to approve the agreements
Try resizing the text area using the button in the lower right-hand corner of the text box.  Then make sure you are scrolled to the bottom.