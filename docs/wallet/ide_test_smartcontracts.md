
# Run State and Run Smart Contract Methods


## Query Smart Contract State
![image](/img/wallet/gif/1.0.0_ide_query_state.gif)
1. Open the smartcontract <u>[from the Blockchain](/docs/wallet/ide_create_smartcontracts#open-existing-contract-from-blockchain)</u>.
2. Scroll down to the `Get Current State` section, below the IDE window.
3. In the `Variable Name` box enter the variable or hash you want to query from the smart contract.
4. If this is a `Hash Variable` then you will need to supply the `key` in the `key(s)` box. 
    - If this is a `normal Variable` then leave this box empty.
5. Click the `RUN` button beside the `Get Current State` heading.

If there is a value returned from the blockchain then it will be populated in the `... - Current State` box.

## Run Smart Contract Methods
1. Open the smartcontract <u>[from the Blockchain](/docs/wallet/ide_create_smartcontracts#open-existing-contract-from-blockchain)</u>.
2. Scroll down the the `Contract Methods` section, below the IDE window.
3. Find the box with the method you wish to run.
4. Enter all of the `values` for the method properties.
    - The `type` of value required is in brackets next to the name of the argument.
5. Click the `RUN` button beside method name.
6. Select the wallet account that will run this method.
    - The wallet account must have TAU to pay the transaction cost
7. If a wallet with TAU was selected the `Stamp Limit` box will automatically populate.
8. Validate:
    - Contract Name
    - Function (method name)
    - All argument values are correct
9. Click the `CONFIRM TRANSACTION` button
10. Click `OK` when the Send Transaction popup appears.