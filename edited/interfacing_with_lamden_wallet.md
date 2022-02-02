### Live [Demo](https://goofy-shaw-4a429e.netlify.app/)

# Lamden Vault Integration Example
When an application interacts with a blockchain it's referred to as a "dApp".
The [Lamden Vault](https://github.com/Lamden/wallet) runs as a browser extension in Most modern browser (Safari not yet supported) and it allows your website (dApp) to interact with the Lamden Blockchain.

Using the interaction API outlined below your dApp will be able to do the following things:
- Quickly engage users of the Lamden Vault to interact with your application quickly and effectivly
- Securely create and send transactions to the Lamden Vault and get the results
- Have the user "auto approve" transactions to impreove the useability of your dApp
- Create and customize a space for your dApp inside the user's Lamden Vault where you can keep them upto date and engaged

## Installation of Demo Website
** Site functional but also a Work in Progress **
```
git clone https://github.com/Lamden/wallet-integration-example.git
cd wallet-integration-example
npm install
```

## Run
```
npm run dev
open http://localhost:5000/ in broswer
```

# Install Lamden Vault
[Follow Lamden Vault install instructions](https://github.com/Lamden/wallet)



## Communicating with the Lamden Vault 
| Event  | Type | Description  |
| ------------- |------------| -----|
| lamdenWalletGetInfo | CustomEvent | Ask the Wallet for the current info which includes version, installed/setup status, locked status, wallet key assigned to your dApp and which connection approvals you currently have |
| lamdenWalletConnect | CustomEvent | Send an inital connection request to have the wallet paired up with your dApp.  See below for API instructions. |
| lamdenWalletSendTx | CustomEvent | Send a transactions request to the wallet for transmission |
| lamdenWalletTxStatus | Event Listener | Results from your transactions request will be sent here  |
| lamdenWalletInfo | Event Listener | Results from your Information request will be sent here.  All locking and unlocking of the user's wallet will automatically generate an event here. |

**All event detail is passed in JSON format for security.**






### Pre-Approved Transactions
Some dApps, expecially games can have a high amount of transfers.  This can lead your user to have to interact with the approve transcation popup too often. <br>
Your connection request can suggest to to the user that they pre-approve a certain amount of stamps, that will be used before another transactions popup is created.

```javascript
detail.preApproval: {
    stampsToPreApprove: 1000000, 
    message: 'This dApp requires a lot of transactions. To streamline the experience we recommed setting a pre-approve amount.'
}
```
### Upgrading Connection Information
Sometime you will want to make changes to the connection information to add or change charms or maybe even change the contract.
As part of the "lamdenWalletGetInfo" event you will be returned a hashed value of the wallet's previously approved request.  
This is an MD5 hash of the JSON string you provided to the user for approval (minus andy "reapprove or newKeypair" options.

You can use this hash to determine if the wallet using your dApp has the most current connection approval, and if not then you can send them a new connection approval with the updated info.  See "RE-approving You Application" below.


### RE-Approving Your Application
Any subsequent connection requests sent to the Lamden Vault will bouce back the error **App is already authorized to use &lt;your contract&gt; on &lt;requested network&gt;**
If you wish the change any of the information that was initially approved, such as the contract name, icon paths, charms, etc you can set the "reappove" flag on the connection request and the user will get an approve popup to confirm your new changes.

```javascript
detail.reapprove = true
```
It could happen that a user deleted the keypair that was created for your dApp previously, and now is trying to connect to your dApp again.  <br>
In that case you will get this error: <br>
**Your dApp was previously approved but no matching vk is currently found in the wallet. Prompt the user to restore their keypair for vk 'user's key' or add 'reapprove = true, newKeypair = true' to your approve request to have a new keypair generated.** <br>

If you need to generate a new keypair you can specify the newKeypair flag like this. A brand new keypair will be generated in the Lamden Vault and associated to your dApp.
```javascript
detail.newKeypair = true
```




