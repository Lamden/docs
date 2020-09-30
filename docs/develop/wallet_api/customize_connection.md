---
id: customize_connection
title: Customize Your Linked Account
sidebar_label: Customize Connection
---

There are a few configuration options you can use to customize your Linked Account in the Lamden Wallet. 

![](/img/develop/wallet_api/linked_account_details.png)

| Property  | Example Value | Description  |
| ------------- |------------| -----|
| logo | 'images/logo.png' | This logo will be displayed next to your linked account in the main Lamden Wallet view as well as displayed in your linked account detail section of the Lamden Wallet |
| background | 'images/background.png' | This is a custome background you can set to repalce the defualt on in your licked account detail section of the Lamden Wallet  |

**All image paths are relative to your dApp's hostname.**

```javascript
detail.logo = 'images/logo.png'
deatil.background = 'images/background.png'
```

## State Charms
Charms can be added to your Linked Account details section of the Lamden Wallet and provide state information about your dApps's contract.  Example would a custome token value, the current player's turn in a game, etc.  There is no limit on the amount of charms you can add.  Define the charms and send them along with your initial connection request.  

Each charm can have an indivudial icon. **All image paths are relative to your dApp's hostname.**

Key Vaiables
&lt;wallet vk&gt; - The Lamden Wallet will subsitute the public key of the keypair created for your dApp

```javascript
//for example
key = "players:<wallet vk>"
// Becomes
"players:270add00fc708791c97aeb5255107c770434bd2ab71c2e103fbee75e202aa15e"
```

```javascript
detail.charms = [
    //This creates a charm that always shows the wallets balance of Stu Bucks
    {
        //The label displayed on the charm
        name: "Stu Bucks"
        //The state variable in yoru dApp's contract
        variableName: "customToken",
        //described in section above this
        key: "<wallet vk>",
        //What format to display the returned value (number will also display as float)
        formatAs: "number",
        //Icon path is relative to your dDapp's hostname
        //This iconPath will become http://www.mydapp.com/images/token.png
        iconPath: "images/token.png",
    },
    //This creates a charm that always shows the current player's turn in a game
    {
        variableName: "playerTurn",
        formatAs: "string",
        iconPath: "images/player.png",
        name: "Player Turn"
    }
]
```
![picture alt](/img/develop/wallet_api/charms.png "Example of State Charms")
