---
id: events
title: Blockservice Events
sidebar_label: Events For Blockservice
---

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
```

## Events
### ```new-block```
No subscription required. Triggered when a new block is generated.

#### Message
```json
{
    "message": {
        "hash": "449c7d87b4b3771fd5fef9d558928f14e65f0fe5cc2c16b8a9c56c6382790fac",
        "number": 66895,
        "previous": "aa89502542295d88e6b031a09df41ccd0a6bafe864b015af83d7cb7f8587a4cc",
        "subblocks": [{
            "input_hash": "9c8dbb83537460c0a39c17503d76752228e4de512f2d21119bf033d34c6dfca6",
            "merkle_leaves": ["25b4264ab433ed1b074230da1539192c895a22ff8c3042b942b5edc61eedca22"],
            "signatures": [{
                "signature": "11f17e25c472b0d138ec5b1dd0c76399c3d170f2c4ab72d0cbbe0af057a5f7364beea6ac760e78984ed05d003af8aef8b271324540ce12ccc697b21a9bfb6c05",
                "signer": "ee2e928015fd8433c8c6da7234504968a1bde751b0784c3efbe4bc42628d5e9b"
            }],
            "subblock": 0,
            "transactions": [{
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
            }]
        }]
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

