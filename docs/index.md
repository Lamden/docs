---
id: index
title: Getting Started
sidebar_label: Getting Started
---




## Development Environment preparation

### Contracting installation 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="non-mac-operating-systems"
  defaultValue="win"
  values={[
    {label: 'Ubuntu 18.04 LTS', value: 'unix'},
    {label: 'OSX', value: 'mac'},
    
  ]}>
  <TabItem value="unix">

```bash
sudo apt-get update
sudo apt-get upgrade
apt install python3-pip
```
Install RocksDB & Dependencies
```bash
sudo apt-get install libgflags-dev libsnappy-dev zlib1g-dev libbz2-dev liblz4-dev libzstd-dev librocksdb-dev
 ```
  
Install Contracting

```bash
pip3 install contracting
```
Start Rocks Server

```bash
rocks serve &
```

  </TabItem>
  <TabItem value="mac">
  
  
  Install RocksDB

```bash
brew install rocksdb
```

If Homebrew is not installed, install it first: https://brew.sh/

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Install Contracting

```bash
pip3 install contracting
```

Start Rocks Server

```bash
rocks serve &
```
  
  </TabItem>
  
</Tabs>


### Using Contracting in a Development Environment

With Contracting now installed, you can develop smart contracts without an instance of the blockchain. This is to improve the speed of development. Here is how you would go about testing a token contract in a Jupyter notebook / IPython console:

```py
In [1]: from contracting.client import ContractingClient

In [2]: def token_contract():
   ...:
   ...:     balances = Hash()
   ...:     owner = Variable()
   ...:     
   ...:     @construct
   ...:     def seed():
   ...:         owner.set(ctx.caller)
   ...:
   ...:     @export
   ...:     def balance_of(wallet_id):
   ...:         return balances[wallet_id]
   ...:
   ...:     @export
   ...:     def transfer(to, amount):
   ...:         balances[ctx.caller] -= amount
   ...:         balances[to] += amount
   ...:         sender_balance = balances[ctx.caller]
   ...:
   ...:         assert sender_balance >= 0, "Sender balance must be non-negative!!!"
   ...:
   ...:     @export
   ...:     def mint(to, amount):
   ...:         assert ctx.caller == owner.get(), 'Only the original contract author can mint!'
   ...:         balances[to] += amount
   ...:

In [3]: client = ContractingClient(signer='stu')

In [4]: client.submit(token_contract, name='token')

In [5]: token = client.get_contract('token')

In [6]: token.mint(to='stu', amount=100000)

In [7]: token.balance_of(wallet_id='stu')
Out[7]: 100000
```


## FAQs

### `pip install contracting` is not installing on my computer!

If you're using a Mac, you can run into the problem that the C libraries required for Contracting are not getting compiled and the package fails to install.

To fix this:

1. Upgrade XCode
   
```bash
sudo brew update
sudo brew upgrade
```

2. Upgrade all software and restart your computer

```bash
sudo softwareupdate --install --all
```

3. Run

```bash
xcode-select --install
```
4. Run next command again.
   
```bash
pip install contracting
```
5. Run
   
```bash
open /Library/Developer/CommandLineTools/Packages/macOS_SDK_headers_for_macOS_10.14.pkg
```
if this does not work.

6. Install the package and run next command again. 

```bash  
pip install contracting
```
It should work now.


### Testing the Installation

In Jupyter notebook or IPython console execute next command

```py
In [1]: from contracting.client import ContractingClient
In [2]: client = ContractingClient()
In [3]: client.get_contracts()
Out[3]: ['submission'] 
```