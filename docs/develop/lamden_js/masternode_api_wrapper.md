# Masternode API Wrapper

### Network API Endpoints
All API methods return a value, Promise or callback if provided

| method   |      masternode endpoint      |  Description |
|:----------|:-------------:|:------:|
| getContractInfo(contractName)  |  /contracts/*contractName* | Returns the contract code of *contractName* [example](https://testnet.lamden.io/contracts/currency/) |
| getVariable(contractName, variableName, parms) |    /contracts/*contractName*/*variableName*?key=*parm*   |   Retrieve the current state of a contract variable [example](https://testnet.lamden.io/contracts/currency/balances?key=7497cfd946eb332f66fe096d6473aa869cdc3836f1c7ac3630cea68e78228e3e) |
| getContractMethods(contractName) | /contracts/*contractName*/methods |    Returns all methods belonging to *contractName* [example](https://testnet.lamden.io/contracts/currency/methods) |
| pingServer() | /ping | Checks if network is online [example](https://testnet.lamden.io/ping) |
| getCurrencyBalance(vk) | /contracts/currency/balances | A wrapper method for getVariable() which always returns the result of the currency contract's balances?key=*vk* [example](https://testnet.lamden.io/contracts/currency/balances?key=7497cfd946eb332f66fe096d6473aa869cdc3836f1c7ac3630cea68e78228e3e)  |
| contractExists(contractName) | /contracts/*contractName*  | a wrapper method for getContractInfo() which returns if a contract exists on the blockchain |
| sendTransaction(txData, *callback*) | / | submits a contract to the network a txHash will be returned.  Use checkTransaction() to get tx result |
| getNonce(senderVk, *callback*) | /nonce/*senderVk* |    Get the current *nonce* and *processor* for a public key (vk) |
| checkTransaction(txHash, callback) | /tx?hash=*txHash* | Get the result of a transaction |