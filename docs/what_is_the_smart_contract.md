---
id: what_is_the_smart_contract
title: What is the Smart Contract
sidebar_label: What is the Smart Contract
---


Contracting is a system that brings the ease of Python into the complex world of smart contracts and distributed systems. 

With Contracting you can write smart contracts in a subset of Python. You can then deploy these contracts to the Lamden Blockchain Cilantro.

Contracting is simply a Python package. Because of this you can use existing Python tooling and the Contracting API to develop smart contracts with ease. That is unlike Solidity, which requires external services like Truffle or TestRPC.

Below is an example of a simple token smart contract in Python. With it you can transfer tokens and check token balances.

```py
def token_contract():
     balances = Hash()
     owner = Variable()
     
     @construct
     def seed():
         owner.set(ctx.caller)

     @export
     def balance_of(wallet_id):
         return balances[wallet_id]

     @export
     def transfer(to, amount):
         balances[ctx.caller] -= amount
         balances[to] += amount
         sender_balance = balances[ctx.caller]

         assert sender_balance >= 0, "Sender balance must be non-negative!!!"

     @export
     def mint(to, amount):
         assert ctx.caller == owner.get(), 'Only the original contract author can mint!'
         balances[to] += amount
```


## Why use a smart contract

### Overview of “crypto” as related to Lamden

### What are public (vk) and private (sk) keys?

### How does Lamden use those keypairs in the system

### Relating data to a user’s public key

### Validating transactions using message signing

### How that works

### "Blockchains"

### Transactions

### State
