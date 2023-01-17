# Blockservice REST API

Blockservice currently provides many APIs to allow user easily access to the on-chain data of Lamden.
The APIs are documented using Swagger. For details and examples, please check the documents you served at local or visit the online [<u>documents</u>](http://119.29.130.37:8999/api-docs/).

## Blocks Endpoints
### Get block by block number
**`get` `/blocks/:number`**

Get block information from a specific block number.

> Example
> /blocks/666

#### Response
```json
{
  "hash": "49831bfd2872be8383d3565d750f2a5ce959585f01539d876a81aded00038573",
  "number": 666,
  "previous": "e8efaa3ca28dd9fe500bc992248fd583fabdab29b747fc64077917b31db9b558",
  "subblocks": [{
    "input_hash": "8b4b8409fc6e941c8700a2308fc9962ea632c74a2513c90fcbf3969518fa475b",
    "merkle_leaves": ["4d67420b8c3e2ec3a0ca802ec7b83d0af08e6994e2c696d3a9263648d5847848"],
    "signatures": [{
      "signature": "d78c91586d1a6d5cf9bc201f27017b50df28b307848cc57651baff3efad121977acc5471bf6e9e9f26c92073605c96cefc62dfecbf50666cbfee241f7bfcef06",
      "signer": "df8c5dc9206ca1827ec6194f1b4cfa5249978e28f3cccf619a2ae92c3beba651"
    }, {
      "signature": "1f63cb7adecdc53298dbd0a53875dfb37b79a254584bb4a85ad7ae6a3bfa8bdd9ddec39890ddded0f9bb7fd7b4a2d51158320b85efd3f910588974308100200f",
      "signer": "ee2e928015fd8433c8c6da7234504968a1bde751b0784c3efbe4bc42628d5e9b"
    }],
    "subblock": 0,
    "transactions": [{
      "hash": "93bfe4b525477b935c18d42282b6544159dbd4692da08e679ef7f687fce17567",
      "result": "{'survivor': '757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae', 'status': 'fail_attack', 'amount': 5, 'gameId': 'a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2'}",
      "stamps_used": 82,
      "state": [{
        "key": "currency.balances:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:con_survival_6",
        "value": {
          "__fixed__": "9861.720000"
        }
      }, {
        "key": "currency.balances:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
        "value": {
          "__fixed__": "988873.46000000"
        }
      }, {
        "key": "con_survival_6.game:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:zombie",
        "value": 5
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:zombies_attack",
        "value": 5
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:game_amount",
        "value": {
          "__fixed__": "61.720000"
        }
      }, {
        "key": "con_survival_6.game:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:zombies_kills",
        "value": 2
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:game_zombies_kills",
        "value": 2
      }, {
        "key": "con_survival_6.game:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:tau_gain",
        "value": 10
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:game_survivor_gain",
        "value": 10
      }],
      "status": 0,
      "transaction": {
        "metadata": {
          "signature": "c4dc9fdab4b86af3903286e85e4535d45069224a31949202e648b9cdcb47601cf5fda28c88a6b256268d8948562a4f79a5961b2fc19369869dfb9ac161520001",
          "timestamp": 1604242658
        },
        "payload": {
          "contract": "con_survival_6",
          "function": "attack_survivor",
          "nonce": 251,
          "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
          "sender": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
          "stamps_supplied": 200
        }
      }
    }]
  }],
  "id": 666
}
```

---
### Get blocks information
**`get` `/blocks`**

Get block information from a amount of blocks. Max amount is 100 and default is 10.

> Example
> /blocks?limit=10&start_block=666


#### Response
```json
[{
  "hash": "49831bfd2872be8383d3565d750f2a5ce959585f01539d876a81aded00038573",
  "number": 666,
  "previous": "e8efaa3ca28dd9fe500bc992248fd583fabdab29b747fc64077917b31db9b558",
  "subblocks": [{
    "input_hash": "8b4b8409fc6e941c8700a2308fc9962ea632c74a2513c90fcbf3969518fa475b",
    "merkle_leaves": ["4d67420b8c3e2ec3a0ca802ec7b83d0af08e6994e2c696d3a9263648d5847848"],
    "signatures": [{
      "signature": "d78c91586d1a6d5cf9bc201f27017b50df28b307848cc57651baff3efad121977acc5471bf6e9e9f26c92073605c96cefc62dfecbf50666cbfee241f7bfcef06",
      "signer": "df8c5dc9206ca1827ec6194f1b4cfa5249978e28f3cccf619a2ae92c3beba651"
    }, {
      "signature": "1f63cb7adecdc53298dbd0a53875dfb37b79a254584bb4a85ad7ae6a3bfa8bdd9ddec39890ddded0f9bb7fd7b4a2d51158320b85efd3f910588974308100200f",
      "signer": "ee2e928015fd8433c8c6da7234504968a1bde751b0784c3efbe4bc42628d5e9b"
    }],
    "subblock": 0,
    "transactions": [{
      "hash": "93bfe4b525477b935c18d42282b6544159dbd4692da08e679ef7f687fce17567",
      "result": "{'survivor': '757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae', 'status': 'fail_attack', 'amount': 5, 'gameId': 'a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2'}",
      "stamps_used": 82,
      "state": [{
        "key": "currency.balances:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:con_survival_6",
        "value": {
          "__fixed__": "9861.720000"
        }
      }, {
        "key": "currency.balances:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
        "value": {
          "__fixed__": "988873.46000000"
        }
      }, {
        "key": "con_survival_6.game:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:zombie",
        "value": 5
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:zombies_attack",
        "value": 5
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:game_amount",
        "value": {
          "__fixed__": "61.720000"
        }
      }, {
        "key": "con_survival_6.game:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:zombies_kills",
        "value": 2
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:game_zombies_kills",
        "value": 2
      }, {
        "key": "con_survival_6.game:757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae:tau_gain",
        "value": 10
      }, {
        "key": "con_survival_6.game:a131b66271001f6e18ecde122409faa2fc32ca212924930a56e15cde86491cf2:game_survivor_gain",
        "value": 10
      }],
      "status": 0,
      "transaction": {
        "metadata": {
          "signature": "c4dc9fdab4b86af3903286e85e4535d45069224a31949202e648b9cdcb47601cf5fda28c88a6b256268d8948562a4f79a5961b2fc19369869dfb9ac161520001",
          "timestamp": 1604242658
        },
        "payload": {
          "contract": "con_survival_6",
          "function": "attack_survivor",
          "nonce": 251,
          "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
          "sender": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
          "stamps_supplied": 200
        }
      }
    }]
  }],
  "id": 666
}]
```

## History Endpoints
### Get history information
**`get` `/all_history`**

Get history information of state changes. 

#### Parameters
- limit: Specifies the number of results to return. Default is 10.
- last_tx_uid: Last transaction unique ID. The returned elements match the condition that its uids are behind `last_tx_uid`. Default is 000000000000.00000.00000

> Example
> /all_history?limit=10&last_tx_uid=000000000000.00000.00000

#### Response
```json
{
    "history": [{
        "affectedContractsList": ["currency"],
        "affectedVariablesList": ["currency.balances"],
        "affectedRootKeysList": ["currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345", "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"],
        "affectedRawKeysList": ["currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345", "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"],
        "_id": "628527c6fac81c3865843666",
        "tx_uid": "000000000001.00000.00000",
        "__v": 0,
        "blockNum": 1,
        "state_changes_obj": {
            "currency": {
                "balances": {
                    "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345": {
                        "__fixed__": "286090566.10000000"
                    },
                    "4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba": 2000000
                }
            }
        },
        "subBlockNum": 0,
        "timestamp": 1602810136000,
        "txHash": "f0b137b2435e46a660cd7179538d722387c417074c378fe38515f91f470c2821",
        "txIndex": 0,
        "txInfo": {
            "hash": "f0b137b2435e46a660cd7179538d722387c417074c378fe38515f91f470c2821",
            "result": "None",
            "stamps_used": 18,
            "state": [{
                "key": "currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
                "value": {
                    "__fixed__": "286090566.10000000"
                }
            }, {
                "key": "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba",
                "value": 2000000
            }],
            "status": 0,
            "transaction": {
                "metadata": {
                    "signature": "8aa904ec491acfcbbd716a51a887f303d8320016b27e4a42bc4764cff7aed4f0415c984e5253e812c35a65c0c5b2177f291d933986f23c8212e21d29e77bf001",
                    "timestamp": 1602810136
                },
                "payload": {
                    "contract": "currency",
                    "function": "transfer",
                    "kwargs": {
                        "amount": 2000000,
                        "to": "4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"
                    },
                    "nonce": 0,
                    "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
                    "sender": "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
                    "stamps_supplied": 500
                }
            }
        }
    }]
}
```

---
### Get history information by contract
**`get` `/contract_history`**

Get history information of state changes of specified contract. 

#### Parameters
- contract : Contract name
- limit: Specifies the number of results to return. Default is 10.
- last_tx_uid: Last transaction unique ID. The returned elements match the condition that its uids are behind `last_tx_uid`. Default is 000000000000.00000.00000

> Example
> /contract_history?contract=currency&limit=10&last_tx_uid=000000000000.00000.00000

#### Response
```json
{
    "history": [{
        "affectedContractsList": ["currency"],
        "affectedVariablesList": ["currency.balances"],
        "affectedRootKeysList": ["currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345", "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"],
        "affectedRawKeysList": ["currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345", "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"],
        "_id": "628527c6fac81c3865843666",
        "tx_uid": "000000000001.00000.00000",
        "__v": 0,
        "blockNum": 1,
        "state_changes_obj": {
            "currency": {
                "balances": {
                    "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345": {
                        "__fixed__": "286090566.10000000"
                    },
                    "4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba": 2000000
                }
            }
        },
        "subBlockNum": 0,
        "timestamp": 1602810136000,
        "txHash": "f0b137b2435e46a660cd7179538d722387c417074c378fe38515f91f470c2821",
        "txIndex": 0,
        "txInfo": {
            "hash": "f0b137b2435e46a660cd7179538d722387c417074c378fe38515f91f470c2821",
            "result": "None",
            "stamps_used": 18,
            "state": [{
                "key": "currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
                "value": {
                    "__fixed__": "286090566.10000000"
                }
            }, {
                "key": "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba",
                "value": 2000000
            }],
            "status": 0,
            "transaction": {
                "metadata": {
                    "signature": "8aa904ec491acfcbbd716a51a887f303d8320016b27e4a42bc4764cff7aed4f0415c984e5253e812c35a65c0c5b2177f291d933986f23c8212e21d29e77bf001",
                    "timestamp": 1602810136
                },
                "payload": {
                    "contract": "currency",
                    "function": "transfer",
                    "kwargs": {
                        "amount": 2000000,
                        "to": "4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"
                    },
                    "nonce": 0,
                    "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
                    "sender": "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
                    "stamps_supplied": 500
                }
            }
        }
    }]
}
```

---
### Get history information by variable 
**`get` `/variable_history`**

Get history information of state changes of specified variable of specified contract. 

#### Parameters
- variable: Variable name
- contract : Contract name
- limit: Specifies the number of results to return. Default is 10.
- last_tx_uid: Last transaction unique ID. The returned elements match the condition that its uids are behind `last_tx_uid`. Default is 000000000000.00000.00000

> Example
> /variable_history?contract=currency&variable=balances&limit=1&last_tx_uid=000000000000.00000.00000

#### Response
```json
{
  "history": [{
    "affectedContractsList": ["currency"],
    "affectedVariablesList": ["currency.balances"],
    "affectedRootKeysList": ["currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345", "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"],
    "affectedRawKeysList": ["currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345", "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"],
    "_id": "628527c6fac81c3865843666",
    "tx_uid": "000000000001.00000.00000",
    "__v": 0,
    "blockNum": 1,
    "state_changes_obj": {
      "currency": {
        "balances": {
          "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345": {
            "__fixed__": "286090566.10000000"
          },
          "4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba": 2000000
        }
      }
    },
    "subBlockNum": 0,
    "timestamp": 1602810136000,
    "txHash": "f0b137b2435e46a660cd7179538d722387c417074c378fe38515f91f470c2821",
    "txIndex": 0,
    "txInfo": {
      "hash": "f0b137b2435e46a660cd7179538d722387c417074c378fe38515f91f470c2821",
      "result": "None",
      "stamps_used": 18,
      "state": [{
        "key": "currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
        "value": {
          "__fixed__": "286090566.10000000"
        }
      }, {
        "key": "currency.balances:4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba",
        "value": 2000000
      }],
      "status": 0,
      "transaction": {
        "metadata": {
          "signature": "8aa904ec491acfcbbd716a51a887f303d8320016b27e4a42bc4764cff7aed4f0415c984e5253e812c35a65c0c5b2177f291d933986f23c8212e21d29e77bf001",
          "timestamp": 1602810136
        },
        "payload": {
          "contract": "currency",
          "function": "transfer",
          "kwargs": {
            "amount": 2000000,
            "to": "4a035ff604ffb0a44e5235e2fed8f69666b6df6ff11cbfa347d154d1a5453bba"
          },
          "nonce": 0,
          "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
          "sender": "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
          "stamps_supplied": 500
        }
      }
    }
  }]
}
```

---
### Get history information by rootkey 
**`get` `/rootkey_history`**

Get history information of state changes by specified rootkey, variable and contract. 

#### Parameters
- root_key: root key value
- variable: Variable name
- contract : Contract name
- limit: Specifies the number of results to return. Default is 10.
- last_tx_uid: Last transaction unique ID. The returned elements match the condition that its UIDs are behind `last_tx_uid`. Default is 000000000000.00000.00000

> Example
> /rootkey_history?root_key=2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9&contract=currency&variable=balances&limit=1&last_tx_uid=000000000000.00000.00000

#### Response
```json
{
  "history": [{
    "affectedContractsList": ["currency"],
    "affectedVariablesList": ["currency.balances"],
    "affectedRootKeysList": ["currency.balances:f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780", "currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9"],
    "affectedRawKeysList": ["currency.balances:f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780", "currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9"],
    "_id": "62853846fac81c386584c72f",
    "tx_uid": "000000001575.00000.00000",
    "__v": 0,
    "blockNum": 1575,
    "state_changes_obj": {
      "currency": {
        "balances": {
          "f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780": {
            "__fixed__": "23988991.20"
          },
          "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9": {
            "__fixed__": "1000.0"
          }
        }
      }
    },
    "subBlockNum": 0,
    "timestamp": 1605125949000,
    "txHash": "86305901ac779b25d964240f2882247fa2e4b5a0d0fee20bf7dae3eb8c0c9e15",
    "txIndex": 0,
    "txInfo": {
      "hash": "86305901ac779b25d964240f2882247fa2e4b5a0d0fee20bf7dae3eb8c0c9e15",
      "result": "None",
      "stamps_used": 18,
      "state": [{
        "key": "currency.balances:f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780",
        "value": {
          "__fixed__": "23988991.20"
        }
      }, {
        "key": "currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9",
        "value": {
          "__fixed__": "1000.0"
        }
      }],
      "status": 0,
      "transaction": {
        "metadata": {
          "signature": "8076b9dd696f52b8af951cdfb9fe014d5a98cebce95184fdaffbd144c37bf21123daeb93cc169016aee912c2c87e996031595b97f958774927c22eacc4bc6101",
          "timestamp": 1605125949
        },
        "payload": {
          "contract": "currency",
          "function": "transfer",
          "kwargs": {
            "amount": {
              "__fixed__": "1000.0"
            },
            "to": "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9"
          },
          "nonce": 4,
          "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
          "sender": "f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780",
          "stamps_supplied": 100
        }
      }
    }
  }]
}
```

---
### Get transaction history information
**`get` `/tx_history/:vk`**

Get transaction history information of state changes by vk. 

#### Parameters
- vk: account address
- limit: Specifies the number of results to return. Default is 10.
- max_tx_uid: The Max transaction unique ID used to filter the returns. Default is 999999999999.00000.00000

> Example
> /tx_history/2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9?limit=1&last_tx_uid=000000000100.00000.00000

#### Response
```json
{
  "history": [{
    "affectedContractsList": ["currency"],
    "affectedVariablesList": ["currency.balances"],
    "affectedRootKeysList": ["currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9", "currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41"],
    "affectedRawKeysList": ["currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9", "currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41"],
    "_id": "6285276efac81c3865822ddc",
    "tx_uid": "000000066475.00000.00000",
    "__v": 0,
    "blockNum": 66475,
    "state_changes_obj": {
      "currency": {
        "balances": {
          "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9": {
            "__fixed__": "2.01538460846156221"
          },
          "b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41": {
            "__fixed__": "8.5384615384615433"
          }
        }
      }
    },
    "subBlockNum": 0,
    "timestamp": 1652793546000,
    "txHash": "f3e86d58ef11b5e9a5308e8740107dc256ef5adc0e8369d8c3cb80309054fa72",
    "txIndex": 0,
    "txInfo": {
      "hash": "f3e86d58ef11b5e9a5308e8740107dc256ef5adc0e8369d8c3cb80309054fa72",
      "result": "None",
      "stamps_used": 19,
      "state": [{
        "key": "currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9",
        "value": {
          "__fixed__": "2.01538460846156221"
        }
      }, {
        "key": "currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41",
        "value": {
          "__fixed__": "8.5384615384615433"
        }
      }],
      "status": 0,
      "transaction": {
        "metadata": {
          "signature": "951b2ad805ea829a0bf1e18d7ea0aeb040c701334fef4b86a4ade87dbec72f6fcc1d16001bf3bca13c7757bb19f8c3765a41910fd04a16a7942ac5eb92098400",
          "timestamp": 1652793546
        },
        "payload": {
          "contract": "currency",
          "function": "transfer",
          "kwargs": {
            "amount": {
              "__fixed__": "1.0"
            },
            "to": "b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41"
          },
          "nonce": 825,
          "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
          "sender": "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9",
          "stamps_supplied": 26
        }
      }
    }
  }]
}
```

## Contract Endpoints
### Get all contracts information
**`get` `/contracts`**

Get all contracts information.

> Example
> /contracts

#### Response
```json
[{
  "contractName": "currency",
  "lst001": false
}, {
  "contractName": "con_abbbb",
  "lst001": false
}, {
  "contractName": "con_new_contract",
  "lst001": false
}, {
  "contractName": "con_storage",
  "lst001": false
}, {
  "contractName": "baseName0",
  "lst001": false
}, {
  "contractName": "baseName1",
  "lst001": false
}, {
  "contractName": "baseName2",
  "lst001": false
}, {
  "contractName": "baseName3",
  "lst001": false
}, {
  "contractName": "baseName4",
  "lst001": false
}, {
  "contractName": "baseName5",
  "lst001": false
}, {
  "contractName": "baseName6",
  "lst001": false
}, {
  "contractName": "baseName7",
  "lst001": false
}, {
  "contractName": "baseName8",
  "lst001": false
}, {
  "contractName": "baseName9",
  "lst001": false
}]
```

---
### Get contract details
**`get` `/contracts/:contractName`**

Get contract details from a specific contract name.

> Example
> /contracts/currency

#### Response
```json
{
    "currency": {
        "balances": {
            "0a0a58e44583b273c37f5f4d761a09176679a1044cddb0357eaace2d7c35600e": {"__fixed__": "319.6153846153846025"},
            "0a3af1032f753d72130a7c5106d5e2f8391477b68c940c92a252a473243517a9": {"__fixed__": "319.6153846153846025"}
        }
    }
}
```

## Token Endpoints
### Get all token smart contracts information
**`get` `/tokens`**

Get all token smart contracts information.

> Example
> /tokens

#### Response
```json
[{
  "contractName": "con_diego",
  "lst001": true
}, {
  "contractName": "con_diego2",
  "lst001": true
}, {
  "contractName": "con_aprv2_contract",
  "lst001": true
}, {
  "contractName": "con_aprv_contract",
  "lst001": true
}, {
  "contractName": "con_new_contracttest",
  "lst001": true
}, {
  "contractName": "con_new_contract22",
  "lst001": true
}]
```

---
### Get a token smart contracts information
**`get` `/tokens/contractName`**

Get a token smart contracts information.

> Example
> /tokens/con_diego2

#### Response
```json
{
  "__developer__": "58fd63a82a4db51501df4c401efa07263f160c95d468e03984595c645859cfa5",
  "__owner__": null,
  "__submitted__": {
    "__time__": [2021, 1, 12, 0, 39, 56, 0]
  }
}
```

## Stamps Endpoints
### Estimated stamps cost
**`post` `/stamps/estimation`**

Estimated stamps cost for a transaction

> Example
> /stamps/estimation

#### Payload
```json
{
  "metadata": {
    "signature": "fa4afe36080b5a79d9cfc8b1207df7d147f1e87e1880384b63ea417967ee1515e0ab9a471bd61d0834cb381f80780dee1eaed85e126e31a2eae732b2b5520c0a",
    "timestamp": 1601498663
  },
  "payload": {
    "contract": "currency",
    "function": "transfer",
    "kwargs": {
      "amount": {
        "__fixed__": "10.5"
      },
      "to": "183533f55e67a1a6e0c3d13ef3a69f4b1b1bcf7c64ef4e0cef6fbf4b6e0eaf95"
    },
    "nonce": 32,
    "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
    "sender": "f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780",
    "stamps_supplied": 40
  }
}
```

#### Response
```json
{
  "result": "None",
  "stamps_used": 19,
  "state": [
    {
      "key": "currency.balances:f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780",
      "value": {
        "__fixed__": "20726461.63553375692612913236353998744"
      }
    },
    {
      "key": "currency.balances:183533f55e67a1a6e0c3d13ef3a69f4b1b1bcf7c64ef4e0cef6fbf4b6e0eaf95",
      "value": {
        "__fixed__": "10.5"
      }
    }
  ],
  "status": 0,
  "transaction": {
    "metadata": {
      "signature": "fa4afe36080b5a79d9cfc8b1207df7d147f1e87e1880384b63ea417967ee1515e0ab9a471bd61d0834cb381f80780dee1eaed85e126e31a2eae732b2b5520c0a",
      "timestamp": 1601498663
    },
    "payload": {
      "contract": "currency",
      "function": "transfer",
      "kwargs": {
        "amount": {
          "__fixed__": "10.5"
        },
        "to": "183533f55e67a1a6e0c3d13ef3a69f4b1b1bcf7c64ef4e0cef6fbf4b6e0eaf95"
      },
      "nonce": 32,
      "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
      "sender": "f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780",
      "stamps_supplied": 40
    }
  }
}
```


## State Endpoints
### Get state of variable
**`get` `/current/one/:contractName/:variableName`**

Get current state value of a specific variable of contract

> Example
> /current/one/con_survival_test/operator

#### Response
```json
{
  "rawKey": "con_survival_test.operator",
  "txHash": "a36f41521b0826ae97ece42ab561faf97ef27484953d72b8a5b72066f947e72a",
  "tx_uid": "000000000471.00000.00000",
  "prev_value": null,
  "prev_tx_uid": null,
  "value": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
  "lastUpdated": "2020-10-26T00:44:04.000Z",
  "contractName": "con_survival_test",
  "variableName": "operator"
}
```

---
### Get state of key
**`get` `/current/one/:contractName/:variableName/:key`**

Get current state value of a specific key of variable of contract

> Example
> /current/one/con_survival_test/game/boss_enabled

#### Response
```json
{
  "rawKey": "con_survival_test.game:boss_enabled",
  "txHash": "a36f41521b0826ae97ece42ab561faf97ef27484953d72b8a5b72066f947e72a",
  "tx_uid": "000000000471.00000.00000",
  "prev_value": null,
  "prev_tx_uid": null,
  "value": false,
  "lastUpdated": "2020-10-26T00:44:04.000Z",
  "contractName": "con_survival_test",
  "variableName": "game",
  "key": "boss_enabled"
}
```

---
### Get states in a batch
**`post` `/current/keys`**

Get a batch of states values

#### Payload
```json
[
  {
    "contractName": "con_survival_test",
    "variableName": "game",
    "key": "amount_boss"
  }
]
```

> Example
> /current/one/con_survival_test/game/boss_enabled

#### Response
```json
[
  {
    "rawKey": "con_survival_test.game:amount_boss",
    "txHash": "a36f41521b0826ae97ece42ab561faf97ef27484953d72b8a5b72066f947e72a",
    "tx_uid": "000000000471.00000.00000",
    "prev_value": null,
    "prev_tx_uid": null,
    "value": 1000,
    "lastUpdated": "2020-10-26T00:44:04.000Z",
    "contractName": "con_survival_test",
    "variableName": "game",
    "key": "amount_boss"
  }
]
```

---
### Get all states of contract
**`get` `/current/all/:contractName`**

Get all states of contract

> Example
> /current/all/con_survival_test

#### Response
```json
{
  "con_survival_test": {
    "__code__": "import currency\n__game = Hash(default_value=0, contract='con_survival_test', name='game')\n__operator = Variable(contract='con_survival_test', name='operator')\n__distributionAmount = Variable(contract='con_survival_test', name=\n    'distributionAmount')\n__zombiesAmount = Variable(contract='con_survival_test', name='zombiesAmount')\n__survivorAmount = Variable(contract='con_survival_test', name='survivorAmount'\n    )\nrandom.seed()\n\n\ndef ____(vk: str):\n    __operator.set(vk)\n    __distributionAmount.set(0)\n    __zombiesAmount.set(0)\n    __survivorAmount.set(0)\n    __game['boss_enabled'] = False\n    __game['amount_boss'] = 1000\n    __game['last_redeem'] = now\n    __game['play_cost'] = 20\n    __game['redeem_time'] = 1\n    __game['fail_attack'] = 5\n    __game['chance_instakill'] = 3\n    __game['chance_life'] = 15\n    __game['items_life'] = [20, 35, 90]\n    __game['charge_life'] = [1, 2, 5]\n    __game['items_weapon'] = [40, 90, 120]\n    __game['stat_weapon'] = [2, 5, 8]\n    __game['items_shield'] = [40, 80, 120]\n    __game['stat_shield'] = [10, 20, 50]\n    __game['items_skill'] = [40, 90, 120]\n    __game['stat_skill'] = [2, 5, 8]\n\n\n@__export('con_survival_test')\ndef attack_survivor():\n    caller = ctx.caller\n    play_cost = __game['play_cost']\n    assert currency.balance_of(caller\n        ) >= play_cost, 'Not enough Balance to play!'\n    currency.transfer_from(play_cost, __operator.get(), caller)\n    __game[caller, 'zombie'] += 1\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    __game[GAMEID, 'zombies_attack'] += 1\n    __game[caller, 'zombie'] += 1\n    SHIELD_ITEM = __game[SURVIVOR, 'item_shield']\n    WEAPON_ITEM = __game[SURVIVOR, 'item_weapon']\n    SKILL_ZOMBIE = __game[caller, 'item_skill']\n    if SHIELD_ITEM is None:\n        SHIELD_ITEM = 0\n    if WEAPON_ITEM is None:\n        WEAPON_ITEM = 0\n    if SKILL_ZOMBIE is None:\n        SKILL_ZOMBIE = 0\n    __game[GAMEID, 'game_amount'] += 20\n    randomFirstAttack = random.randint(1, 100)\n    if __game[SURVIVOR, 'item_shield_times'] < 1:\n        SHIELD_ITEM = 0\n    else:\n        __game[SURVIVOR, 'item_shield_times'] -= 1\n    if randomFirstAttack <= __game['chance_instakill'] - SHIELD_ITEM:\n        ATTACK_SHIELD = __shield()\n        if ATTACK_SHIELD is True:\n            __game[GAMEID, SURVIVOR, 'have_sherif_shield'] = 0\n        else:\n            return __kill_survivor(caller)\n    else:\n        randomSecondAttack = random.randint(1, 100)\n        if __game[caller, 'item_skill_times'] < 1:\n            SKILL_ZOMBIE = 0\n        else:\n            __game[caller, 'item_skill_times'] -= 1\n        if __game[SURVIVOR, 'item_weapon_times'] < 1:\n            WEAPON_ITEM = 0\n        else:\n            __game[SURVIVOR, 'item_weapon_times'] -= 1\n        if randomFirstAttack <= __game['chance_life'\n            ] + SKILL_ZOMBIE - WEAPON_ITEM:\n            if __game[GAMEID, SURVIVOR, 'survivor_life'] < 2:\n                return __kill_survivor(caller)\n            else:\n                return __attack_zombie(caller)\n        else:\n            return __kill_zombie(caller)\n\n\n@__export('con_survival_test')\ndef redeem():\n    caller = ctx.caller\n    assert (now - __game[GAMEID, 'last_redeem']).hours >= 1, 'Not Cant redeem'\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    if caller == SURVIVOR:\n        AMOUNT = 50 * (now - __game[GAMEID, 'last_redeem']).hours\n        if AMOUNT > 0:\n            currency.transfer_from(AMOUNT, SURVIVOR, __operator.get())\n            __game[GAMEID, 'last_redeem'] = now\n            __game[GAMEID, 'game_amount'] -= AMOUNT\n            __game[GAMEID, 'survivor_gain'] += AMOUNT\n            __game[caller, 'survivor_gain'] += AMOUNT\n            return AMOUNT\n\n\n@__export('con_survival_test')\ndef start(account: str, amount: int):\n    __assert_owner()\n    __game['gameId'] = hashlib.sha3(str(now))\n    GAMEID = __game['gameId']\n    __game[GAMEID, 'survivor'] = account\n    __game[GAMEID, 'last_redeem'] = now\n    __game[GAMEID, 'game_amount'] = amount\n    __game[GAMEID, account, 'survivor_life'] = 5\n    __game[account, 'item_shield'] = 0\n    __game[account, 'item_weapon'] = 0\n    __game[account, 'survivor_exp_time'] = now\n    __game[GAMEID, 'avatar'] = 1\n\n\ndef __kill_zombie(account: str):\n    GAMEID = __game['gameId']\n    FAIL_AMOUNT = __game['fail_attack']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    currency.transfer_from(__game['fail_attack'], SURVIVOR, __operator.get())\n    __game[SURVIVOR, 'zombie_kill'] += 1\n    __game[SURVIVOR, 'survivor_gain'] += FAIL_AMOUNT\n    __game[GAMEID, 'game_amount'] -= FAIL_AMOUNT\n    __game[GAMEID, 'survivor_gain'] += FAIL_AMOUNT\n    __game[GAMEID, 'zombie_attack'] += 1\n    return {'survivor': SURVIVOR, 'time': now, 'status': 'fail_attack',\n        'attack': False, 'fatal_attack': False, 'amount': FAIL_AMOUNT,\n        'gameId': GAMEID}\n\n\ndef __attack_zombie(account: str):\n    LAST_GAMEID = __game['gameId']\n    SURVIVOR = __game[LAST_GAMEID, 'survivor']\n    __game[LAST_GAMEID, SURVIVOR, 'survivor_life'] -= 1\n    STEAL_AMOUNT = 50 * (now - __game[LAST_GAMEID, 'last_redeem']\n        ).hours * decimal('0.20')\n    if __game[LAST_GAMEID, 'game_amount'] < STEAL_AMOUNT:\n        STEAL_AMOUNT = __game[LAST_GAMEID, 'game_amount'] * decimal('0.20')\n    __game[LAST_GAMEID, 'game_amount'] -= STEAL_AMOUNT\n    if STEAL_AMOUNT > 0:\n        currency.transfer_from(STEAL_AMOUNT, account, __operator.get())\n    __game[LAST_GAMEID, 'zombies_gain'] += STEAL_AMOUNT\n    __game[account, 'zombies_gain'] += STEAL_AMOUNT\n    __game[LAST_GAMEID, 'zombie_attack'] += 1\n    return {'survivor': SURVIVOR, 'time': now, 'status': 'steal_life',\n        'attack': True, 'fatal_attack': False, 'amount': STEAL_AMOUNT,\n        'gameId': LAST_GAMEID}\n\n\ndef __kill_survivor(account: str):\n    LAST_GAMEID = __game['gameId']\n    SURVIVOR = __game[LAST_GAMEID, 'survivor']\n    STEAL_AMOUNT = 50 * (now - __game[LAST_GAMEID, 'last_redeem']).hours\n    LAST_AMOUNT = __game[LAST_GAMEID, 'game_amount']\n    if LAST_AMOUNT < STEAL_AMOUNT:\n        STEAL_AMOUNT = __game[LAST_GAMEID, 'game_amount']\n    __game['gameId'] = hashlib.sha3(str(now))\n    GAMEID = __game['gameId']\n    __game[GAMEID, 'survivor'] = account\n    __game[GAMEID, 'game_amount'] = LAST_AMOUNT - STEAL_AMOUNT\n    __game[GAMEID, 'last_redeem'] = now\n    __game[account, 'survivor_time'] += 1\n    __game[account, 'survivor_exp'] += (now - __game[account,\n        'survivor_exp_time']).hours\n    __game[account, 'survivor_exp_time'] = now\n    __game[GAMEID, 'survivor_gain'] += STEAL_AMOUNT\n    __game[account, 'survivor_gain'] += STEAL_AMOUNT\n    __game[GAMEID, 'avatar'] = random.randint(1, 4)\n    __game[GAMEID, account, 'have_sherif_shield'] = 1\n    __game[account, 'item_shield'] = 0\n    __game[account, 'item_weapon'] = 0\n    if STEAL_AMOUNT > 0:\n        currency.transfer_from(STEAL_AMOUNT, account, __operator.get())\n    return {'survivor': account, 'time': now, 'status': 'new_survivor',\n        'attack': True, 'fatal_attack': True, 'amount': STEAL_AMOUNT,\n        'gameId': LAST_GAMEID}\n\n\ndef __shield():\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    HAVE_SHIELD = __game[GAMEID, SURVIVOR, 'have_sherif_shield']\n    if HAVE_SHIELD == 1:\n        randomShield = random.randint(1, 2)\n        if randomShield == 1:\n            return True\n    else:\n        return False\n\n\n@__export('con_survival_test')\ndef weapon(item: int):\n    caller = ctx.caller\n    LIST_ITEM = __game['items_life']\n    ITEM_STATS = __game['stat_weapon']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[caller, 'item_weapon'] = ITEM_STATS[item]\n    __game[caller, 'item_weapon_times'] = 3\n\n\n@__export('con_survival_test')\ndef shield(item: int):\n    caller = ctx.caller\n    LIST_ITEM = __game['items_shield']\n    ITEM_STATS = __game['stat_shield']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[caller, 'item_shield'] = ITEM_STATS[item]\n    __game[caller, 'item_shield_times'] = 3\n\n\n@__export('con_survival_test')\ndef skill(item: int):\n    caller = ctx.caller\n    LIST_ITEM = __game['items_skill']\n    ITEM_STATS = __game['stat_skill']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[caller, 'items_skill'] = ITEM_STATS[item]\n    __game[caller, 'items_skill_times'] = 3\n\n\n@__export('con_survival_test')\ndef life(item: int):\n    caller = ctx.caller\n    GAMEID = __game['gameId']\n    LIST_ITEM = __game['items_life']\n    CHARGE_LIFE = __game['charge_life']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[GAMEID, account, 'survivor_life'] += CHARGE_LIFE[item]\n\n\n@__export('con_survival_test')\ndef attack_boss():\n    caller = ctx.caller\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    if caller == SURVIVOR:\n        if __game['boss_enabled'] is True:\n            randomBoss = random.randint(1, 4)\n            if randomBoss == 4:\n                __game[caller, 'boss_kill'] += 1\n                __game[GAMEID, 'survivor_gain'] = __game['amount_boss']\n                currency.transfer_from(__game['amount_boss'], caller,\n                    __operator.get())\n                return True\n            else:\n                return False\n        else:\n            return False\n    else:\n        return False\n\n\n@__export('con_survival_test')\ndef set_nick_name(nickname: str):\n    caller = ctx.caller\n    assert len(nickname) <= 25, 'Nickname too long (25 chars max).'\n    assert len(nickname) > 0, 'Nickname too short.'\n    names_uid = hashlib.sha3(nickname.lower().replace(' ', ''))\n    assert not __game['nicknames', names_uid\n        ], 'A form of this name already belongs to ' + balances['nicknames',\n        names_uid]\n    __game[caller, 'nickname'] = nickname\n    __game['nicknames', names_uid] = nickname\n\n\ndef __assert_owner():\n    assert ctx.caller == __operator.get(), 'Only operator can call!'\n",
    "__compiled__": {
      "__bytes__": "e300000000000000000000000005000000400000007350010000640064016c005a00650164006402640364048d035a0265036402640564068d025a0465036402640764068d025a0565036402640864068d025a0665036402640964068d025a0765086a0983000100650a640a9c01640b640c84045a0b650c64028301640d640e840083015a0d650c64028301640f6410840083015a0e650c64028301650a650f64119c0264126413840483015a10650a64149c016415641684045a11650a64149c016417641884045a12650a64149c016419641a84045a13641b641c84005a14650c64028301650f641d9c01641e641f840483015a15650c64028301650f641d9c0164206421840483015a16650c64028301650f641d9c0164226423840483015a17650c64028301650f641d9c0164246425840483015a18650c6402830164266427840083015a19650c64028301650a64289c016429642a840483015a1a642b642c84005a1b64015300292de9000000004eda11636f6e5f737572766976616c5f74657374da0467616d652903da0d64656661756c745f76616c7565da08636f6e7472616374da046e616d65da086f70657261746f72290272050000007206000000da12646973747269627574696f6e416d6f756e74da0d7a6f6d62696573416d6f756e74da0e7375727669766f72416d6f756e742901da02766b63010000000000000001000000030000004300000073dc00000074006a017c008301010074026a0164018301010074036a0164018301010074046a016401830101006402740564033c006404740564053c007406740564063c006407740564083c0064097405640a3c00640b7405640c3c00640d7405640e3c00640f740564103c006407641164126703740564133c0064096414640b6703740564153c006416641264176703740564183c006414640b641967037405641a3c006416641b641767037405641c3c00641d6407641e67037405641f3c006416641264176703740564203c006414640b64196703740564213c006400530029224e720100000046da0c626f73735f656e61626c656469e8030000da0b616d6f756e745f626f7373da0b6c6173745f72656465656de914000000da09706c61795f636f7374e901000000da0b72656465656d5f74696d65e905000000da0b6661696c5f61747461636be903000000da106368616e63655f696e7374616b696c6ce90f000000da0b6368616e63655f6c696665e923000000e95a000000da0a6974656d735f6c696665e902000000da0b6368617267655f6c696665e928000000e978000000da0c6974656d735f776561706f6ee908000000da0b737461745f776561706f6ee950000000da0c6974656d735f736869656c64e90a000000e932000000da0b737461745f736869656c64da0b6974656d735f736b696c6cda0a737461745f736b696c6c2907da0a5f5f6f70657261746f72da03736574da145f5f646973747269627574696f6e416d6f756e74da0f5f5f7a6f6d62696573416d6f756e74da105f5f7375727669766f72416d6f756e74da065f5f67616d65da036e6f772901720b000000a9007231000000da00da045f5f5f5f0c000000732800000000010a010a010a010a01080108010801080108010801080108010e010e010e010e010e010e010e0172330000006300000000000000000a0000000500000043000000730202000074006a017d007402640119007d0174036a047c0083017c016b057324740564028301820174036a067c0174076a0883007c008303010074027c0064036602050019006404370003003c007402640519007d0274027c026406660219007d0374027c0264076602050019006404370003003c0074027c0064036602050019006404370003003c0074027c036408660219007d0474027c036409660219007d0574027c00640a660219007d067c0464006b0872b6640b7d047c0564006b0872c2640b7d057c0664006b0872ce640b7d0674027c02640c660205001900640d370003003c0074096a0a6404640e83027d0774027c03640f6602190064046b0090017206640b7d046e1474027c03640f6602050019006404380003003c007c077402641019007c0418006b0190017256740b83007d087c0864116b089001724c640b74027c027c03641266033c006e08740c7c00830153006ea874096a0a6404640e83027d0974027c0064136602190064046b009001727a640b7d066e1474027c0064136602050019006404380003003c0074027c0364146602190064046b00900172a6640b7d056e1474027c0364146602050019006404380003003c007c077402641519007c0617007c0518006b01900172f674027c027c0364166603190064176b00900172ec740c7c0083015300740d7c00830153006e08740e7c00830153006400530029184e72100000007a1b4e6f7420656e6f7567682042616c616e636520746f20706c617921da067a6f6d6269657211000000da0667616d654964da087375727669766f72da0e7a6f6d626965735f61747461636bda0b6974656d5f736869656c64da0b6974656d5f776561706f6eda0a6974656d5f736b696c6c7201000000da0b67616d655f616d6f756e74720f000000e964000000da116974656d5f736869656c645f74696d6573721600000054da12686176655f7368657269665f736869656c64da106974656d5f736b696c6c5f74696d6573da116974656d5f776561706f6e5f74696d65737218000000da0d7375727669766f725f6c696665721c000000290fda03637478da0663616c6c6572722f000000da0863757272656e6379da0a62616c616e63655f6f66da0e417373657274696f6e4572726f72da0d7472616e736665725f66726f6d722a000000da03676574da0672616e646f6dda0772616e64696e74da085f5f736869656c64da0f5f5f6b696c6c5f7375727669766f72da0f5f5f61747461636b5f7a6f6d626965da0d5f5f6b696c6c5f7a6f6d626965290a72430000007210000000da0647414d454944da085355525649564f52da0b534849454c445f4954454dda0b574541504f4e5f4954454dda0c534b494c4c5f5a4f4d424945da1172616e646f6d466972737441747461636bda0d41545441434b5f534849454c44da1272616e646f6d5365636f6e6441747461636b723100000072310000007232000000da0f61747461636b5f7375727669766f7223000000735400000000020601080108010e011201140108010c01140114010c010c010c0108010401080104010801040114010c01120106021401120106010a0110020a020c0112010602140112010602140102011401140108020a02725700000063000000000000000004000000050000004300000073c000000074006a017d00740274037c0164016602190018006a0464026b05732474056403830182017403640419007d0174037c016405660219007d027c007c026b0272bc6406740274037c0164016602190018006a0414007d037c0364076b0472bc74066a077c037c0274086a09830083030100740274037c01640166023c0074037c0164086602050019007c03380003003c0074037c0164096602050019007c03370003003c0074037c0064096602050019007c03370003003c007c03530064005300290a4e720e00000072110000007a0f4e6f742043616e742072656465656d7235000000723600000072260000007201000000723b000000da0d7375727669766f725f6761696e290a724200000072430000007230000000722f000000da05686f757273724600000072440000007247000000722a000000724800000029047243000000724f0000007250000000da06414d4f554e54723100000072310000007232000000da0672656465656d58000000731a000000000206011e0108010c0108011601080112010c01140114011401725b0000002902da076163636f756e74da06616d6f756e74630200000000000000030000000500000043000000738600000074008300010074016a027403740483018301740564013c007405640119007d027c0074057c02640266023c00740474057c02640366023c007c0174057c02640466023c00640574057c027c00640666033c00640774057c00640866023c00640774057c00640966023c00740474057c00640a66023c00640b74057c02640c66023c0064005300290d4e72350000007236000000720e000000723b00000072130000007241000000720100000072380000007239000000da117375727669766f725f6578705f74696d657211000000da066176617461722906da0e5f5f6173736572745f6f776e6572da07686173686c6962da0473686133da037374727230000000722f0000002903725c000000725d000000724f000000723100000072310000007232000000da05737461727469000000731600000000020601120108010c010c010c010e010c010c010c0172640000002901725c00000063010000000000000004000000080000004300000073aa0000007400640119007d017400640219007d0274007c016403660219007d0374016a027400640219007c0374036a0483008303010074007c0364046602050019006405370003003c0074007c0364066602050019007c02370003003c0074007c0164076602050019007c02380003003c0074007c0164066602050019007c02370003003c0074007c0164086602050019006405370003003c007c0374056402640964097c027c01640a9c075300290b4e723500000072140000007236000000da0b7a6f6d6269655f6b696c6c72110000007258000000723b000000da0d7a6f6d6269655f61747461636b4629077236000000da0474696d65da06737461747573da0661747461636bda0c666174616c5f61747461636b725d00000072350000002906722f00000072440000007247000000722a000000724800000072300000002904725c000000724f000000da0b4641494c5f414d4f554e547250000000723100000072310000007232000000724e0000007800000073180000000001080108010c0116011401140114011401140106010601724e00000063010000000000000004000000080000004300000073ea0000007400640119007d0174007c016402660219007d0274007c017c0264036603050019006404380003003c006405740174007c0164066602190018006a02140074036407830114007d0374007c016408660219007c036b00726c74007c0164086602190074036407830114007d0374007c0164086602050019007c03380003003c007c0364096b04729a74046a057c037c0074066a0783008303010074007c01640a6602050019007c03370003003c0074007c00640a6602050019007c03370003003c0074007c01640b6602050019006404370003003c007c027401640c640d640e7c037c01640f9c07530029104e72350000007236000000724100000072110000007226000000720e0000007a04302e3230723b0000007201000000da0c7a6f6d626965735f6761696e7266000000da0a737465616c5f6c696665544629077236000000726700000072680000007269000000726a000000725d00000072350000002908722f00000072300000007259000000da07646563696d616c72440000007247000000722a00000072480000002904725c000000da0b4c4153545f47414d4549447250000000da0c535445414c5f414d4f554e54723100000072310000007232000000724d00000087000000731e000000000108010c0116021e011001140114010801120114011401140106010601724d00000063010000000000000006000000080000004300000073600100007400640119007d0174007c016402660219007d026403740174007c0164046602190018006a0214007d0374007c016405660219007d047c047c036b00724a74007c016405660219007d0374036a047405740183018301740064013c007400640119007d057c0074007c05640266023c007c047c03180074007c05640566023c00740174007c05640466023c0074007c0064066602050019006407370003003c0074007c006408660205001900740174007c0064096602190018006a02370003003c00740174007c00640966023c0074007c05640a6602050019007c03370003003c0074007c00640a6602050019007c03370003003c0074066a076407640b830274007c05640c66023c00640774007c057c00640d66033c00640e74007c00640f66023c00640e74007c00641066023c007c03640e6b049001724c74086a097c037c00740a6a0b8300830301007c0074016411641264127c037c0164139c07530029144e723500000072360000007226000000720e000000723b000000da0d7375727669766f725f74696d657211000000da0c7375727669766f725f657870725e0000007258000000e904000000725f000000723e000000720100000072380000007239000000da0c6e65775f7375727669766f725429077236000000726700000072680000007269000000726a000000725d0000007235000000290c722f000000723000000072590000007261000000726200000072630000007249000000724a00000072440000007247000000722a00000072480000002906725c000000726f00000072500000007270000000da0b4c4153545f414d4f554e54724f000000723100000072310000007232000000724c0000009a0000007334000000000108010c0116010c0108010c01120108010c0110010c011401120110010c011401140114010e010c010c010a01120106010601724c000000630000000000000000040000000400000043000000734c0000007400640119007d0074007c006402660219007d0174007c007c016403660319007d027c0264046b02724474016a026404640583027d037c0364046b027248640653006e04640753006400530029084e72350000007236000000723e0000007211000000721c00000054462903722f0000007249000000724a0000002904724f0000007250000000da0b484156455f534849454c44da0c72616e646f6d536869656c64723100000072310000007232000000724b000000b70000007310000000000108010c010e0108010c0108010602724b0000002901da046974656d630100000000000000040000000400000043000000734c00000074006a017d017402640119007d027402640219007d0374036a047c027c00190074056a0683007c01830301007c037c00190074027c01640366023c00640474027c01640566023c006400530029064e721b0000007222000000723900000072150000007240000000290772420000007243000000722f00000072440000007247000000722a0000007248000000290472780000007243000000da094c4953545f4954454dda0a4954454d5f5354415453723100000072310000007232000000da06776561706f6ec3000000730c000000000206010801080116011001727b000000630100000000000000040000000400000043000000734c00000074006a017d017402640119007d027402640219007d0374036a047c027c00190074056a0683007c01830301007c037c00190074027c01640366023c00640474027c01640566023c006400530029064e7224000000722700000072380000007215000000723d000000290772420000007243000000722f00000072440000007247000000722a00000072480000002904727800000072430000007279000000727a000000723100000072310000007232000000da06736869656c64cd000000730c000000000206010801080116011001727c000000630100000000000000040000000400000043000000734c00000074006a017d017402640119007d027402640219007d0374036a047c027c00190074056a0683007c01830301007c037c00190074027c01640166023c00640374027c01640466023c006400530029054e722800000072290000007215000000da116974656d735f736b696c6c5f74696d6573290772420000007243000000722f00000072440000007247000000722a00000072480000002904727800000072430000007279000000727a000000723100000072310000007232000000da05736b696c6cd7000000730c000000000206010801080116011001727e000000630100000000000000050000000500000043000000735200000074006a017d017402640119007d027402640219007d037402640319007d0474036a047c037c00190074056a0683007c018303010074027c02740764046603050019007c047c001900370003003c006400530029054e7235000000721b000000721d0000007241000000290872420000007243000000722f00000072440000007247000000722a0000007248000000725c000000290572780000007243000000724f0000007279000000da0b4348415247455f4c494645723100000072310000007232000000da046c696665e1000000730c0000000002060108010801080116017280000000630000000000000000040000000400000043000000739400000074006a017d007402640119007d0174027c016402660219007d027c007c026b02728c74026403190064046b08728674036a046405640683027d037c0364066b02728074027c0064076602050019006405370003003c0074026408190074027c01640966023c0074056a067402640819007c0074076a0883008303010064045300640a53007190640a53006e04640a530064005300290b4e72350000007236000000720c0000005472110000007273000000da09626f73735f6b696c6c720d000000725800000046290972420000007243000000722f0000007249000000724a00000072440000007247000000722a000000724800000029047243000000724f0000007250000000da0a72616e646f6d426f7373723100000072310000007232000000da0b61747461636b5f626f7373eb000000731e0000000002060108010c0108010c010c010801140110010c010a0104020602060272830000002901da086e69636b6e616d65630100000000000000030000000500000043000000738200000074006a017d0174027c00830164016b01731a740364028301820174027c00830164036b04732e740364048301820174046a057c006a0683006a0764056406830283017d02740864077c02660219000c00736674036408740964077c02660219001700830182017c0074087c01640966023c007c00740864077c0266023c0064005300290a4ee9190000007a214e69636b6e616d6520746f6f206c6f6e6720283235206368617273206d6178292e72010000007a134e69636b6e616d6520746f6f2073686f72742efa01207232000000da096e69636b6e616d65737a274120666f726d206f662074686973206e616d6520616c72656164792062656c6f6e677320746f207284000000290a72420000007243000000da036c656e724600000072610000007262000000da056c6f776572da077265706c616365722f000000da0862616c616e636573290372840000007243000000da096e616d65735f756964723100000072310000007232000000da0d7365745f6e69636b5f6e616d6501010000731200000000020601140114011601100106010c010c01728d000000630000000000000000000000000200000043000000731a00000074006a0174026a0383006b02731674046401830182016400530029024e7a174f6e6c79206f70657261746f722063616e2063616c6c21290572420000007243000000722a00000072480000007246000000723100000072310000007231000000723200000072600000000e010000730200000000017260000000291c7244000000da0448617368722f000000da085661726961626c65722a000000722c000000722d000000722e0000007249000000da047365656472630000007233000000da085f5f6578706f72747257000000725b000000da03696e747264000000724e000000724d000000724c000000724b000000727b000000727c000000727e00000072800000007283000000728d00000072600000007231000000723100000072310000007232000000da083c6d6f64756c653e01000000733800000008010e010c01040108010c010c0208030e17103510110601120e0e0f0e130e1d080c0601100906011009060110090601100910160601100c"
    },
    "__developer__": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
    "__owner__": null,
    "__submitted__": {
      "__time__": [2020, 10, 26, 0, 44, 6, 0]
    },
    "distributionAmount": 0,
    "game": {
      "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
        "item_shield": 0,
        "item_weapon": 0,
        "items_skill": 8,
        "items_skill_times": 3,
        "survivor_exp_time": {
          "__time__": [2020, 10, 26, 0, 44, 52, 0]
        },
        "survivor_gain": 20,
        "zombie": 8,
        "zombie_kill": 4
      },
      "amount_boss": 1000,
      "boss_enabled": false,
      "chance_instakill": 3,
      "chance_life": 15,
      "charge_life": [1, 2, 5],
      "d9f5883b321c823c6962529acf843e4185b6ad8f96b8bf69cfe908f430f6ddb6": {
        "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
          "survivor_life": 5
        },
        "avatar": 1,
        "game_amount": 1060,
        "last_redeem": {
          "__time__": [2020, 10, 26, 0, 44, 52, 0]
        },
        "survivor": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
        "survivor_gain": 20,
        "zombie_attack": 4,
        "zombies_attack": 4
      },
      "fail_attack": 5,
      "gameId": "d9f5883b321c823c6962529acf843e4185b6ad8f96b8bf69cfe908f430f6ddb6",
      "items_life": [20, 35, 90],
      "items_shield": [40, 80, 120],
      "items_skill": [40, 90, 120],
      "items_weapon": [40, 90, 120],
      "last_redeem": {
        "__time__": [2020, 10, 26, 0, 44, 6, 0]
      },
      "play_cost": 20,
      "redeem_time": 1,
      "stat_shield": [10, 20, 50],
      "stat_skill": [2, 5, 8],
      "stat_weapon": [2, 5, 8]
    },
    "operator": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
    "survivorAmount": 0,
    "zombiesAmount": 0
  },
  "con_survival_test2": {
    "__code__": "import currency\n__game = Hash(default_value=0, contract='con_survival_test2', name='game')\n__operator = Variable(contract='con_survival_test2', name='operator')\n__distributionAmount = Variable(contract='con_survival_test2', name=\n    'distributionAmount')\n__zombiesAmount = Variable(contract='con_survival_test2', name='zombiesAmount')\n__survivorAmount = Variable(contract='con_survival_test2', name=\n    'survivorAmount')\nrandom.seed()\n\n\ndef ____(vk: str):\n    __operator.set(vk)\n    __distributionAmount.set(0)\n    __zombiesAmount.set(0)\n    __survivorAmount.set(0)\n    __game['boss_enabled'] = False\n    __game['amount_boss'] = 1000\n    __game['last_redeem'] = now\n    __game['play_cost'] = 20\n    __game['redeem_time'] = 1\n    __game['fail_attack'] = 5\n    __game['chance_instakill'] = 3\n    __game['chance_life'] = 15\n    __game['items_life'] = [20, 35, 90]\n    __game['charge_life'] = [1, 2, 5]\n    __game['items_weapon'] = [40, 90, 120]\n    __game['stat_weapon'] = [2, 5, 8]\n    __game['items_shield'] = [40, 80, 120]\n    __game['stat_shield'] = [10, 20, 50]\n    __game['items_skill'] = [40, 90, 120]\n    __game['stat_skill'] = [2, 5, 8]\n\n\n@__export('con_survival_test2')\ndef attack_survivor():\n    caller = ctx.caller\n    play_cost = __game['play_cost']\n    assert currency.balance_of(caller\n        ) >= play_cost, 'Not enough Balance to play!'\n    currency.transfer_from(play_cost, __operator.get(), caller)\n    __game[caller, 'zombie'] += 1\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    __game[GAMEID, 'zombies_attack'] += 1\n    SHIELD_ITEM = __game[SURVIVOR, 'item_shield']\n    WEAPON_ITEM = __game[SURVIVOR, 'item_weapon']\n    SKILL_ZOMBIE = __game[caller, 'item_skill']\n    if SHIELD_ITEM is None:\n        SHIELD_ITEM = 0\n    if WEAPON_ITEM is None:\n        WEAPON_ITEM = 0\n    if SKILL_ZOMBIE is None:\n        SKILL_ZOMBIE = 0\n    __game[GAMEID, 'game_amount'] += 20\n    randomFirstAttack = random.randint(1, 100)\n    if __game[SURVIVOR, 'item_shield_times'] < 1:\n        SHIELD_ITEM = 0\n    else:\n        __game[SURVIVOR, 'item_shield_times'] -= 1\n    if randomFirstAttack <= __game['chance_instakill'] - SHIELD_ITEM:\n        ATTACK_SHIELD = __shield()\n        if ATTACK_SHIELD is True:\n            __game[GAMEID, SURVIVOR, 'have_sherif_shield'] = 0\n        else:\n            return __kill_survivor(caller)\n    else:\n        randomSecondAttack = random.randint(1, 100)\n        if __game[caller, 'item_skill_times'] < 1:\n            SKILL_ZOMBIE = 0\n        else:\n            __game[caller, 'item_skill_times'] -= 1\n        if __game[SURVIVOR, 'item_weapon_times'] < 1:\n            WEAPON_ITEM = 0\n        else:\n            __game[SURVIVOR, 'item_weapon_times'] -= 1\n        if randomFirstAttack <= __game['chance_life'\n            ] + SKILL_ZOMBIE - WEAPON_ITEM:\n            if __game[GAMEID, SURVIVOR, 'survivor_life'] < 2:\n                return __kill_survivor(caller)\n            else:\n                return __attack_zombie(caller)\n        else:\n            return __kill_zombie(caller)\n\n\n@__export('con_survival_test2')\ndef redeem():\n    caller = ctx.caller\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    assert (now - __game[GAMEID, 'last_redeem']).hours >= 1, 'Not Cant redeem'\n    if caller == SURVIVOR:\n        AMOUNT = 50 * (now - __game[GAMEID, 'last_redeem']).hours\n        if AMOUNT > 0:\n            currency.transfer_from(AMOUNT, SURVIVOR, __operator.get())\n            __game[GAMEID, 'last_redeem'] = now\n            __game[GAMEID, 'game_amount'] -= AMOUNT\n            __game[GAMEID, 'survivor_gain'] += AMOUNT\n            __game[caller, 'survivor_gain'] += AMOUNT\n            return AMOUNT\n\n\n@__export('con_survival_test2')\ndef start(account: str, amount: int):\n    __assert_owner()\n    __game['gameId'] = hashlib.sha3(str(now))\n    GAMEID = __game['gameId']\n    __game[GAMEID, 'survivor'] = account\n    __game[GAMEID, 'last_redeem'] = now\n    __game[GAMEID, 'game_amount'] = amount\n    __game[GAMEID, account, 'survivor_life'] = 5\n    __game[account, 'item_shield'] = 0\n    __game[account, 'item_weapon'] = 0\n    __game[account, 'survivor_exp_time'] = now\n    __game[GAMEID, 'avatar'] = 1\n\n\ndef __kill_zombie(account: str):\n    GAMEID = __game['gameId']\n    FAIL_AMOUNT = __game['fail_attack']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    currency.transfer_from(__game['fail_attack'], SURVIVOR, __operator.get())\n    __game[SURVIVOR, 'zombie_kill'] += 1\n    __game[SURVIVOR, 'survivor_gain'] += FAIL_AMOUNT\n    __game[GAMEID, 'game_amount'] -= FAIL_AMOUNT\n    __game[GAMEID, 'survivor_gain'] += FAIL_AMOUNT\n    return {'survivor': SURVIVOR, 'time': now, 'status': 'fail_attack',\n        'attack': False, 'fatal_attack': False, 'amount': FAIL_AMOUNT,\n        'gameId': GAMEID}\n\n\ndef __attack_zombie(account: str):\n    LAST_GAMEID = __game['gameId']\n    SURVIVOR = __game[LAST_GAMEID, 'survivor']\n    __game[LAST_GAMEID, SURVIVOR, 'survivor_life'] -= 1\n    STEAL_AMOUNT = 50 * (now - __game[LAST_GAMEID, 'last_redeem']\n        ).hours * decimal('0.20')\n    if __game[LAST_GAMEID, 'game_amount'] < STEAL_AMOUNT:\n        STEAL_AMOUNT = __game[LAST_GAMEID, 'game_amount'] * decimal('0.20')\n    __game[LAST_GAMEID, 'game_amount'] -= STEAL_AMOUNT\n    if STEAL_AMOUNT > 0:\n        currency.transfer_from(STEAL_AMOUNT, account, __operator.get())\n    __game[LAST_GAMEID, 'zombies_gain'] += STEAL_AMOUNT\n    __game[account, 'zombies_gain'] += STEAL_AMOUNT\n    return {'survivor': SURVIVOR, 'time': now, 'status': 'steal_life',\n        'attack': True, 'fatal_attack': False, 'amount': STEAL_AMOUNT,\n        'gameId': LAST_GAMEID}\n\n\ndef __kill_survivor(account: str):\n    LAST_GAMEID = __game['gameId']\n    SURVIVOR = __game[LAST_GAMEID, 'survivor']\n    STEAL_AMOUNT = 50 * (now - __game[LAST_GAMEID, 'last_redeem']).hours\n    LAST_AMOUNT = __game[LAST_GAMEID, 'game_amount']\n    if LAST_AMOUNT < STEAL_AMOUNT:\n        STEAL_AMOUNT = __game[LAST_GAMEID, 'game_amount']\n    __game['gameId'] = hashlib.sha3(str(now))\n    GAMEID = __game['gameId']\n    __game[GAMEID, 'survivor'] = account\n    __game[GAMEID, 'game_amount'] = LAST_AMOUNT - STEAL_AMOUNT\n    __game[GAMEID, 'last_redeem'] = now\n    __game[account, 'survivor_time'] += 1\n    __game[account, 'survivor_exp'] += (now - __game[account,\n        'survivor_exp_time']).hours\n    __game[account, 'survivor_exp_time'] = now\n    __game[GAMEID, 'survivor_gain'] += STEAL_AMOUNT\n    __game[account, 'survivor_gain'] += STEAL_AMOUNT\n    __game[GAMEID, 'avatar'] = random.randint(1, 4)\n    __game[GAMEID, account, 'have_sherif_shield'] = 1\n    __game[account, 'item_shield'] = 0\n    __game[account, 'item_weapon'] = 0\n    if STEAL_AMOUNT > 0:\n        currency.transfer_from(STEAL_AMOUNT, account, __operator.get())\n    return {'survivor': account, 'time': now, 'status': 'new_survivor',\n        'attack': True, 'fatal_attack': True, 'amount': STEAL_AMOUNT,\n        'gameId': LAST_GAMEID}\n\n\ndef __shield():\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    HAVE_SHIELD = __game[GAMEID, SURVIVOR, 'have_sherif_shield']\n    if HAVE_SHIELD == 1:\n        randomShield = random.randint(1, 2)\n        if randomShield == 1:\n            return True\n    else:\n        return False\n\n\n@__export('con_survival_test2')\ndef weapon(item: int):\n    caller = ctx.caller\n    LIST_ITEM = __game['items_life']\n    ITEM_STATS = __game['stat_weapon']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[caller, 'item_weapon'] = ITEM_STATS[item]\n    __game[caller, 'item_weapon_times'] = 3\n\n\n@__export('con_survival_test2')\ndef shield(item: int):\n    caller = ctx.caller\n    LIST_ITEM = __game['items_shield']\n    ITEM_STATS = __game['stat_shield']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[caller, 'item_shield'] = ITEM_STATS[item]\n    __game[caller, 'item_shield_times'] = 3\n\n\n@__export('con_survival_test2')\ndef skill(item: int):\n    caller = ctx.caller\n    LIST_ITEM = __game['items_skill']\n    ITEM_STATS = __game['stat_skill']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[caller, 'item_skill'] = ITEM_STATS[item]\n    __game[caller, 'item_skill_times'] = 3\n\n\n@__export('con_survival_test2')\ndef life(item: int):\n    caller = ctx.caller\n    GAMEID = __game['gameId']\n    LIST_ITEM = __game['items_life']\n    CHARGE_LIFE = __game['charge_life']\n    currency.transfer_from(LIST_ITEM[item], __operator.get(), caller)\n    __game[GAMEID, account, 'survivor_life'] += CHARGE_LIFE[item]\n\n\n@__export('con_survival_test2')\ndef attack_boss():\n    caller = ctx.caller\n    GAMEID = __game['gameId']\n    SURVIVOR = __game[GAMEID, 'survivor']\n    if caller == SURVIVOR:\n        if __game['boss_enabled'] is True:\n            randomBoss = random.randint(1, 4)\n            if randomBoss == 4:\n                __game[caller, 'boss_kill'] += 1\n                __game[GAMEID, 'survivor_gain'] = __game['amount_boss']\n                currency.transfer_from(__game['amount_boss'], caller,\n                    __operator.get())\n                return True\n            else:\n                return False\n        else:\n            return False\n    else:\n        return False\n\n\n@__export('con_survival_test2')\ndef set_nick_name(nickname: str):\n    caller = ctx.caller\n    assert len(nickname) <= 25, 'Nickname too long (25 chars max).'\n    assert len(nickname) > 0, 'Nickname too short.'\n    names_uid = hashlib.sha3(nickname.lower().replace(' ', ''))\n    assert not __game['nicknames', names_uid\n        ], 'A form of this name already belongs to ' + balances['nicknames',\n        names_uid]\n    __game[caller, 'nickname'] = nickname\n    __game['nicknames', names_uid] = nickname\n\n\ndef __assert_owner():\n    assert ctx.caller == __operator.get(), 'Only operator can call!'\n",
    "__compiled__": {
      "__bytes__": "e300000000000000000000000005000000400000007350010000640064016c005a00650164006402640364048d035a0265036402640564068d025a0465036402640764068d025a0565036402640864068d025a0665036402640964068d025a0765086a0983000100650a640a9c01640b640c84045a0b650c64028301640d640e840083015a0d650c64028301640f6410840083015a0e650c64028301650a650f64119c0264126413840483015a10650a64149c016415641684045a11650a64149c016417641884045a12650a64149c016419641a84045a13641b641c84005a14650c64028301650f641d9c01641e641f840483015a15650c64028301650f641d9c0164206421840483015a16650c64028301650f641d9c0164226423840483015a17650c64028301650f641d9c0164246425840483015a18650c6402830164266427840083015a19650c64028301650a64289c016429642a840483015a1a642b642c84005a1b64015300292de9000000004eda12636f6e5f737572766976616c5f7465737432da0467616d652903da0d64656661756c745f76616c7565da08636f6e7472616374da046e616d65da086f70657261746f72290272050000007206000000da12646973747269627574696f6e416d6f756e74da0d7a6f6d62696573416d6f756e74da0e7375727669766f72416d6f756e742901da02766b63010000000000000001000000030000004300000073dc00000074006a017c008301010074026a0164018301010074036a0164018301010074046a016401830101006402740564033c006404740564053c007406740564063c006407740564083c0064097405640a3c00640b7405640c3c00640d7405640e3c00640f740564103c006407641164126703740564133c0064096414640b6703740564153c006416641264176703740564183c006414640b641967037405641a3c006416641b641767037405641c3c00641d6407641e67037405641f3c006416641264176703740564203c006414640b64196703740564213c006400530029224e720100000046da0c626f73735f656e61626c656469e8030000da0b616d6f756e745f626f7373da0b6c6173745f72656465656de914000000da09706c61795f636f7374e901000000da0b72656465656d5f74696d65e905000000da0b6661696c5f61747461636be903000000da106368616e63655f696e7374616b696c6ce90f000000da0b6368616e63655f6c696665e923000000e95a000000da0a6974656d735f6c696665e902000000da0b6368617267655f6c696665e928000000e978000000da0c6974656d735f776561706f6ee908000000da0b737461745f776561706f6ee950000000da0c6974656d735f736869656c64e90a000000e932000000da0b737461745f736869656c64da0b6974656d735f736b696c6cda0a737461745f736b696c6c2907da0a5f5f6f70657261746f72da03736574da145f5f646973747269627574696f6e416d6f756e74da0f5f5f7a6f6d62696573416d6f756e74da105f5f7375727669766f72416d6f756e74da065f5f67616d65da036e6f772901720b000000a9007231000000da00da045f5f5f5f0c000000732800000000010a010a010a010a01080108010801080108010801080108010e010e010e010e010e010e010e0172330000006300000000000000000a000000050000004300000073ec01000074006a017d007402640119007d0174036a047c0083017c016b057324740564028301820174036a067c0174076a0883007c008303010074027c0064036602050019006404370003003c007402640519007d0274027c026406660219007d0374027c0264076602050019006404370003003c0074027c036408660219007d0474027c036409660219007d0574027c00640a660219007d067c0464006b0872a2640b7d047c0564006b0872ae640b7d057c0664006b0872ba640b7d0674027c02640c660205001900640d370003003c0074096a0a6404640e83027d0774027c03640f6602190064046b0072f0640b7d046e1474027c03640f6602050019006404380003003c007c077402641019007c0418006b0190017240740b83007d087c0864116b0890017236640b74027c027c03641266033c006e08740c7c00830153006ea874096a0a6404640e83027d0974027c0064136602190064046b0090017264640b7d066e1474027c0064136602050019006404380003003c0074027c0364146602190064046b0090017290640b7d056e1474027c0364146602050019006404380003003c007c077402641519007c0617007c0518006b01900172e074027c027c0364166603190064176b00900172d6740c7c0083015300740d7c00830153006e08740e7c00830153006400530029184e72100000007a1b4e6f7420656e6f7567682042616c616e636520746f20706c617921da067a6f6d6269657211000000da0667616d654964da087375727669766f72da0e7a6f6d626965735f61747461636bda0b6974656d5f736869656c64da0b6974656d5f776561706f6eda0a6974656d5f736b696c6c7201000000da0b67616d655f616d6f756e74720f000000e964000000da116974656d5f736869656c645f74696d6573721600000054da12686176655f7368657269665f736869656c64da106974656d5f736b696c6c5f74696d6573da116974656d5f776561706f6e5f74696d65737218000000da0d7375727669766f725f6c696665721c000000290fda03637478da0663616c6c6572722f000000da0863757272656e6379da0a62616c616e63655f6f66da0e417373657274696f6e4572726f72da0d7472616e736665725f66726f6d722a000000da03676574da0672616e646f6dda0772616e64696e74da085f5f736869656c64da0f5f5f6b696c6c5f7375727669766f72da0f5f5f61747461636b5f7a6f6d626965da0d5f5f6b696c6c5f7a6f6d626965290a72430000007210000000da0647414d454944da085355525649564f52da0b534849454c445f4954454dda0b574541504f4e5f4954454dda0c534b494c4c5f5a4f4d424945da1172616e646f6d466972737441747461636bda0d41545441434b5f534849454c44da1272616e646f6d5365636f6e6441747461636b723100000072310000007232000000da0f61747461636b5f7375727669766f7223000000735200000000020601080108010e011201140108010c0114010c010c010c0108010401080104010801040114010c01100106021401120106010a0110020a020c0112010602140112010602140102011401140108020a02725700000063000000000000000004000000050000004300000073c000000074006a017d007402640119007d0174027c016402660219007d02740374027c0164036602190018006a0464046b05733874056405830182017c007c026b0272bc6406740374027c0164036602190018006a0414007d037c0364076b0472bc74066a077c037c0274086a09830083030100740374027c01640366023c0074027c0164086602050019007c03380003003c0074027c0164096602050019007c03370003003c0074027c0064096602050019007c03370003003c007c03530064005300290a4e72350000007236000000720e00000072110000007a0f4e6f742043616e742072656465656d72260000007201000000723b000000da0d7375727669766f725f6761696e290a72420000007243000000722f0000007230000000da05686f757273724600000072440000007247000000722a000000724800000029047243000000724f0000007250000000da06414d4f554e54723100000072310000007232000000da0672656465656d57000000731a0000000002060108010c011e0108011601080112010c01140114011401725b0000002902da076163636f756e74da06616d6f756e74630200000000000000030000000500000043000000738600000074008300010074016a027403740483018301740564013c007405640119007d027c0074057c02640266023c00740474057c02640366023c007c0174057c02640466023c00640574057c027c00640666033c00640774057c00640866023c00640774057c00640966023c00740474057c00640a66023c00640b74057c02640c66023c0064005300290d4e72350000007236000000720e000000723b00000072130000007241000000720100000072380000007239000000da117375727669766f725f6578705f74696d657211000000da066176617461722906da0e5f5f6173736572745f6f776e6572da07686173686c6962da0473686133da037374727230000000722f0000002903725c000000725d000000724f000000723100000072310000007232000000da05737461727468000000731600000000020601120108010c010c010c010e010c010c010c0172640000002901725c00000063010000000000000004000000080000004300000073960000007400640119007d017400640219007d0274007c016403660219007d0374016a027400640219007c0374036a0483008303010074007c0364046602050019006405370003003c0074007c0364066602050019007c02370003003c0074007c0164076602050019007c02380003003c0074007c0164066602050019007c02370003003c007c0374056402640864087c027c0164099c075300290a4e723500000072140000007236000000da0b7a6f6d6269655f6b696c6c72110000007258000000723b0000004629077236000000da0474696d65da06737461747573da0661747461636bda0c666174616c5f61747461636b725d00000072350000002906722f00000072440000007247000000722a000000724800000072300000002904725c000000724f000000da0b4641494c5f414d4f554e547250000000723100000072310000007232000000724e0000007700000073160000000001080108010c011601140114011401140106010601724e00000063010000000000000004000000080000004300000073d60000007400640119007d0174007c016402660219007d0274007c017c0264036603050019006404380003003c006405740174007c0164066602190018006a02140074036407830114007d0374007c016408660219007c036b00726c74007c0164086602190074036407830114007d0374007c0164086602050019007c03380003003c007c0364096b04729a74046a057c037c0074066a0783008303010074007c01640a6602050019007c03370003003c0074007c00640a6602050019007c03370003003c007c027401640b640c640d7c037c01640e9c075300290f4e72350000007236000000724100000072110000007226000000720e0000007a04302e3230723b0000007201000000da0c7a6f6d626965735f6761696eda0a737465616c5f6c6966655446290772360000007266000000726700000072680000007269000000725d00000072350000002908722f00000072300000007259000000da07646563696d616c72440000007247000000722a00000072480000002904725c000000da0b4c4153545f47414d4549447250000000da0c535445414c5f414d4f554e54723100000072310000007232000000724d00000085000000731c000000000108010c0116021e01100114011401080112011401140106010601724d00000063010000000000000006000000080000004300000073600100007400640119007d0174007c016402660219007d026403740174007c0164046602190018006a0214007d0374007c016405660219007d047c047c036b00724a74007c016405660219007d0374036a047405740183018301740064013c007400640119007d057c0074007c05640266023c007c047c03180074007c05640566023c00740174007c05640466023c0074007c0064066602050019006407370003003c0074007c006408660205001900740174007c0064096602190018006a02370003003c00740174007c00640966023c0074007c05640a6602050019007c03370003003c0074007c00640a6602050019007c03370003003c0074066a076407640b830274007c05640c66023c00640774007c057c00640d66033c00640e74007c00640f66023c00640e74007c00641066023c007c03640e6b049001724c74086a097c037c00740a6a0b8300830301007c0074016411641264127c037c0164139c07530029144e723500000072360000007226000000720e000000723b000000da0d7375727669766f725f74696d657211000000da0c7375727669766f725f657870725e0000007258000000e904000000725f000000723e000000720100000072380000007239000000da0c6e65775f7375727669766f7254290772360000007266000000726700000072680000007269000000725d0000007235000000290c722f000000723000000072590000007261000000726200000072630000007249000000724a00000072440000007247000000722a00000072480000002906725c000000726e0000007250000000726f000000da0b4c4153545f414d4f554e54724f000000723100000072310000007232000000724c000000970000007334000000000108010c0116010c0108010c01120108010c0110010c011401120110010c011401140114010e010c010c010a01120106010601724c000000630000000000000000040000000400000043000000734c0000007400640119007d0074007c006402660219007d0174007c007c016403660319007d027c0264046b02724474016a026404640583027d037c0364046b027248640653006e04640753006400530029084e72350000007236000000723e0000007211000000721c00000054462903722f0000007249000000724a0000002904724f0000007250000000da0b484156455f534849454c44da0c72616e646f6d536869656c64723100000072310000007232000000724b000000b40000007310000000000108010c010e0108010c0108010602724b0000002901da046974656d630100000000000000040000000400000043000000734c00000074006a017d017402640119007d027402640219007d0374036a047c027c00190074056a0683007c01830301007c037c00190074027c01640366023c00640474027c01640566023c006400530029064e721b0000007222000000723900000072150000007240000000290772420000007243000000722f00000072440000007247000000722a0000007248000000290472770000007243000000da094c4953545f4954454dda0a4954454d5f5354415453723100000072310000007232000000da06776561706f6ec0000000730c000000000206010801080116011001727a000000630100000000000000040000000400000043000000734c00000074006a017d017402640119007d027402640219007d0374036a047c027c00190074056a0683007c01830301007c037c00190074027c01640366023c00640474027c01640566023c006400530029064e7224000000722700000072380000007215000000723d000000290772420000007243000000722f00000072440000007247000000722a000000724800000029047277000000724300000072780000007279000000723100000072310000007232000000da06736869656c64ca000000730c000000000206010801080116011001727b000000630100000000000000040000000400000043000000734c00000074006a017d017402640119007d027402640219007d0374036a047c027c00190074056a0683007c01830301007c037c00190074027c01640366023c00640474027c01640566023c006400530029064e72280000007229000000723a0000007215000000723f000000290772420000007243000000722f00000072440000007247000000722a000000724800000029047277000000724300000072780000007279000000723100000072310000007232000000da05736b696c6cd4000000730c000000000206010801080116011001727c000000630100000000000000050000000500000043000000735200000074006a017d017402640119007d027402640219007d037402640319007d0474036a047c037c00190074056a0683007c018303010074027c02740764046603050019007c047c001900370003003c006400530029054e7235000000721b000000721d0000007241000000290872420000007243000000722f00000072440000007247000000722a0000007248000000725c000000290572770000007243000000724f0000007278000000da0b4348415247455f4c494645723100000072310000007232000000da046c696665de000000730c000000000206010801080108011601727e000000630000000000000000040000000400000043000000739400000074006a017d007402640119007d0174027c016402660219007d027c007c026b02728c74026403190064046b08728674036a046405640683027d037c0364066b02728074027c0064076602050019006405370003003c0074026408190074027c01640966023c0074056a067402640819007c0074076a0883008303010064045300640a53007190640a53006e04640a530064005300290b4e72350000007236000000720c0000005472110000007272000000da09626f73735f6b696c6c720d000000725800000046290972420000007243000000722f0000007249000000724a00000072440000007247000000722a000000724800000029047243000000724f0000007250000000da0a72616e646f6d426f7373723100000072310000007232000000da0b61747461636b5f626f7373e8000000731e0000000002060108010c0108010c010c010801140110010c010a0104020602060272810000002901da086e69636b6e616d65630100000000000000030000000500000043000000738200000074006a017d0174027c00830164016b01731a740364028301820174027c00830164036b04732e740364048301820174046a057c006a0683006a0764056406830283017d02740864077c02660219000c00736674036408740964077c02660219001700830182017c0074087c01640966023c007c00740864077c0266023c0064005300290a4ee9190000007a214e69636b6e616d6520746f6f206c6f6e6720283235206368617273206d6178292e72010000007a134e69636b6e616d6520746f6f2073686f72742efa01207232000000da096e69636b6e616d65737a274120666f726d206f662074686973206e616d6520616c72656164792062656c6f6e677320746f207282000000290a72420000007243000000da036c656e724600000072610000007262000000da056c6f776572da077265706c616365722f000000da0862616c616e636573290372820000007243000000da096e616d65735f756964723100000072310000007232000000da0d7365745f6e69636b5f6e616d65fe000000731200000000020601140114011601100106010c010c01728b000000630000000000000000000000000200000043000000731a00000074006a0174026a0383006b02731674046401830182016400530029024e7a174f6e6c79206f70657261746f722063616e2063616c6c21290572420000007243000000722a00000072480000007246000000723100000072310000007231000000723200000072600000000b010000730200000000017260000000291c7244000000da0448617368722f000000da085661726961626c65722a000000722c000000722d000000722e0000007249000000da047365656472630000007233000000da085f5f6578706f72747257000000725b000000da03696e747264000000724e000000724d000000724c000000724b000000727a000000727b000000727c000000727e0000007281000000728b00000072600000007231000000723100000072310000007232000000da083c6d6f64756c653e01000000733a00000008010e010c01040108010c010401080108030e17103410110601120e0e0e0e120e1d080c0601100906011009060110090601100910160601100c"
    },
    "__developer__": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
    "__owner__": null,
    "__submitted__": {
      "__time__": [2020, 10, 26, 0, 55, 33, 0]
    },
    "distributionAmount": 0,
    "game": {
      "07ddb8737e80e2e34abe8cc50c165b6825e0e9c1c93e0871d5f344ae0161164e": {
        "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
          "survivor_life": 5
        },
        "avatar": 1,
        "game_amount": 1035,
        "last_redeem": {
          "__time__": [2020, 10, 26, 0, 56, 19, 0]
        },
        "survivor": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
        "survivor_gain": 5,
        "zombies_attack": 2
      },
      "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
        "item_shield": 0,
        "item_skill": 8,
        "item_skill_times": 0,
        "item_weapon": 0,
        "survivor_exp": 0,
        "survivor_exp_time": {
          "__time__": [2020, 10, 26, 1, 9, 3, 0]
        },
        "survivor_gain": 20,
        "survivor_time": 2,
        "zombie": 6,
        "zombie_kill": 4
      },
      "8f70570f544347fade07ec15565c89dbc18ad46431090d65f7e86f4349a8b9c9": {
        "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
          "have_sherif_shield": 1
        },
        "avatar": 3,
        "game_amount": 1070,
        "last_redeem": {
          "__time__": [2020, 10, 26, 0, 57, 8, 0]
        },
        "survivor": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
        "survivor_gain": 5,
        "zombies_attack": 2
      },
      "amount_boss": 1000,
      "b25e9abfbe87bf4b8c33e1d98285100d6a59ea2acbadf16f7c96559759860662": {
        "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
          "have_sherif_shield": 1
        },
        "avatar": 3,
        "game_amount": 1100,
        "last_redeem": {
          "__time__": [2020, 10, 26, 1, 9, 3, 0]
        },
        "survivor": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
        "survivor_gain": 10,
        "zombies_attack": 2
      },
      "boss_enabled": false,
      "chance_instakill": 3,
      "chance_life": 15,
      "charge_life": [1, 2, 5],
      "fail_attack": 5,
      "gameId": "b25e9abfbe87bf4b8c33e1d98285100d6a59ea2acbadf16f7c96559759860662",
      "items_life": [20, 35, 90],
      "items_shield": [40, 80, 120],
      "items_skill": [40, 90, 120],
      "items_weapon": [40, 90, 120],
      "last_redeem": {
        "__time__": [2020, 10, 26, 0, 55, 33, 0]
      },
      "play_cost": 20,
      "redeem_time": 1,
      "stat_shield": [10, 20, 50],
      "stat_skill": [2, 5, 8],
      "stat_weapon": [2, 5, 8]
    },
    "operator": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
    "survivorAmount": 0,
    "zombiesAmount": 0
  }
}
```


---
### Get state of variable
**`get` `/current/all/:contractName/:variableName`**

Get current state value of a specific variable of contract

> Example
> /current/all/con_survival_test/game

#### Response
```json
{
  "con_survival_test": {
    "game": {
      "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
        "item_shield": 0,
        "item_weapon": 0,
        "items_skill": 8,
        "items_skill_times": 3,
        "survivor_exp_time": {
          "__time__": [2020, 10, 26, 0, 44, 52, 0]
        },
        "survivor_gain": 20,
        "zombie": 8,
        "zombie_kill": 4
      },
      "amount_boss": 1000,
      "boss_enabled": false,
      "chance_instakill": 3,
      "chance_life": 15,
      "charge_life": [1, 2, 5],
      "d9f5883b321c823c6962529acf843e4185b6ad8f96b8bf69cfe908f430f6ddb6": {
        "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae": {
          "survivor_life": 5
        },
        "avatar": 1,
        "game_amount": 1060,
        "last_redeem": {
          "__time__": [2020, 10, 26, 0, 44, 52, 0]
        },
        "survivor": "757c03fef2a1c041ea0173081e19c4e908b77b7e0bbd87f7bb06402cdc7983ae",
        "survivor_gain": 20,
        "zombie_attack": 4,
        "zombies_attack": 4
      },
      "fail_attack": 5,
      "gameId": "d9f5883b321c823c6962529acf843e4185b6ad8f96b8bf69cfe908f430f6ddb6",
      "items_life": [20, 35, 90],
      "items_shield": [40, 80, 120],
      "items_skill": [40, 90, 120],
      "items_weapon": [40, 90, 120],
      "last_redeem": {
        "__time__": [2020, 10, 26, 0, 44, 6, 0]
      },
      "play_cost": 20,
      "redeem_time": 1,
      "stat_shield": [10, 20, 50],
      "stat_skill": [2, 5, 8],
      "stat_weapon": [2, 5, 8]
    }
  }
}
```


---
### Get state of key
**`get` `/current/all/:contractName/:variableName/:key`**

Get current state value of a specific key of variable of contract

> Example
> /current/all/con_survival_test/game/amount_boss

#### Response

```json
{
  "con_survival_test": {
    "game": {
      "amount_boss": 1000
    }
  }
}
```

## Transaction Endpoints
### Get transaction information
**`get` `/tx`**

Get Transaction Info by txhash/uid. If both tx hash and tx uid are provided, it will return the tx info by tx hash.

> Example
> /tx?hash=f3e86d58ef11b5e9a5308e8740107dc256ef5adc0e8369d8c3cb80309054fa72&uid=00000066000.00000.00000

#### Response

```json
{
  "affectedContractsList": ["currency"],
  "affectedVariablesList": ["currency.balances"],
  "affectedRootKeysList": ["currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9", "currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41"],
  "affectedRawKeysList": ["currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9", "currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41"],
  "tx_uid": "000000066475.00000.00000",
  "blockNum": 66475,
  "state_changes_obj": {
    "currency": {
      "balances": {
        "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9": {
          "__fixed__": "2.01538460846156221"
        },
        "b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41": {
          "__fixed__": "8.5384615384615433"
        }
      }
    }
  },
  "subBlockNum": 0,
  "timestamp": 1652793546000,
  "txHash": "f3e86d58ef11b5e9a5308e8740107dc256ef5adc0e8369d8c3cb80309054fa72",
  "txIndex": 0,
  "txInfo": {
    "hash": "f3e86d58ef11b5e9a5308e8740107dc256ef5adc0e8369d8c3cb80309054fa72",
    "result": "None",
    "stamps_used": 19,
    "state": [{
      "key": "currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9",
      "value": {
        "__fixed__": "2.01538460846156221"
      }
    }, {
      "key": "currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41",
      "value": {
        "__fixed__": "8.5384615384615433"
      }
    }],
    "status": 0,
    "transaction": {
      "metadata": {
        "signature": "951b2ad805ea829a0bf1e18d7ea0aeb040c701334fef4b86a4ade87dbec72f6fcc1d16001bf3bca13c7757bb19f8c3765a41910fd04a16a7942ac5eb92098400",
        "timestamp": 1652793546
      },
      "payload": {
        "contract": "currency",
        "function": "transfer",
        "kwargs": {
          "amount": {
            "__fixed__": "1.0"
          },
          "to": "b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41"
        },
        "nonce": 825,
        "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
        "sender": "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9",
        "stamps_supplied": 26
      }
    }
  }
}
```

## Statistics Endpoints
### Get latest block number
**`get` `/latest_block`**

Get the lastest block number

> Example
> /latest_block

#### Response

```json
{
    "latest_block":66894
}
```

---
### Get latest processed number
**`get` `/latest_processed_block`**

Get the latest processed block number

> Example
> /latest_processed_block

#### Response

```json
{
  "latest_processed_block": 66894
}
```

---
### Get latest synced number
**`get` `/latest_synced_block`**

Get the latest synced block number

> Example
> /latest_synced_block

#### Response

```json
{
  "latest_synced_block": 66894
}
```


---
### Get synced stats
**`get` `/synced_stats`**

Get the synced stats

> Example
> /synced_stats

#### Response

```json
{
  "updated": true,
  "synced": true,
  "latest_processed_block": 66894,
  "latest_synced_block": 66894,
  "latest_block": 66894
}
```