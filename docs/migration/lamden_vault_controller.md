# Update Lamden Vault Controller

1. Update the Lamden Vault Controller (AKA Lamden Wallet Controller or LWC)  to `^0.7.0` in any project you are currently using it in.
2. Update the connection information you send to the LWC to include the networkName property with a value of `arko`.

## Legacy Lamden LWC Connection Info
```javascript
const connectionRequest = {
    appName: 'My Killer dApp',
    version: '1.0.0',
    logo: 'images/logo.png', 
    contractName: 'con_killer_app', 
    networkType: 'testnet', 
}
```

## Arko LWC Connection Info
```javascript
const connectionRequest = {
    appName: 'My Killer dApp',
    version: '1.0.0',
    logo: 'images/logo.png', 
    contractName: 'con_killer_app', 
    networkType: 'testnet', 
    networkName: 'arko' // ADD THIS HERE
}
```

3. Update any transactions you send to the LWC with the networkName property with a value of `arko`.

## Legacy Lamden LWC Transaction Info
```javascript
const txInfo = {
    networkType: 'mainnet', 
    methodName: 'do_something', 
    kwargs: {
        Str: 'awesome', 
        Float: {'__fixed__': '1000.000000006'} 
        Int: 1000 
    }, 
    stampLimit: 100
};
```

## Arko LWC Transaction Info
```javascript
const txInfo = {
    networkType: 'mainnet', 
    networkName: 'arko', // ADD THIS HERE
    methodName: 'do_something', 
    kwargs: {
        Str: 'awesome', 
        Float: {'__fixed__': '1000.000000006'} 
        Int: 1000 
    }, 
    stampLimit: 100
};
```