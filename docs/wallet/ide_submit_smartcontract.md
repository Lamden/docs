---
id: ide_submit_smartcontract
title: Submit a Smartcontract to the Blockchain
sidebar_label: Submit a Smartcontract
---

![](/img/wallet/gif/1.0.0_ide_submit_smartcontract.gif)

## Lint for errors
A smart contract can only be submitted to the blockchain if no errors are detected.
The wallet will lint the contract before you submit, but you can always click the `CHECK CONTRACT` button at the bottom of the IDE to manually check.

Errors that are found will show up in the error box below the IDE window.  If no errors are detected this box will contain the message `Contract is Okay`.

## Submit Smart Contract
1. Switch to the network you want to submit the smartcontract to; `Lamden Testnet` or `Lamden Mainnet`.
2. Select the tab with the code you want to submit.
3. Make sure the smartcontract throws no errors.
4. Click the `SUBMIT TO NETWORK` button.
5. On the popup window verify you are submitting to the proper network by reading the Heading `Submit Contract to Lamden...`
6. Select the account that will upload the smartcontract
    - The account must have a TAU balance to pay the transaction cost of uploading the smart contract
    - This account will be the recipient of the developer rewards
7. Enter a name for your smartcontract in the `You Contract Name` box.
    - All user submitted smartcontracts must begin with `con_`.  Example, `con_my_contract`.
8. The `Stamp Limit` box should automatically be filled when you select an account with a TAU balance.
9. **OWNER**: See Owner section
10. **CONSTRUCTOR ARGS**: See Constructor Args section
11. Click, `SUBMIT CONTRACT`.
12. Click, `OK` on the popup window to Send the Transaction.


### Owner property
This is an advanced feature and should only be used by developers that understand its purpose.  Most smartcontracts do not need to be submitted with an Owner.

Specifying the `OWNER` of a smartcontract will prevent anyone except the owner from executing methods on that smartcontract.

The owner can be a wallet address or another smart contract.  Once set it cannot be removed and the blockchain will reject all transactions not from the specified owner.

**The owner is separate and has nothing to do with developer rewards**.

### Constructor Args property
This is an advanced feature and should only be used by developers that understand its purpose.

If your smart contract uses the <u>[@construct](https://contracting.lamden.io/quickstart/submit)</u> decorator to create a `constructor method` then it's possible you will need to provide that method some inital arguments.

The `Constructor Args` property takes an object (in JSON format) that will be provided to the submission contract as part of the transaction.  The submission contract will map these values to the arguments in your `constructor method`.

#### Example
Imagine we have a token contract that we want to add to the network.  We want this contract to mint an initial supply to some wallet address that we control.
We COULD hardcode these values, but to allow this contract to be reuseable we will instead provide these values using `Constructor Args`

```python
token_balances = Hash(default_value=0)

@construct
def seed(wallet_address: str, inital_supply: int):
    token_balances[wallet_address] = inital_supply
```

To supply the above arguments for the `seed` method I would enter the following object (in JSON format) to the `Constructor Args` property.

`{"wallet_address":"6a91a9a65eb80829a360efc0555cad8841af64c78375bbf394f6ecb89d5644ee", "inital_supply":1000000}`



