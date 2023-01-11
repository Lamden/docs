# Block Differences

## Finding transaction in a block
Arko brings a concept of Transaction Records as opposed to blocks and this means that each block now only has 1 transaction and the accompianing state chagnes instead of the sub-block strucutre of legacy Lamden.  Most of Lamden's legacy blocks had only one transaction as it is and so it made getting and odering those transactions a bit of a pain.

In legacy Lamden you would find yourself iterating the subblocks list, then interating each transactions list for a transaction.

Arko has no more list of a list type concepts and each block will contain 1 and only 1 transaction under ther `processed` property. The `processed` property contains the exact same transaction data structure that you are used to.

## Block Numbers
the block `number` property is now an HLC representation of nanos which end up bing a big Int and stored as a string.  If your Dapp did anything with block numbers this is a very large change. Block numbers are still canonical but no longer consequative.

### legacy Lamden
1, 2, 3, 4, ...

### Arko
"1673209855008481024", "1673209868957867008", "1673210350047866112", ...

If your Dapp relies on looking for block numbers sequentially then you will need to rethink the logic. The best way is to work backwards using the `previous` has property.

It is recommended to use the websocket to get new blocks to avoid overloading any APIs.  If you connect to that websocket you will get the `lastest_block` automatically.  You would then work backwards from the `previous` hash property to see if you have that block already. If not, you would request it, then iterate that logic till you have all blocks.

## HLC Timestamps
Nodes now agree on what time the transaction was received and apply an `hlc_timestamp` to it. That HLC timestamp follows the lifespan of the transaction in the node.  When the transaction is minted into the block the HLC is then also added to the properties of the block as `hlc_timestamp`.

## Sample Block
You can observe the differences below

### Legacy Lamden
```json
{
  "hash": "27c408bc0ed8cd406def99fc47b7447839933f711dd210d47f3d0fe80386958b",
  "number": 1206705,
  "previous": "20551a66d07918c6d88ceb5a50ada1ecc0ef81fe4bd9e09922b02aa7b423d780",
  "subblocks": [
    {
      "input_hash": "3afe7e235c6557f383828eb09edf223dbd649d9267e4fbda52824e5522da07e2",
      "merkle_leaves": [
        "e6e14104dc014c73c6eac1c94fd279d3e3506f280902b34ab2f9494ffc894034"
      ],
      "signatures": [
        {
          "signature": "d58513d8fa868ad1398b66d4fc4b86fd413b827b0704651f54586044d227f7a412d95ed9c1f61a91adc29faaa6953af21b616bfd052e326f96c67e10f8ccec09",
          "signer": "2bdb7a98d65a469dacd93873ce3f8b6bb5284414348cab17ade738f913d35e32"
        },
        {
          "signature": "eddde42cec3b6b2da910ca3599bbc2bd3e9c27d95927b8babb8e44bee98076962cc63c3b905bc943da70db0fbdb115332de4eff354b34e99f66dc78082977107",
          "signer": "555100f02ef3bdc469e866140c35955e137624f4a1284bbcb999cd7fb576c869"
        }
      ],
      "subblock": 0,
      "transactions": [
        {
          "hash": "ab35ba41ff47175db583387b52afcd9849d705a8f42bbb0aae890e047903ca8f",
          "result": "None",
          "stamps_used": 8,
          "state": [
            {
              "key": "con_dec_fix_7_oracle.current_price:0",
              "value": {
                "__fixed__": "0.014632485605944951"
              }
            },
            {
              "key": "currency.balances:ec60be3db8f551739b52b76bd253f751f167a8e82ee7b393236433c17459b4cd",
              "value": {
                "__fixed__": "3719.704609400177665863"
              }
            }
          ],
          "status": 0,
          "transaction": {
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
          }
        }
      ]
    }
  ]
}
```

### Arko
```json
{
  "hash": "1a00d9c1fea2ba6514688e0ab9ae1437265f3f1fc65374009cd1e5c0c146a12b",
  "number": "1673210350047866112",
  "hlc_timestamp": "2023-01-08T20:39:10.047866112Z_0",
  "previous": "ccae0c7f20406f3617ffe87e33fff75508cf8c6b148e228e24c21f5007054d7a",
  "minted": {
    "minter": "fad066ac33e8c45d2530dde6393dfc0a860775f8261840c2a0d18b42a8b222c0",
    "signature": "f79bbded9ced929a41dae83b1f22a6a31b52f79bbf4cdabe6a27d9646dd2bd725fc29c8bc122cb9e37a2904da00e34df499ee7a897505d1de3f0511f9f9c1150c"
  },
  "proofs": [
    {
      "signature": "39f38d7d973e81a461884ecad68fb18fcc81731e728fcdb56a50aee19640956dad309359a2d3168eee260837721b5f02ed898204382b76c364f9aaded0352a0c",
      "signer": "9d2dbfcc8cd20c8e41b24db367f215e4ac527dc6a2a0acdb4b6008d13d043ef8"
    },
    {
      "signature": "c87ba4c1a0592357724ad027e125d94729b502f71dd97bda862dac630a7d7f86bc34848204b8a873c62d47bc960a4173669a3eb3f1dbeefe47809066af67e702",
      "signer": "fad066ac33e8c45d2530dde6393dfc0a860775f8261840c2a0d18b42a8b222c0"
    },
    {
      "signature": "299519d68eb626820ccf977c661af209efa9e01c3dd77abea27e147e20ea4a81238f871ac5c8534fbfe56110e66651530188a02f5a43795d6383478fdf18f30a",
      "signer": "82140a30d6e13812702bfe51f814a781f09ac23f564b3b6d9d7ad26760e1edaa"
    },
    {
      "signature": "fa74c559c9e7e82a171c45f309a27a2b82d92b85f2e794c33cdf3e9da9e944efa1ea97daa43ce9d830398305689227a983646658f9473c4ba4442ca3ee386104",
      "signer": "0d5077e53bdb2250ae83f2ea078ed571ba5ddba6c474cc1d24568f7d62d57da7"
    }
  ],
  "processed": {
    "hash": "d795dbede4c2e3620d673392fc072a917fa8f4558e7d8241e3aa4f6c2b2ae4ff",
    "result": "None",
    "stamps_used": 20,
    "state": [
      {
        "key": "currency.balances:82140a30d6e13812702bfe51f814a781f09ac23f564b3b6d9d7ad26760e1edaa",
        "value": {
          "__fixed__": "11724.812746987692307169230769230557"
        }
      },
      {
        "key": "currency.balances:ae7d14d6d9b8443f881ba6244727b69b681010e782d4fe482dbfb0b6aca02d5d",
        "value": {
          "__fixed__": "2010.785134963899841651650774034939"
        }
      }
    ],
    "status": 0,
    "transaction": {
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
    }
  },
  "rewards": [
    {
      "key": "currency.balances:ffd7182fcfd0d84ca68845fb11bafad11abca2f9aca8754a6d9cad7baa39d28b",
      "value": {
        "__fixed__": "110079.78564075230769165384615384593"
      },
      "reward": {
        "__fixed__": "0.193406593076923076923076923076"
      }
    },
    {
      "key": "currency.balances:9d2dbfcc8cd20c8e41b24db367f215e4ac527dc6a2a0acdb4b6008d13d043ef8",
      "value": {
        "__fixed__": "110203.55487152153846125384615384593"
      },
      "reward": {
        "__fixed__": "0.193406593076923076923076923076"
      }
    },
    {
      "key": "currency.balances:e79133b02cd2a84e2ce5d24b2f44433f61f0db7e10acedfc241e94dff06f710a",
      "value": {
        "__fixed__": "110213.93948690615384615384615384593"
      },
      "reward": {
        "__fixed__": "0.193406593076923076923076923076"
      }
    },
    {
      "key": "currency.balances:0d5077e53bdb2250ae83f2ea078ed571ba5ddba6c474cc1d24568f7d62d57da7",
      "value": {
        "__fixed__": "10192.569230503846153575384615384398"
      },
      "reward": {
        "__fixed__": "0.193406593076923076923076923076"
      }
    },
    {
      "key": "currency.balances:82140a30d6e13812702bfe51f814a781f09ac23f564b3b6d9d7ad26760e1edaa",
      "value": {
        "__fixed__": "11725.006153580769230246153846153633"
      },
      "reward": {
        "__fixed__": "0.193406593076923076923076923076"
      }
    },
    {
      "key": "currency.balances:fad066ac33e8c45d2530dde6393dfc0a860775f8261840c2a0d18b42a8b222c0",
      "value": {
        "__fixed__": "10192.073845888461538199999999999797"
      },
      "reward": {
        "__fixed__": "0.193406593076923076923076923076"
      }
    },
    {
      "key": "currency.balances:3321206f8137f299acf29ebe7df44b61da4b093b630e897d8b081dc0f8668980",
      "value": {
        "__fixed__": "10190.150768973076922661538461538265"
      },
      "reward": {
        "__fixed__": "0.193406593076923076923076923076"
      }
    },
    {
      "key": "currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
      "value": {
        "__fixed__": "8711.465153846153846146153846135209"
      },
      "reward": {
        "__fixed__": "0.015384615384615384615384615384"
      }
    },
    {
      "key": "currency.balances:sys",
      "value": {
        "__fixed__": "728.72732178"
      },
      "reward": {
        "__fixed__": "0.15384615"
      }
    }
  ],
  "origin": {
    "signature": "6a6d92eee63324fecdaaf603be8d62346cfc98506ca9eacdcbba244a04ef84c7d0d11653bdbcb86f400f3e1a2e19e9be06945840c004fb6919bd5b26cf8b7c09",
    "sender": "ffd7182fcfd0d84ca68845fb11bafad11abca2f9aca8754a6d9cad7baa39d28b"
  }
}
```
