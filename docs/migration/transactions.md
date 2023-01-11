# Transaction Changes
There have been very few changes to to way transaction work from legacy Lamden to Arko.  If your Dapps was creating or parsing transactions on legacy Lamden it should have no issues doing the same on Arko, with one exception.

## No Timestamp
Transactions no long have the `timestamp` property in their metadata.

If your Dapp previously used the transaction.metadata.timestamp value of a transaction it can now use this HLC timestamp interchangably by removing the `_0` from the end of the timestamp it becomes a standard ISO timestamp and reflects when your transaction was ran.

Previouly the transaction.metadata.timestamp value was used to set the time inside the smart contract execution environment as `now`. In Arko the `now` datetime is a representation of the `hlc_timestamp`.

If your Dapp uses the wallet to send transactions, then the wallet will take care of removing `timestamp` from the metadata.

## Sample Payloads
### Legacy Lamden
```json
            "metadata": {
              "signature": "7cdc1484ce1bfdecd1c318ba4daddd370e1c11f95e32f0b8359fe29f5f3d3884cd72f4b0e6007d82d33efdfceedb272aae014818c2f558507a1a4530fb973c06",
              "timestamp": 1673289312
            },
            "payload": {
              "contract": "con_dec_fix_7_oracle",
              "function": "set_price",
              "kwargs": {
                "new_price": {
                  "__fixed__": "0.014632485605944951"
                },
                "number": 0
              },
              "nonce": 370244,
              "processor": "5b09493df6c18d17cc883ebce54fcb1f5afbd507533417fe32c006009a9c3c4a",
              "sender": "ec60be3db8f551739b52b76bd253f751f167a8e82ee7b393236433c17459b4cd",
              "stamps_supplied": 500
            }
```

### Arko
```json
      "metadata": {
        "signature": "ffd8ded9ced929a41dae83b1f22a6a31b52f79bbf4cdabe6a27d9646dd2bd725fc29c8bc122cb9e37a2904da00e34df499ee7a897505d1de3f0511f9f9c1150c"
      },
      "payload": {
        "contract": "currency",
        "function": "transfer",
        "kwargs": {
          "amount": {
            "__fixed__": "123.0"
          },
          "to": "ae7d14d6d9b8443f881ba6244727b69b681010e782d4fe482dbfb0b6aca02d5d"
        },
        "nonce": 4,
        "processor": "ffd7182fcfd0d84ca68845fb11bafad11abca2f9aca8754a6d9cad7baa39d28b",
        "sender": "82140a30d6e13812702bfe51f814a781f09ac23f564b3b6d9d7ad26760e1edaa",
        "stamps_supplied": 22
      }

```