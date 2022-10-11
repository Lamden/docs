---
id: wallets
title: Create Wallets
sidebar_label: Wallets
---

A lamden wallet, similar to a bank account, is an entity with an tau balance that can send transactions on Lamden.
You should create a wallet before starting your blockchain journey because all interactions with smart contracts need it. 
**In order to keep your wallet safe, never share your secret key with others and store it in a safe place.**

# Create Wallets

## Create a Lamden Keypair
Creates a new wallet object.
- **verifying key (vk)**: public key
- **secret key (sk)**: private key
```javascript
let lamdenWallet = Lamden.wallet.new_wallet()

/*
{
    vk: "ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298",
    sk: "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
}
*/
```

## Get a public key (vk) from a private key (sk)
Takes the sk as an argument and returns the vk
```javascript
let sk = "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
let vk = wallet.get_vk(sk) 

// 'ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298'

```

## Sign a message
Signs a string payload
```javascript
const stringBuffer = Buffer.from('message')
let messageBytes = new Uint8Array(stringBuffer);
let sk = "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"

let signedMessage = wallet.sign(sk, messageBytes)

// '982c204fe88e620f3319558aa6b11f9d8be75b99b3199f434f5edf2834a9c52059ba4ea3d623ac1d550170e532e919c364aad1333f757f8f22e0355cb1dd8c09'
```

### Verify signature
verify a payload
```javascript
let validSignature = wallet.verify(vk, messageBytes, signedMessage)

// true or false
```