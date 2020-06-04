---
id: what_is_the_smart_contract
title: What is the Smart Contract
sidebar_label: What is the Smart Contract
---


Contracting is a system that brings the ease of Python into the complex world of smart contracts and distributed systems. Here's how it looks:



```py
balances = Hash()
owner = Variable()

@construct
def seed():
    owner.set(ctx.caller)
    balances[ctx.caller] = 1_000_000

@export
def transfer(amount, to):
    sender = ctx.signer
    assert balances[sender] >= amount, 'Not enough coins to send!'

    balances[sender] -= amount

    if balances[to] is None:
        balances[to] = amount
    else:
        balances[to] += amount

@export
def balance(account):
    return balances[account]
```
