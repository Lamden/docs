---
id: masternode_api
title: Lamden Masternode Webserver REST API
sidebar_label: Masternode REST API
---

# Lamden Masternode Webserver REST API


Lamden Masternodes run a webserver which allows anyone to easily interface with the Lamden Blockchain.  

The webserver provides direct access to the network's state and is the single entry point for submitting transactions.

- List of <u>[Lamden Masternodes](/blockchain/current_masternodes)</u>.

- Webserver <u>[sorce code](https://github.com/Lamden/lamden/blob/master/lamden/nodes/masternode/webserver.py)</u>.

## General Routes
### check masternode status
**`GET` `/ping`**

Check if a masternode is online

> Example
> [https://masternode-01.lamden.io/ping](https://masternode-01.lamden.io/ping)

#### JSON response
```json
{
    "status": "online"
}
```

---
### get masternode id
**`GET` `/id`**

Get the vk of a masternode

> Example
> [https://masternode-01.lamden.io/id](https://masternode-01.lamden.io/id)

#### JSON response
```json
{
    "verifying_key": "5b09493df6c18d17cc883ebce54fcb1f5afbd507533417fe32c006009a9c3c4a"
}
```

### get contract variable value
**`GET` `/contracts/:contract_name/:variable_name?key=:key_value`**

Returns the `Current State` value for a key in a hash variable.

- floats are retunred as `fixed objects` with a `__fixed__` key and a string value representing the float.
- all other values are returned as they are

> Example
> [https://masternode-01.lamden.io/contracts/currency/balances?key=0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345](https://masternode-01.lamden.io/contracts/currency/balances?key=0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345)

#### JSON response
```json
{
    "value": {"__fixed__":"272966785.977944444444444444444444443506"}}
}
```

---
### get network constitution
**`GET` `/constitution`**

The ids of all `masternodes` and `delegates` currently participating in consensus.

> Example
> [https://masternode-01.lamden.io/constitution](https://masternode-01.lamden.io/constitution)

#### JSON response
```json
{
   "masternodes":[
      "5b09493df6c18d17cc883ebce54fcb1f5afbd507533417fe32c006009a9c3c4a",
      "a2ce0217d08e0cf5718d36fc3b7b59d7bb5e4c6e3140a04e02da1d28a6fea56f"
   ],
   "delegates":[
      "2bdb7a98d65a469dacd93873ce3f8b6bb5284414348cab17ade738f913d35e32",
      "555100f02ef3bdc469e866140c35955e137624f4a1284bbcb999cd7fb576c869",
      "207c4da519414b5330df945c3c5405ba6e0a7b6ddf576256cb6f6aca43b8a8ee",
      "b0fc27299da14bc08834df9c70d73074f3e511a5a91321d4fa413f3401144918"
   ]
}
```

## State Routes
### get contracts
**`GET` `/contracts`**

Returns all the smartcontracts on the Lamden blockchain

> Example
> [https://masternode-01.lamden.io/contracts](https://masternode-01.lamden.io/contracts)

#### JSON response
```json
{
    "contracts": ["contract_1", "contract_2", "contract_3", "etc..." ]
}
```

---
### get contract code
**`GET` `/contracts/:contract_name`**

Returns a contract's python code.

> Example
> [https://masternode-01.lamden.io/contracts/currency](https://masternode-01.lamden.io/contracts/currency)

#### JSON response
```json
{
    "name": "currency",
    "code": "__balances = Hash(default_value=0, contract='currency', name='balances')\n\n\ndef ____(vk: str):\n    __balances[vk] = 288090567\n\n\n@__export('currency')\ndef transfer(amount: float, to: str):\n    assert amount > 0, 'Cannot send negative balances!'\n    sender = ctx.caller\n    assert __balances[sender] >= amount, 'Not enough coins to send!'\n    __balances[sender] -= amount\n    __balances[to] += amount\n\n\n@__export('currency')\ndef balance_of(account: str):\n    return __balances[account]\n\n\n@__export('currency')\ndef allowance(owner: str, spender: str):\n    return __balances[owner, spender]\n\n\n@__export('currency')\ndef approve(amount: float, to: str):\n    assert amount > 0, 'Cannot send negative balances!'\n    sender = ctx.caller\n    __balances[sender, to] += amount\n    return __balances[sender, to]\n\n\n@__export('currency')\ndef transfer_from(amount: float, to: str, main_account: str):\n    assert amount > 0, 'Cannot send negative balances!'\n    sender = ctx.caller\n    assert __balances[main_account, sender\n        ] >= amount, 'Not enough coins approved to send! You have {} and are trying to spend {}'.format(\n        __balances[main_account, sender], amount)\n    assert __balances[main_account] >= amount, 'Not enough coins to send!'\n    __balances[main_account, sender] -= amount\n    __balances[main_account] -= amount\n    __balances[to] += amount\n"
}
```

---
### get contract methods
**`GET` `/contracts/:contract_name/methods`**

Returns all `exported methods` from a smartcontract including each method's argument `name` and `type`.

> Example
> [https://masternode-01.lamden.io/contracts/currency/methods](https://masternode-01.lamden.io/contracts/currency/methods)

#### JSON response
```json
{
    "methods":[
      {
         "name":"transfer",
         "arguments":[
            {
               "name":"amount",
               "type":"float"
            },
            {
               "name":"to",
               "type":"str"
            }
         ]
      },
      {
         "name":"balance_of",
         "arguments":[
            {
               "name":"account",
               "type":"str"
            }
         ]
      },
      {
         "name":"allowance",
         "arguments":[
            {
               "name":"owner",
               "type":"str"
            },
            {
               "name":"spender",
               "type":"str"
            }
         ]
      },
      {
         "name":"approve",
         "arguments":[
            {
               "name":"amount",
               "type":"float"
            },
            {
               "name":"to",
               "type":"str"
            }
         ]
      },
      {
         "name":"transfer_from",
         "arguments":[
            {
               "name":"amount",
               "type":"float"
            },
            {
               "name":"to",
               "type":"str"
            },
            {
               "name":"main_account",
               "type":"str"
            }
         ]
      }
   ]
}
```

---
### get contract variables
**`GET` `/contracts/:contract_name/variables`**

Returns all state `variables` and `hashes` defined in a smart contract

> Example
> [https://masternode-01.lamden.io/contracts/currency/variables](https://masternode-01.lamden.io/contracts/currency/variables)

#### JSON response
```json
{
    "variables":[],
   "hashes":["balances"]
}
```


## Block Routes
### get latest block
**`GET` `/latest_block`**

Get block information from the `latest block`

> Example
> [https://masternode-01.lamden.io/latest_block](https://masternode-01.lamden.io/latest_block)

#### JSON response
```json
{
  "hash": "ee5cb35d6b2cf1521f36c74272d3585a80651654209cd9d551af5ec791051c7c",
  "number": 1376,
  "previous": "cfc03a5b34187cd5e71cdd0b058e63b1a9858ed41a2310b230a3f89cc8c3d79d",
  "subblocks": [
    {
      "input_hash": "aff0f58a722fcf1d886d7bd6159237e82011bc119337f24d4c4a8902750a27fd",
      "merkle_leaves": [
        "12e177b715c06a39b7ac547024b7a9fbd1688dbfd7e97c6cd9c4f1e047bfd731"
      ],
      "signatures": [
        {
          "signature": "fad95c91b396aa16d0cb5e835ab54e02fda3eceee701f2b40d6330908287643036d94089a7226b9637a3e79d2c9ae556484e5b1d8fea81f90a4bfc69dc970809",
          "signer": "207c4da519414b5330df945c3c5405ba6e0a7b6ddf576256cb6f6aca43b8a8ee"
        },
        {
          "signature": "fef7889d2751625294bb7796840913036941fee2bb8c2b7ca83e369145bc0c5d575b2bdcd82e2865ca706cb4610202f5b3dd170a9f8757b64190859d52a35400",
          "signer": "555100f02ef3bdc469e866140c35955e137624f4a1284bbcb999cd7fb576c869"
        },
        {
          "signature": "c54cd4bb68733597da1e36ac7dffddcd849aac1aeacbc04fc799edbefd329064fa0e23e4c24aa30cc40039e520085abe0dec44a8f92a09d09916a83cb96d5906",
          "signer": "b0fc27299da14bc08834df9c70d73074f3e511a5a91321d4fa413f3401144918"
        }
      ],
      "subblock": 0,
      "transactions": [
        {
          "hash": "0635f6bb38f9a807d2f4dd00723dfa80ff248593f5223cd5c3058645ac624329",
          "result": "None",
          "stamps_used": 19,
          "state": [
            {
              "key": "currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
              "value": {
                "__fixed__": "272976757.20050000"
              }
            },
            {
              "key": "currency.balances:3fa3da8a3dc59e712c3039f3811bfae52ed2fcb17dbeef62f555bd993ef9cfc2",
              "value": 1
            }
          ],
          "status": 0,
          "transaction": {
            "metadata": {
              "signature": "6f24ef39426e9823ce53a7582a936e1de2b70acd0e2f4882a901aaff3c31c36575e952f631be749b9156c0ab6a2e5ba8c400d64ed76eb630e07bc9f70fd37c05",
              "timestamp": 1601337869
            },
            "payload": {
              "contract": "currency",
              "function": "transfer",
              "kwargs": {
                "amount": 1,
                "to": "3fa3da8a3dc59e712c3039f3811bfae52ed2fcb17dbeef62f555bd993ef9cfc2"
              },
              "nonce": 16,
              "processor": "5b09493df6c18d17cc883ebce54fcb1f5afbd507533417fe32c006009a9c3c4a",
              "sender": "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
              "stamps_supplied": 100
            }
          }
        }
      ]
    },
    {
      "input_hash": "aff0f58a722fcf1d886d7bd6159237e82011bc119337f24d4c4a8902750a27fd",
      "merkle_leaves": [
        "aa0a20ded6256455ff0d7de0bd4dec43087ccff491b66174a862ca1b536601f0"
      ],
      "signatures": [
        {
          "signature": "e6cd3738d8c35e0c22ebf96f8bb40b9cdcfa01c23d998689e9e2ed550f880aa74dd83ccfe61801fea054636fe7d4434eb82b4890cbe9bd7957aacdb174de0501",
          "signer": "207c4da519414b5330df945c3c5405ba6e0a7b6ddf576256cb6f6aca43b8a8ee"
        },
        {
          "signature": "6989989dbfb0ce80a01b35f00157a7de058cd5f866ad79d0c7b6fb32cd6b70f0e408ff7bd283e13eb0c63a0784269ef563370bc9a9441d0220fa4e4552aff20c",
          "signer": "555100f02ef3bdc469e866140c35955e137624f4a1284bbcb999cd7fb576c869"
        },
        {
          "signature": "9adf1eb0898c9dde1344ca809f543212aea367ede9a51dcbdf6e9d8963bcee2a1eb84cd74f266d8a487557c31a44ca9452f7e2ab8f3d134b94c9800703828b08",
          "signer": "b0fc27299da14bc08834df9c70d73074f3e511a5a91321d4fa413f3401144918"
        }
      ],
      "subblock": 1,
      "transactions": [
        
      ]
    }
  ]
}
```

---
### get latest block number
**`GET` `/latest_block_num`**

Get the lastest `block number`

> Example
> [https://masternode-01.lamden.io/latest_block_num](https://masternode-01.lamden.io/latest_block_num)

#### JSON response
```json
{
    "latest_block_number": 3239
}
```

---
### get latest block hash
**`GET` `/latest_block_hash`**

Get the `hash` of the latest block

> Example
> [https://masternode-01.lamden.io/latest_block_hash](https://masternode-01.lamden.io/latest_block_hash)

#### JSON response
```json
{
    "latest_block_hash": "dedf038aa5c349f66a5101780cf99a18f252d7a219fd8693898bdaec9d8f35a7"
}
```

---
### get specific block details
**`GET` `/blocks?num=:block_num`**

Get information from a specific block

> Example
> [https://masternode-01.lamden.io/blocks?num=1376](https://masternode-01.lamden.io/blocks?num=1376)

#### JSON response
```json
{
  "hash": "ee5cb35d6b2cf1521f36c74272d3585a80651654209cd9d551af5ec791051c7c",
  "number": 1376,
  "previous": "cfc03a5b34187cd5e71cdd0b058e63b1a9858ed41a2310b230a3f89cc8c3d79d",
  "subblocks": [
    {
      "input_hash": "aff0f58a722fcf1d886d7bd6159237e82011bc119337f24d4c4a8902750a27fd",
      "merkle_leaves": [
        "12e177b715c06a39b7ac547024b7a9fbd1688dbfd7e97c6cd9c4f1e047bfd731"
      ],
      "signatures": [
        {
          "signature": "fad95c91b396aa16d0cb5e835ab54e02fda3eceee701f2b40d6330908287643036d94089a7226b9637a3e79d2c9ae556484e5b1d8fea81f90a4bfc69dc970809",
          "signer": "207c4da519414b5330df945c3c5405ba6e0a7b6ddf576256cb6f6aca43b8a8ee"
        },
        {
          "signature": "fef7889d2751625294bb7796840913036941fee2bb8c2b7ca83e369145bc0c5d575b2bdcd82e2865ca706cb4610202f5b3dd170a9f8757b64190859d52a35400",
          "signer": "555100f02ef3bdc469e866140c35955e137624f4a1284bbcb999cd7fb576c869"
        },
        {
          "signature": "c54cd4bb68733597da1e36ac7dffddcd849aac1aeacbc04fc799edbefd329064fa0e23e4c24aa30cc40039e520085abe0dec44a8f92a09d09916a83cb96d5906",
          "signer": "b0fc27299da14bc08834df9c70d73074f3e511a5a91321d4fa413f3401144918"
        }
      ],
      "subblock": 0,
      "transactions": [
        {
          "hash": "0635f6bb38f9a807d2f4dd00723dfa80ff248593f5223cd5c3058645ac624329",
          "result": "None",
          "stamps_used": 19,
          "state": [
            {
              "key": "currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
              "value": {
                "__fixed__": "272976757.20050000"
              }
            },
            {
              "key": "currency.balances:3fa3da8a3dc59e712c3039f3811bfae52ed2fcb17dbeef62f555bd993ef9cfc2",
              "value": 1
            }
          ],
          "status": 0,
          "transaction": {
            "metadata": {
              "signature": "6f24ef39426e9823ce53a7582a936e1de2b70acd0e2f4882a901aaff3c31c36575e952f631be749b9156c0ab6a2e5ba8c400d64ed76eb630e07bc9f70fd37c05",
              "timestamp": 1601337869
            },
            "payload": {
              "contract": "currency",
              "function": "transfer",
              "kwargs": {
                "amount": 1,
                "to": "3fa3da8a3dc59e712c3039f3811bfae52ed2fcb17dbeef62f555bd993ef9cfc2"
              },
              "nonce": 16,
              "processor": "5b09493df6c18d17cc883ebce54fcb1f5afbd507533417fe32c006009a9c3c4a",
              "sender": "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
              "stamps_supplied": 100
            }
          }
        }
      ]
    },
    {
      "input_hash": "aff0f58a722fcf1d886d7bd6159237e82011bc119337f24d4c4a8902750a27fd",
      "merkle_leaves": [
        "aa0a20ded6256455ff0d7de0bd4dec43087ccff491b66174a862ca1b536601f0"
      ],
      "signatures": [
        {
          "signature": "e6cd3738d8c35e0c22ebf96f8bb40b9cdcfa01c23d998689e9e2ed550f880aa74dd83ccfe61801fea054636fe7d4434eb82b4890cbe9bd7957aacdb174de0501",
          "signer": "207c4da519414b5330df945c3c5405ba6e0a7b6ddf576256cb6f6aca43b8a8ee"
        },
        {
          "signature": "6989989dbfb0ce80a01b35f00157a7de058cd5f866ad79d0c7b6fb32cd6b70f0e408ff7bd283e13eb0c63a0784269ef563370bc9a9441d0220fa4e4552aff20c",
          "signer": "555100f02ef3bdc469e866140c35955e137624f4a1284bbcb999cd7fb576c869"
        },
        {
          "signature": "9adf1eb0898c9dde1344ca809f543212aea367ede9a51dcbdf6e9d8963bcee2a1eb84cd74f266d8a487557c31a44ca9452f7e2ab8f3d134b94c9800703828b08",
          "signer": "b0fc27299da14bc08834df9c70d73074f3e511a5a91321d4fa413f3401144918"
        }
      ],
      "subblock": 1,
      "transactions": [
        
      ]
    }
  ]
}
```

## TX Routes
---
### get transaction nonce
**`GET` `/nonce/:vk`**

Get the current nonce for a vk

> Example
> [https://masternode-01.lamden.io/nonce/f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780](https://masternode-01.lamden.io/nonce/f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780)

#### JSON response
```json
{
    "nonce": 0,
    "processor": "5b09493df6c18d17cc883ebce54fcb1f5afbd507533417fe32c006009a9c3c4a",
    "sender": "f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780"}
}
```

### post transaction
**`POST` `/`**

POST transactions as `JSON strings` to the blockchain.  Transactions can be submitted to any masternode but they must be submutted to the same masternode that provided the <u>[nonce](/blockchain/masternode_api#get-noncevk)</u>.

#### JSON body
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
            "amount": {"__fixed__":"100.5"},
            "to": "f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780"
        },
        "nonce": 32,
        "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
        "sender": "f16c130ceb7ed9bcebde301488cfd507717d5d511674bc269c39ad41fc15d780",
        "stamps_supplied": 40
    }
  }
```
> POST request to: 
> https://masternode-01.lamden.io/

#### JSON response
```json
{
    "success": "Transaction successfully submitted to the network.",
    "hash": "a0843c1d0a5ff8a69ccc60c59b1b3571fde1ecd1766a1d54cac430df8b26fe5b"
}
```

---

### get transaction details
**`GET` `/tx?hash=:hash_value`**

Return the `result` and `information` of a transaction

> Example
> [https://masternode-01.lamden.io/tx?hash=0635f6bb38f9a807d2f4dd00723dfa80ff248593f5223cd5c3058645ac624329](https://masternode-01.lamden.io/tx?hash=0635f6bb38f9a807d2f4dd00723dfa80ff248593f5223cd5c3058645ac624329)

#### JSON response
```json
{
  "hash": "0635f6bb38f9a807d2f4dd00723dfa80ff248593f5223cd5c3058645ac624329",
  "result": "None",
  "stamps_used": 19,
  "state": [
    {
      "key": "currency.balances:0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
      "value": {
        "__fixed__": "272976757.20050000"
      }
    },
    {
      "key": "currency.balances:3fa3da8a3dc59e712c3039f3811bfae52ed2fcb17dbeef62f555bd993ef9cfc2",
      "value": 1
    }
  ],
  "status": 0,
  "transaction": {
    "metadata": {
      "signature": "6f24ef39426e9823ce53a7582a936e1de2b70acd0e2f4882a901aaff3c31c36575e952f631be749b9156c0ab6a2e5ba8c400d64ed76eb630e07bc9f70fd37c05",
      "timestamp": 1601337869
    },
    "payload": {
      "contract": "currency",
      "function": "transfer",
      "kwargs": {
        "amount": 1,
        "to": "3fa3da8a3dc59e712c3039f3811bfae52ed2fcb17dbeef62f555bd993ef9cfc2"
      },
      "nonce": 16,
      "processor": "5b09493df6c18d17cc883ebce54fcb1f5afbd507533417fe32c006009a9c3c4a",
      "sender": "0000803efd5df09c75c0c6670742db5074e5a011b829dfd8a0c50726d263a345",
      "stamps_supplied": 100
    }
  }
}
```