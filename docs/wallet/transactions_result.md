
# The Result of a Transaction


![](../../img/wallet/gif/1.0.0_transactions_create.gif)

As discussed in the <u>[overview](/docs/wallet/accounts_linked_overview)</u>, smart contract transactions can do any number of things in the blockchain. 

Depending on the intention of the transaction there are a few ways to view the results.

## Transaction Hash result
When you submit a transaction, and it is accepted by the master node, it will be assigned a `transaction hash`. This hash is a reference to your transaction and allows you to view the result later.

The following are ways to get the result of your transaction using the hash:

### From Masternode
Using the below template you can retrieve the result of any transaction, using the hash:

https://`<masternode-url>`/tx?hash=`<tx_hahs>`

#### Example:
- **masternode-url**:  masternode-01.lamden.io
- **tx_hash**: a76ae6bd6c96f61dc7e995bd8e87b80b439b8a7b7ce8f75b31716d17b3813ae3

https://`masternode-01.lamden.io`/tx?hash=`a76ae6bd6c96f61dc7e995bd8e87b80b439b8a7b7ce8f75b31716d17b3813ae3`

Returns a `transaction object`.

From this object you can determine the following:
- **status**: 0 for success and 1 for error
- **result**: could be an error that arose while procesing of the transaction or in the event of a success it could be a `return value` from the function.  Default value for this is 'None'
- **state**: The resulting state changes. This is a list of keys and their new values as a result of the transaction.
- **stamps_used**: How many stamps this transaction used during execution.
- **transaction**: The transaction payload that initiated this transaction.

## From Block Explorer
Transactions results can be viewed on the block explorer. 
Each network, testnet and mainnet, have their own block explorers.

Using the below template you can retrieve the result of any transaction, using the hash:

- **Mainnet**: https://mainnet.lamden.io/transactions/ `<tx_hash>`
- **Testnet**: https://mainnet.lamden.io/transactions/ `<tx_hash>`



## View current state
If the purpose of the smart contract was to change some state in the blockchain.  Each state `value` is associated to a `key` in storage.

### Get Directly from a Masternode

Using the below template you can retrieve any CURRENT state value from a masternode:

https://`<masternode-url>`/contracts/`<contract_name>`/`<variable_name>`?key=`<key_name>`

#### Example:
TAU tokens balances are controlled by the `currency` smart contract and kept in the `balances` variable.  Each wallet account is a `key` with an associated numerical value.
Using the above template we can view the balance of an account directly from a Lamden Masternode.

- **masternode-url**:  masternode-01.lamden.io
- **contract_name**: currency
- **variable_name**: balances
- **key_name**: 0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345

https://`masternode-01.lamden.io`/contracts/`currency`/`balances`?key=`0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345`

Returns `{"value":{"__fixed__":"272966757.40000000"}}`

### Get Current State using the Smart Contract IDE
See the IDE Get Current State section for directions.


