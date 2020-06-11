---
id: what_is_the_smart_contract
title: What is the Smart Contract
sidebar_label: What is the Smart Contract
---
## Why use a smart contract

The smart contract is essential part of transferring instructions to the blockchain.
By means of smart contract you can automatise different business processes and simplify routine operations related to money transfering, profit distribution and many other cases.


For better understanding, let's define what a smart contract is, and what one isn't.

A smart contract is: 						| A smart contract isn't:
-					 						| -
Immutable			 						| A full application
Open-Sourced								| A database
Accessible through strict API 				| Able to act without interaction
A set of rules enforced by consensus 		| Able to draw data from the web arbitrarily
A function of it's inputs

Therefore, we have to make some considerations and alterations to what is allowed in a smart contract. We do not add any additional features to Python that make the code incompatible. Contracting is a strict subset.


## What is a Contracting

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
### Options Implementation of Contracting

1. You can use Contracting as the language that is used in the Lamden blockchain system and you want to develop smart contracts for that blockchain system.
2. Also, Contracting will help to deploy its own instance of a database that uses smart contract 'apps' to control traditional CRUD type operations.
3. For real enthusiasts, Contracting is a great opportunity to learn Python as much as possible.

### Value Proposition
Contracting focuses on developer experience (DX) which is a major focus of the Python language as a whole.

Our goal is to create a development experience that is clear, concises, and manageable so that you don't have to worry about what makes smart contracts hard, and just have to worry about what makes your smart contract great.

We take inspiration from some of these Python libraries:

- Requests
- Keras
- PyTorch


### Overview of “crypto” as related to Lamden


### What are public (vk) and private (sk) keys?

### How does Lamden use those keypairs in the system

### Relating data to a user’s public key

### Validating transactions using message signing

### How that works

### "Blockchains"

Lamden supports three types of blockhain 

- Mainnet
- Testnet
- Mockchain

More detailed information you can read on the page about [Lamden Blockchain](/blockchain)
### Transactions

### State
