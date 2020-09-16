---
id: what_is_the_smart_contract
hide_title: What is the Smart Contract
sidebar_label: What is the Smart Contract
---
## What is the Smart Contract

A smart contract is a computer program or a transaction protocol, respectively, which is intended to automatically execute, control or document respectively legally relevant events and actions according to the terms of a contract, of an agreement or of a negotiation.

Read more about smart contracts on [Wikipedia](https://en.wikipedia.org/wiki/Smart_contract)

## Why use a smart contract

By means of the smart-contract you can automatize different business processes and simplify the routine operations related to the money transfering, profit distribution, and many other cases.

For better understanding, let's define what a smart contract is, and what isn't.

A smart contract is:                        | A smart contract isn't:
-                                           | -
Immutable                                   | A full application
Open-Sourced                                | A database
Accessible through strict API               | Able to act without interaction
A set of rules enforced by consensus        | Able to draw data from the web arbitrarily
A function of its inputs |

Therefore, we have to make some considerations and alterations to what is allowed in a smart contract. We do not add any additional features to Python that make the code incompatible. Contracting is a strict subset.


### Overview of “crypto” as related to Lamden

#### What are public (vk) and private (sk) keys?

The entity of account in Lamden consists of two elements:

`VK - Verify Key`  - represented as a 64 character hex string.

`SK - Signing Key` - represented as a 64 character hex string.

The `VK` is an address of the account in the crypto aspect it is a public key and SK.

In the browser wallet, `Signing Key` is hidden. The `SK` is storing in the keystore when you are doing the backup and using it when you restore it.

Also, by means of classes from the package lamden-js you can generate `VK` and `SK`.

### How does Lamden use those keypairs (account) in the system

The account is an essential part of the Blockchain. 
All transactions that occur in Blockchain are associated with an account.

Every new dApp creates a new account in the user's wallet.

### Relating data to a user’s account (public key)

The data associated with the account is the balance of tokens and transactions.

### Validating transactions using message signing
Every transaction in a smart contract should be validated and signed by the message. 

#### How that works

### "Blockchains"

Lamden supports two types of Blockchain 

- Mainnet
- Testnet

More detailed information you can read on the page:

 [Lamden Blockchain](/blockchain)

#### Transactions
#### State

###  What kind of things can you do with a smart contract

There are hundreds of use cases where it is possible to use smart contracts.

Among them the most popular use cases we can highlight are:

1. **[Telecom](https://lamden.io/files/Telecom%20Case%20Study.pdf)**
2. **[Trade finance](https://lamden.io/files/Trade%20Finance%20Case%20Study.pdf)**
4. Record-keeping
5. Property ownership
6. Mortgages
7. Insurance
8. Medical Research
9. Voting
10. Peer-to-peer Transactions
11. Stocktacking
12. **[Banking](https://lamden.io/files/Comerica%20Covenants%20Case%20Study.pdf)**
    
## Comparisons with a Lamden contract v other platforms

The unique part of the Lamden contract is in the realization by means of Python. 

Lamden defends against actual bugs by integrating with Python's existing suites of testing tools. Because Contracting is Python, you can develop Contracting code in any Python IDE and write full unit and integration tests using the testing framework you like: Unittests, Nose, Pytest, and more are all supported.

:::info
No other blockchain smart contracting system is already natively integrated with the entire stack of another major language.
:::

|Characteristic|Lamden|Stellar|Ethereum|
|-------------|-------------|-------------|-------------|
|Contract Language|Python|Java, Go, Javascript; Community maintained:Python,C# .NET Standard 2.0,C++,Scala,Ruby,iOS & macOS||
|Medium Confirmation Time|Lamden|5 seconds|3.5 minutes|
|Price|Lamden|Negligible transaction fee(.00001 XML~=$0.0000002).10 XLM/offer deposit(refunded when offer filled or canceled). No gas fee for computations.|Depends on the complexity of computation, speed of transaction, and fiat value of ether. The median cost for a transfer is $0.094|
|Features|Lamden|A library of base abstractions that can generate sophisticated behavior|The range of features are not limited since the Solidity is Turing-complete languange|
|Security|Lamden|Decentralized network anyone can run a Stellar Core node and validate transactions. Can choose your validators for increased security. Atomic transactions comprised of simple, declarative operations lead to more auditable code and fewer security pitfalls.|Decentralized network: anyone can run a node and validate transactions. No built-in feature for choosing approved validators. Turing complete programming capabilities produces less auditable code and greater risk of exploitable vulnerabilities.|

Source (for Stellar and Ethereum): https://steemit.com/crypto/@tufayel/comparison-of-smart-contract-platforms

## Smart contracts are reactive vs proactive
## Transaction driven
## No access to “internet”
## etc

### What types of situations are smart contracts good for

In `Banking`, one of the most popular cases where the smart contract can save time and money by reducing work-hours is automating approval workflows and clearing calculations that at present are incredibly labor-intensive. More information you can read following by the link below

**[Banking](https://lamden.io/files/Comerica%20Covenants%20Case%20Study.pdf)**

The `Healthcare` industry is very vulnerable for hackers attacks, and this sphere and by means of Blockchain technology could allow entire databases of personal health records to be securely encrypted and kept.

In `Real Estate` smart contracts can remove the need for expensive services such as those provided by lawyers and housing brokers. 

Moreover, the in mortgage-related operations would allow both parties to agree to the sale before then processing the payment digitally. 

In the `Insurance` sphere, smart contracts could also help improve the process of claim processing in many ways. They could allow error checks, define payout amounts by taking into account a set of criteria and policy that was held by the individual or organization.

In the sphere of `Medical Research`, the sensitive information about new drug formulas and test results could be secured over the use of smart contracts should they need to divulge any of this information to a third party for any reason.

One of the most indicative examples that demonstrate CRUD options of smart-contract can represent the next simple example. 

### Water quality report (CRUD Example)
Imagine we need to report about the quality of water. 

The report includes three indicators for analysing:

- pH
- Hardness
- TDS

`Create`
Users submit a report to the system by inputting three indicators in the input form.

`Read`
`The Control Entity` review report and can approve the report.

`Update` 
In a determined period of time, the user can change indicators. 

`Delete`
Users can delete their reports in a determined period of time.

### What types of data can a smart contract store (Text, Media)?

#### Storage Types

There are two types of storage: 

Variable and Hash. 

`Variable` only has a single storage slot. 

`Hash` allows for a dynamic amount of dimensions to be added to them. Hashes are great for data types such as balances or mappings.

### What does interacting with a smart contract cost?

#### Stamps

A stamp is a single unit of computational work in a smart contract. Stamps are converted from cryptocurrency on the main Lamden network. This is what enforces rate limiting and incentivizes the development of the network.

**1. Why is there a cost?**

To calculate work, the code is run through an optimized tracer. Each Python VM opcode has a specific cost. Each step of the code deducts from the number of stamps attached to the transaction.

**2. Who pays the cost?**

If all of the stamps are deducted before the transaction is done, the transaction reverts states and fails. If there are leftover stamps from the transaction execution, they are returned to the sender.

**3. How can it be calculated**

The calculation of the stamps can be done by taking into account the next data about the cost per byte.

- Cost to read one byte from the state: 3 stamps
- Cost to write one byte to state: 25 stamps

## Opcode Cost Chart

Details on Python Opcodes from the `dis` module documentation [here](https://docs.python.org/3/library/dis.html). CPython Opcode definitions [here](https://github.com/python/cpython/blob/master/Include/opcode.h).

Some opcodes that are never encountered due to the linter failing the contract on the submission have been left out of this table. Inversely, not all opcodes in this list may ever be encountered invalid Contracting code.

| Op Code                      | Num | Cost | Muliplier | Actual Cost |
|------------------------------|-----|:------:|:-----------:|:-------------:|
| POP_TOP                      | 1   | 1    | 2         | 2           |
| ROT_TWO                      | 2   | 2    | 2         | 4           |
| ROT_THREE                    | 3   | 2.5  | 2         | 5           |
| DUP_TOP                      | 4   | 1    | 2         | 2           |
| DUP_TOP_TWO                  | 5   | 2    | 2         | 4           |
| NOP                          | 9   | 1    | 2         | 2           |
| UNARY_POSITIVE               | 10  | 1    | 2         | 2           |
| UNARY_NEGATIVE               | 11  | 1.5  | 2         | 3           |
| UNARY_NOT                    | 12  | 1    | 2         | 2           |
| UNARY_INVERT                 | 15  | 2    | 2         | 4           |
| BINARY_POWER                 | 19  | 15   | 2         | 30          |
| BINARY_MULTIPLY              | 20  | 1.5  | 2         | 3           |
| BINARY_MODULO                | 22  | 2    | 2         | 4           |
| BINARY_ADD                   | 23  | 1.5  | 2         | 3           |
| BINARY_SUBTRACT              | 24  | 1.5  | 2         | 3           |
| BINARY_SUBSCR                | 25  | 1.5  | 2         | 3           |
| BINARY_FLOOR_DIVIDE          | 26  | 2    | 2         | 4           |
| BINARY_TRUE_DIVIDE           | 27  | 2    | 2         | 4           |
| INPLACE_FLOOR_DIVIDE         | 28  | 2    | 2         | 4           |
| INPLACE_TRUE_DIVIDE          | 29  | 2.5  | 2         | 5           |
| INPLACE_ADD                  | 55  | 2.5  | 2         | 5           |
| INPLACE_SUBTRACT             | 56  | 2.5  | 2         | 5           |
| INPLACE_MULTIPLY             | 57  | 2    | 2         | 4           |
| INPLACE_MODULO               | 59  | 2    | 2         | 4           |
| STORE_SUBSCR                 | 60  | 2    | 2         | 4           |
| DELETE_SUBSCR                | 61  | 2    | 2         | 4           |
| BINARY_LSHIFT                | 62  | 3    | 2         | 6           |
| BINARY_RSHIFT                | 63  | 3    | 2         | 6           |
| BINARY_AND                   | 64  | 3    | 2         | 6           |
| BINARY_XOR                   | 65  | 3    | 2         | 6           |
| BINARY_OR                    | 66  | 3    | 2         | 6           |
| INPLACE_POWER                | 67  | 15   | 2         | 30          |
| GET_ITER                     | 68  | 3.5  | 2         | 7           |
| GET_YIELD_FROM_ITER          | 69  | 6    | 2         | 12          |
| LOAD_BUILD_CLASS             | 71  | 805  | 2         | 1610        |
| INPLACE_LSHIFT               | 75  | 3    | 2         | 6           |
| INPLACE_RSHIFT               | 76  | 3    | 2         | 6           |
| INPLACE_AND                  | 77  | 3    | 2         | 6           |
| INPLACE_XOR                  | 78  | 3    | 2         | 6           |
| INPLACE_OR                   | 79  | 3    | 2         | 6           |
| BREAK_LOOP                   | 80  | 1    | 2         | 2           |
| WITH_CLEANUP_START           | 81  | 7.5  | 2         | 15          |
| WITH_CLEANUP_FINISH          | 82  | 7.5  | 2         | 15          |
| RETURN_VALUE                 | 83  | 1    | 2         | 2           |
| IMPORT_STAR                  | 84  | 63   | 2         | 126         |
| SETUP_ANNOTATIONS            | 85  | 500  | 2         | 1000        |
| POP_BLOCK                    | 87  | 2    | 2         | 4           |
| END_FINALLY                  | 88  | 2    | 2         | 4           |
| POP_EXCEPT                   | 89  | 2    | 2         | 4           |
| STORE_NAME                   | 90  | 1    | 2         | 2           |
| DELETE_NAME                  | 91  | 1    | 2         | 2           |
| UNPACK_SEQUENCE              | 92  | 4    | 2         | 8           |
| FOR_ITER                     | 93  | 4    | 2         | 8           |
| UNPACK_EX                    | 94  | 1    | 2         | 2           |
| STORE_ATTR                   | 95  | 3    | 2         | 6           |
| DELETE_ATTR                  | 96  | 3    | 2         | 6           |
| STORE_GLOBAL                 | 97  | 2    | 2         | 4           |
| DELETE_GLOBAL                | 98  | 2    | 2         | 4           |
| LOAD_CONST                   | 100 | 1    | 2         | 2           |
| LOAD_NAME                    | 101 | 1    | 2         | 2           |
| BUILD_TUPLE                  | 102 | 1    | 2         | 2           |
| BUILD_LIST                   | 103 | 2.5  | 2         | 5           |
| BUILD_SET                    | 104 | 4    | 2         | 8           |
| BUILD_MAP                    | 105 | 3.5  | 2         | 7           |
| LOAD_ATTR                    | 106 | 2    | 2         | 4           |
| COMPARE_OP                   | 107 | 2    | 2         | 4           |
| IMPORT_NAME                  | 108 | 19   | 2         | 38          |
| IMPORT_FROM                  | 109 | 63   | 2         | 126         |
| JUMP_FORWARD                 | 110 | 2    | 2         | 4           |
| JUMP_IF_FALSE_OR_POP         | 111 | 2    | 2         | 4           |
| JUMP_IF_TRUE_OR_POP          | 112 | 2    | 2         | 4           |
| JUMP_ABSOLUTE                | 113 | 2    | 2         | 4           |
| POP_JUMP_IF_FALSE            | 114 | 2    | 2         | 4           |
| POP_JUMP_IF_TRUE             | 115 | 2    | 2         | 4           |
| LOAD_GLOBAL                  | 116 | 1.5  | 2         | 3           |
| CONTINUE_LOOP                | 119 | 1    | 2         | 2           |
| SETUP_LOOP                   | 120 | 2    | 2         | 4           |
| SETUP_EXCEPT                 | 121 | 1    | 2         | 2           |
| SETUP_FINALLY                | 122 | 1.5  | 2         | 3           |
| LOAD_FAST                    | 124 | 1    | 2         | 2           |
| STORE_FAST                   | 125 | 1    | 2         | 2           |
| DELETE_FAST                  | 126 | 1    | 2         | 2           |
| STORE_ANNOTATION             | 127 | 500  | 2         | 1000        |
| RAISE_VARARGS                | 130 | 2.5  | 2         | 5           |
| CALL_FUNCTION                | 131 | 4.5  | 2         | 9           |
| MAKE_FUNCTION                | 132 | 3.5  | 2         | 7           |
| BUILD_SLICE                  | 133 | 6    | 2         | 12          |
| LOAD_CLOSURE                 | 135 | 3.5  | 2         | 7           |
| LOAD_DEREF                   | 136 | 1    | 2         | 2           |
| STORE_DEREF                  | 137 | 1    | 2         | 2           |
| DELETE_DEREF                 | 138 | 1    | 2         | 2           |
| CALL_FUNCTION_KW             | 141 | 6    | 2         | 12          |
| CALL_FUNCTION_EX             | 142 | 6    | 2         | 12          |
| SETUP_WITH                   | 143 | 7.5  | 2         | 15          |
| LIST_APPEND                  | 145 | 4    | 2         | 8           |
| SET_ADD                      | 146 | 4    | 2         | 8           |
| MAP_ADD                      | 147 | 2.5  | 2         | 5           |
| LOAD_CLASSDEREF              | 148 | 1    | 2         | 2           |
| EXTENDED_ARG                 | 144 | 1    | 2         | 2           |
| BUILD_LIST_UNPACK            | 149 | 2.5  | 2         | 5           |
| BUILD_MAP_UNPACK             | 150 | 3.5  | 2         | 7           |
| BUILD_MAP_UNPACK_WITH_CALL   | 151 | 4.5  | 2         | 9           |
| BUILD_TUPLE_UNPACK           | 152 | 1    | 2         | 2           |
| BUILD_SET_UNPACK             | 153 | 4    | 2         | 8           |
| FORMAT_VALUE                 | 155 | 15   | 2         | 30          |
| BUILD_CONST_KEY_MAP          | 156 | 3.5  | 2         | 7           |
| BUILD_STRING                 | 157 | 4    | 2         | 8           |
| BUILD_TUPLE_UNPACK_WITH_CALL | 158 | 2    | 2         | 4           |

