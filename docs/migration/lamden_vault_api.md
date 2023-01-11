# Lamden Vault API

>The changes outlined below will not with with Lamden Valut versions 2.3.5 or below.

>If you are reading this and have wallet 2.3.5 because it is the latest, then a wallet update will be released in the next few days to allow these interactions to take place.

## Wallet Connections

Most Dapps use the [Lamden Vault](https://docs.lamden.io/docs) to send transactions on behald of the user.

To make your Dapp connect and send transctions to Arko you will provide a new `networkName` property in the wallet connection information.

#### Legacy Lamden

```javascript
const detail = JSON.stringify({
    appName: 'My Killer dApp',
    version: '1.0.0',
    logo: 'images/logo.png',
    contractName: 'con_killer_app', 
    networkType: 'mainnet'
})

```

#### Arko

```javascript
const detail = JSON.stringify({
    appName: 'My Killer dApp',
    version: '1.0.0',
    logo: 'images/logo.png',
    contractName: 'con_killer_app', 
    networkType: 'mainnet', 
    networkName: 'arko' // This tells the wallet to use Arko
})
```

This change should be make after Arko goes live. When people visit your Dapp they will be asked to create a new connection.

## Sending Transactions

To have the wallet send a transaction to Arko you will now need to provide a new `networkName` property in the transaction request.

This applies to both [regular transactions](https://docs.lamden.io/docs/develop/wallet_api/send_transactions) and [approval transactions](https://docs.lamden.io/docs/develop/wallet_api/approval_transactions).

#### Legacy Lamden

```javascript
const detail = JSON.stringify({
    networkType: 'mainnet', 
    methodName: 'movePlayer', 
    kwargs: {
        newPosX: 3,
        newPosY: 14
    }, 
    stampLimit: 100
});

```

#### Arko

```javascript
const detail = JSON.stringify({
    networkName: 'arko' // Send transaction to ARKO
    networkType: 'mainnet', 
    methodName: 'movePlayer', 
    kwargs: {
        newPosX: 3,
        newPosY: 14
    }, 
    stampLimit: 100
});
```

## lamdenWalletInfo Event

> If your Dapp uses the [Lamden Wallet Controller](https://docs.lamden.io/docs/develop/wallet_controller/wallet_controller_quickstart) then update to the latest version and you will be okay

The [lamdenWalletInfo](https://docs.lamden.io/docs/develop/wallet_api/get_wallet_info) event sent from the Lamden Vault has an approvals property which will show which networks the user has approved your Dapp for. 

The return previouly was just `mainnet` and `testnet` if approvals existed. This will rename for the legacy network but to get approvals from any new network you will need to search for that specific network name.

See the changes below to the `lamdenWalletInfo` event object


## Legacy Lamden

```json
{
    "approvals": {
        "mainnet": {...},
        "testnet": {...}
    },
    ...
}

```

## Arko

```json
{
    "approvals": {
        "mainnet": {...},
        "testnet": {...},
        "arko": {
            "mainnet": {...},
            "testnet": {...}
        },
        "some_other_network": {
            "mainnet": {...},
            "testnet": {...}
        }
    },
    ...
}

```


