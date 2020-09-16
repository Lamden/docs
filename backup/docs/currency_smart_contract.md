---
id: currency_smart_contract
hide_title: Currency Smart Contract and TAU
sidebar_label: Currency Smart Contract and TAU
---

### Currency Smart Contract and TAU

#### What is it?

Smart contract `Currency` define the initial balance for your private network and manage all operations related to the wallet.


### How to get it

You can find smart contract currency following this path:

```bash
cilantro_ee/contracts/genesis/currency.s.py
```

```bash
https://github.com/Lamden/cilantro-enterprise/blob/dev-final/cilantro_ee/contracts/genesis/currency.s.py

```

### How does it relate to Stamps

A `stamp` is a single unit of computational work in a smart contract.

Since `stamps` are converted from cryptocurrency on the main Lamden network. This is what enforces rate limiting and incentivizes the development of the network.

To calculate work, the code is ran through an optimized tracer. Each Python VM opcode has a specific cost. Each step of the code deducts from the number of stamps attached to the transaction.

If all of the stamps are deducted before the transaction is done, the transaction reverts states and fails. If there are left over stamps from the transaction execution, they are returned to the sender.

### How does it relate to the “TAU” token

The stamp is a votable variable and set by community. 

For this moment 20000 stamps equals 1 TAU (It can vary).

But if the token becomes more expensive, the network can vote to increase the stamp cost

All spent stamps become rewards and they are distributed to the node owners and the network can vote on the ratio of the payout.

By default, the ratio is 49% to masternodes, 49% to delegates, 1% burned, 1% to 'foundation' which is the dev fund.

The stamps become rewards and they are distributed to the node owners.

Also the network of nodes can vote on the ratio of the payout.

By default, the ratio is `49%` to masternodes, `49%` to delegates, `1%` burned, `1%` to `foundation` which is the dev fund.

`Will it be the same ration over the time?`

The nodes can vote on it whenever they get 100 points they can distribute to each ratio
and then after all the nodes vote, the average is taken and the new ratio is set
and that ratio stays active for the election term which is 1 day or 1 week
they vote by interacting with the rewards smart contract.


### Breakdown/Description of all methods and variables in the contract

```python
#The variable define that initial balance of master account is 0;
balances = Hash(default_value=0)

# Define the initial balance for your private network;
@construct
def seed(vk: str):
    balances[vk] = 288_090_567

# This is a public function that check if the sender has enough tokens to send;
@export
def transfer(amount: float, to: str):

# If amount that we suppose to send is less than 0 the application raise an error;

    assert amount > 0, 'Cannot send negative balances!'

    sender = ctx.caller

# If amount that we suppose to send less than we have in balance, then the application raise an error;

    assert balances[sender] >= amount, 'Not enough coins to send!'

    balances[sender] -= amount
    balances[to] += amount

#This function return the current balance of account;
def balance_of(account: str):
    return balances[account]

# This function return the amount that was issued with blockchain network deployment;
@export
def total_supply():
    return supply.get()

#By call of this public function we can return the balances of sender and receiver;
@export
def allowance(owner: str, spender: str):
    return balances[owner, spender]

@export
def approve(amount: float, to: str):
    assert amount > 0, 'Cannot send negative balances!'

    sender = ctx.caller
    balances[sender, to] += amount
    return balances[sender, to]

@export
def transfer_from(amount: float, to: str, main_account: str):
    assert amount > 0, 'Cannot send negative balances!'

    sender = ctx.caller

    assert balances[main_account, sender] >= amount, 'Not enough coins approved to send! You have {} and are trying to spend {}'\
        .format(balances[main_account, sender], amount)
    assert balances[main_account] >= amount, 'Not enough coins to send!'

    balances[main_account, sender] -= amount

# Decrease the balance of main account   
    balances[main_account] -= amount
# Transfer tokens to the receiver
    balances[to] += amount
```

