# Block Service Changes

## Running a Block Service
If you currently run a block service then you will be required to update to a new Block Service version after Arko is deployed.

The legacy Lamden Block Service can be decommissioned, including all mongo tables.

The new Arko Block Service will have a dockerized instal. All genesis state will be downloaded via a file when the blockservice starts and then new block discovry will begin.


## Endpoint Changes

### history endpoints tx_uid
Legacy Lamden Block Service needed to create a UID for transactions, called the `tx_uid`. This was a unique and orderable value that could be assined to each transaction that was parsed from a block. In general it was blocknumber.subblock.transaction_index

Arko blocks only have one transaciton allowing us to use the block number as it is both unique and orderable. 

In the API `tx_uid` has been replaced with the simpler `start_block_num`.

#### Legacy Lamden
Get the next 10 transactions made after transaction 000000012678.00000.00000

```
http://block.service.url/contract_history?contract=currency&last_tx_uid=000000012678.00000.00000&limit=10

```

#### Arko
Get the next 10 currency transaction made after block number 1673210350047866112

```javascript
http://block.service.url/contract_history?contract=currency&start_block_num=1673210350047866112&limit=10

```