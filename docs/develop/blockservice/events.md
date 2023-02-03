
# Blockservice Events


Blockservice currently supports publish / subscribe using websockets notifications. This allows users to wait for events instead of polling for them.

## Connect to websocket server

Below is a illustration of the JS code:
```js
const { io } = require("socket.io-client");
const socket = io("ws://server");
socket.on("connect", () => {
    socket.emit('join', "all-state-changes-one");
    socket.emit('join', "all-state-changes-by-transaction");
    socket.emit('join', "new-contracts");
});

// Get the latest block on connect
socket.on("latest_block", (latest_block) => {
    console.log(latest_block)
});

// Get any new blocks minted
socket.on("new-block", (new_block) => {
    console.log(new_block)
});

// Get the current network rewards on connect
socket.on("rewards", (reward_info) => {
    console.log(reward_info)
});
```

### ```latest_block```
Only triggered on connection to the websocket

```javascript
socket.on("latest_block", (new_block) => {
    console.log(new_block)
});
```

#### Message
```json
{
  "message": {
    "hash": "6aed0a1339bd84fee4bb62eee272591ce70912e40bbe8a1643eee1316802726c",
    "number": "1675383793312469504",
    "hlc_timestamp": "2023-02-03T00:23:13.312469504Z_0",
    "previous": "0f3de28621a8babf9502731c669e4cae4f248022d8fd0d324e06d893e2b0afdf",
    "proofs": [...],
    "processed": {...},
    "rewards": [...],
    "origin": {...},
    "minted": {...}
  }
}
```

## Events
### ```new-block```
No subscription required. Triggered when a new block is generated.

```javascript
socket.on("new-block", (new_block) => {
    console.log(new_block)
});
```

#### Message
```json
{
  "message": {
    "hash": "6aed0a1339bd84fee4bb62eee272591ce70912e40bbe8a1643eee1316802726c",
    "number": "1675383793312469504",
    "hlc_timestamp": "2023-02-03T00:23:13.312469504Z_0",
    "previous": "0f3de28621a8babf9502731c669e4cae4f248022d8fd0d324e06d893e2b0afdf",
    "proofs": [...],
    "processed": {...},
    "rewards": [...],
    "origin": {...},
    "minted": {...}
  }
}
```

---
### ```new-state-changes-one```
Triggered when state changed. Returns a changed state in a transaction.

#### Create subscription
Emits an ```join``` event to the socket server with arguments ```all-state-changes-one```

> example
> socket.emit('join', "all-state-changes-one");

#### Message
```json
{
    "room": "all-state-changes-one",
    "message": {
        "contractName": "currency",
        "variableName": "balances",
        "key": "9185ce2f9b0b68621b79a82e029aafa36e127f355fdece0691e07dcc3fb1fbcb",
        "keys": ["9185ce2f9b0b68621b79a82e029aafa36e127f355fdece0691e07dcc3fb1fbcb"],
        "rootKey": "9185ce2f9b0b68621b79a82e029aafa36e127f355fdece0691e07dcc3fb1fbcb",
        "value": {
            "__fixed__": "1.5384615384615439"
        },
        "state_changes_obj": {
            "currency": {
                "balances": {
                    "9185ce2f9b0b68621b79a82e029aafa36e127f355fdece0691e07dcc3fb1fbcb": {
                        "__fixed__": "1.5384615384615439"
                    }
                }
            }
        },
        "contractCalled": "currency",
        "kwargs": {
            "amount": {
                "__fixed__": "1.0"
            },
            "to": "9185ce2f9b0b68621b79a82e029aafa36e127f355fdece0691e07dcc3fb1fbcb"
        }
    }
}
```

---
### ```new-state-changes-by-transaction```
Triggered when state changed. Returns all the changed state in a transaction.

#### Create subscription
Emits an ```join``` event to the socket server with arguments ```all-state-changes-by-transaction```

> example
> socket.emit('join', "all-state-changes-by-transaction");

#### Message
```json
{
    "room": "all-state-changes-by-transaction",
    "message": {
        "tx_uid": "000000066895.00000.00000",
        "txInfo": {
            "hash": "74e84e4d19c885ad85b7f951a3fa3f53d8b307489d4a00a462ce852f63fadad9",
            "result": "None",
            "stamps_used": 19,
            "state": [{
                "key": "currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41",
                "value": {
                    "__fixed__": "6.0769230769230818"
                }
            }, {
                "key": "currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9",
                "value": {
                    "__fixed__": "3.01538460846156221"
                }
            }],
            "status": 0,
            "transaction": {
                "metadata": {
                    "signature": "89d90c6bee3226ea04754e9a630bcc4e8bd6bcec032b125e54e3c33a78025c448f40cc94358cc112475d64b53c6b987f33cd1fa7f2299ac6a755d2f15fe0ba01",
                    "timestamp": 1653486525
                },
                "payload": {
                    "contract": "currency",
                    "function": "transfer",
                    "kwargs": {
                        "amount": {
                            "__fixed__": "1.0"
                        },
                        "to": "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9"
                    },
                    "nonce": 28,
                    "processor": "89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
                    "sender": "b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41",
                    "stamps_supplied": 26
                }
            }
        },
        "blockNum": 66895,
        "timestamp": 1653486525000,
        "sender": "b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41",
        "contractCalled": "currency",
        "kwargs": {
            "amount": {
                "__fixed__": "1.0"
            },
            "to": "2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9"
        },
        "state_changes_obj": "{\\"
        currency\\ ":{\\"
        balances\\ ":{\\"
        b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41\\ ":{\\"
        __fixed__\\ ":\\"
        6.0769230769230818\\ "},\\"
        2341 d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9\\ ":{\\"
        __fixed__\\ ":\\"
        3.01538460846156221\\ "}}}}",
        "affectedContractsList": ["currency"],
        "affectedVariablesList": ["currency.balances"],
        "affectedRootKeysList": ["currency.balances:b17eabddbd474bdaebfca71f654ab7dc1195510062e3cdbbdc442a028b050e41", "currency.balances:2341d744f11658d7f1ca1c514a1b76ff07898435c46402b1e4f8b00d4a13f5f9"]
    }
}
```

---
### ```new_contract```
Triggered when get a new contract.

#### Create subscription
Emits an ```join``` event to the socket server with arguments ```new-contracts```

> example
> socket.emit('join', "new-contracts");

#### Message
```json
{
    "room": "new-contracts",
    "message": {
        "contractName": "con_new11111111111_contract",
        "lst001": false
    }
}
```

