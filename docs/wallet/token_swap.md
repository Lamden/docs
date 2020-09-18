---
id: token_swap
title: TAU Token Swap Process
sidebar_label: FAQ and Steps
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

## Swap Process
Here is a video of the process. Detailed steps are below.
 
![](/img/wallet/1.0.0_token_swap.gif)

### Step 1 - Disclaimer & Questions
1. Make sure you are on "Lamden Mainnet" by checking the top right-hand corner of the screen.  If it says Lamden Testnet, click  it to change.
2. Click "Token Swap" on the left hand Wallet Menu
3. Click "Start Swap"
4. Read the [privacy policy](https://www.lamden.io/privacy) and then click the checkbox next to "I hereby consent to the processing of my personal data..."
5. Read the next section that pops up and click the checkbox next to "I have read and confim the above statements are all true."
6. Answer the "Are you acting" question by clicking a radio button, and then answer the follow-up question in the same manner.
7. Click the "Accept & Proceed" button

8. Read the "TOKENS EXCHANGE" verbiage in the text area <u>to the bottom</u>.
7. Click the checkbox next to "I have read and confirm the above statements are all true."
9. Click the "Accept & Proceed" button

10. Read the "Exchange Terms and conditions" verbiage in the text area <u>to the bottom</u>.
11. Click the checkbox next to "I accept Exchange Terms and Conditions and am willing to proceed and make an exchange offer"
12. Click the "Accept & Proceed" button

### Step 2 - Lamden Account
This will be the Lamden Address that you recive the Lamden TAU <u>TO</u>.
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
This step will have you send two seperate transactions:
* Approve - This transaction gives our Swap Contract the ability to "spend" your TAU. Which it will need to do while processing your swap.
* Send - Send a "swap" trigger to our Ethereum Swap Contract which includes the approved amount from the last transaction and the lamden address the TAU will be sent to (you chose this in Step 2)

#### Ethereum Approval Transaction
1. Enter the amount of ERC-20 you want to swap, you don't need to swap your entire ERC-20 amount at once.
2. Verify the Transaction Details and also verify the amount specific DOES NOT EXCEED your token balance (if that happens Metamask will estimate very high gas prices).
![](/img/wallet/confirm_swap_amount.png)
3. Click the "Send Approval" button
4. On the Metamask popup click "Confirm"
5. Wait for Ethereum transaction to complete... DO NOT CLOSE THE WALLET at this point.
6. When prompted that the transation was "Approved" then click the "Continue" button

#### Ethereum Swap Contract Transcation
After this step your TAU will be committed to the swap!
1. Verify the Transaction Details include the correct amount of approved TAU and the correct Lamden Wallet address.
2. Click the "Send Transaction" button
3. On the Metamask popup click "Confirm"
4. Wait for Ethereum transaction to complete... DO NOT CLOSE THE WALLET at this point.
6. When prompted with the blue checkmark and the works "Transaction Successful" then click the "Continue" button


### Step 5 - Approve and send Ethereum ERC-20 TAU
In this step we will process your ETH Swap transaction and send you the Lamden Mainnet TAU to the Lamden Account you specifec in Step 2.
1. The swap will begin automatically, wait for a result to appear
2. If you see "Swap is Complete" then everything processed correctly and you can go back to the "Accounts" page and view your balance has updated. If your balance has not updated then click the refresh button (circular arrow) beside your main wallet total.  If you still don't see your updated balance skip to the next step.  If you do see yoru updated balance then Congrate on a successful swap!
3. If you see an error message then please contact team@lamden.io or get a hold of and admin in our [Telegram Room](https://t.me/lamdenchat) and provide the error.  You will be asked to provide all of your swap information, which can be found under "Token Swap" on the main menu.


## Restarting a swap
Swaps can be restarted only after the second Etherum Transaction (the swap transaction) COMPLETES. This means that if your approve transaction or Swap transaction FAIL then you will have to start the entire process over again, but your ERC-20 TAU will not have moved from your Wallet.

There will be no log of attempted transactions, only transaction where they Ethereum Swap transaction completes are logged in the wallet can can be retryed.

If you have a completed ETH Swap transaction but are getting and error from the swap process then contact team@lamden.io or get a hold of and admin in our Telegram[Telegram Room](https://t.me/lamdenchat). You will be asked to provide all of your swap information, which can be found under "Token Swap" on the main menu.

Once we find and fix the problem you can click the "Retry" button located under the failed swap in the swap log on the "Token Swap" page in the Lamden Wallet.
