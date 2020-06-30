---
id: installing_node
title: Installing Node
sidebar_label: Installing Node
---

### Server preparation

Prepare the server with Ubuntu 18.04.

We recommend using DigitalOcean droplets since it has a straightforward interface and give you a good start for your experiments.

Make sure that you choose the instance with next parameters:

* 2 GB / 1 CPU
* 50 GB SSD disk
* 2 TB transfer 

:::info
The storage space is a critical factor if you are planning to join the Main Network to consider more storage space.
:::

* * *

### Install all necessary components

:::info
If you are going to launch a Private Blockchain network, you need to repeat all steps below for your delegates. Another option to clone the first instance as many times as many delegates you would like to have for your blockchain.
:::

### Install Pip3

```bash
sudo apt-get update
```

```bash
sudo apt-get install python3-pip -y
```

### Other Pip3 Pkg

```bash
pip3 install --upgrade pip setuptools
```

### Install MongoDB
```bash
sudo apt-get install -y mongodb
```

### Install Haveged (Recommended)
For some reason, DigitalOcean droplets, and perhaps other cloud providers, have `/dev/random` blocking problems. This probably is because they are running many small computers on a single Linux instance, and the entropy pool dries up pretty quickly. If this doesn't make sense, install Haveged, and don't worry about it.

If it does, `libsodium`, which is the public-private key cryptography library we use, uses `/dev/random` with no option to use `/dev/urandom`. Haveged solves this problem.

```bash
sudo apt-get install haveged -y
```

```bash
systemctl start haveged
```

```bash
systemctl enable haveged
```

### Install Contracting

```bash
git clone https://github.com/Lamden/contracting.git
```

```bash
cd contracting
```

Pull all available branches from the repository.

```bash
git fetch
```

Select dev branch.

```bash 
git checkout dev
```

Install the Contracting

```bash
python3 setup.py develop
```

### Install Cilantro

```bash
cd ~
```

```bash
git clone https://github.com/Lamden/cilantro-enterprise.git
```

```bash
cd cilantro-enterprise
```

```bash
git fetch
```

Make sure that you are pulling the original version of the network and double-check the branch of the repository.

```bash
git checkout dev-final
```

Install Cillantro

```bash
python3 setup.py develop
```

### Setup and run MongoDb

```bash
mkdir ~/blocks
```

```bash
mongod --dbpath ~/blocks --logpath ~/logs.log --bind_ip 127.0.0.1 
```

## Setting up the network 

The flexibility of the cillantro allows to build a `private network` or join to the existed and use it for any business purposes. 

The advantage of a Private Network is getting all functionality of the blockchain network in a short period. You can start test your DAPP at once after the deployment network.

### Setting up a Private Network

We suppose that you have successfully prepared your instance on DigitalOcean.
For private blockchain, you need to initiate two instances.
Now you need to set up firewall rules. 

Open the next ports on both VMs.

* 19000 
* 18080

Now open your IDE and create accounts that will serve for masternode and delegate.
The process is the same for both types of nodes.

 Repeat the next step two times and store information about accounts in a safe location.

If you need to install lamden-js.

```javascript
npm install -g lamden-js
```

1. Create account

```bash
nano ~/create_account.js
```

Paste next code.

```javascript
const lamdenJs = require('lamden-js');

let lamdenWallet = lamdenJs.wallet.new_wallet()

console.log(lamdenWallet)
```

Launch the next script to create accounts

```bash
node create_account.js
```

or make by means of Python

```python
from cilantro_ee.crypto.wallet import Wallet
w = Wallet()
print(w.verifying_key)
print(w.signing_key)
```

### 2. Setup `genesis.json`

The file `genesis.json` is a core of the blockchain. In this file, we define the account that will store the balance of TAU. The balance can be distributed regarding the logic of smart contracts. 

To make blockchain alive, you need to edit `genesis.json` and paste the address of your master account in the parameter 'VK'.  

Open `genesis.json`.

```bash
nano  ~/cilantro-enterprise/cilantro_ee/contracts/genesis.json
```

```bash
{
    "base_directory": "/genesis",
    "extension": ".s.py",
    "contracts": [
        {
            "name": "currency",
            "owner": null,
            "constructor_args": {
                "vk": "Enter your VK here."
            }
        },
        {
            "name": "election_house",
            "owner": null,
            "constructor_args": null
        },
        {
            "name": "stamp_cost",
            "owner": "election_house",
            "constructor_args": {
                "initial_rate": 20000
            }
        },
        {
            "name": "rewards",
            "owner": "election_house",
            "constructor_args": null
        },
        {
            "name": "upgrade",
            "owner": null,
            "constructor_args": null
        },
        {
            "name": "foundation",
            "owner": null,
            "constructor_args": {
                "vk": "Enter your VK here"
            }
        }
    ]
}
```

### 3. Constitution.json

The constitution is a file that defines the structure of masternodes and delegates.

This is a required file, and you need to create this file if you would like to deploy your private network or join.

Create file `constitution.json` that will define parameters for the blockchain.

```bash
nano ~/constitution.json
```

The constitution for master node and delegates will be the same and will look like the example below.

:::note
For private network, you will need at least one masternode and one delegate. 
:::

```bash
{
  "masternodes": {
   "vk": "IP",
  },
  "delegates": {
   "vk": "IP"

  },
}
```

Ctrl + O  save the file.
Click `Enter`.
Ctrl+X.

### Constitution for the Lamden Testnet 

If you would like to join the Lamden Testnet, you need to use the next constitution.

```bash
wget -O ~/constitution.json https://gist.github.com/StuartFarmer/c074fa9066b0d40a0a887da266ef5c98
```

### Start your node (if you are starting from scratch)

Make sure that you have done all the previous steps. 
Now you are ready to launch your nodes. 

:::note 
For private network, you need to launch a master node first. Once master node launched , you will be able to launch delegate. 
:::

```bash
cil start <masternode | delegate> -k <sk in hex format>
```

The example of launching masternode:

```bash
cil start masternode  -k 068d58db5aa12467880fbad249b6d679f496f9fa6fc2105b0379cca9fe445bc5
```

The example of launching delegate:

```bash
cil start delegate  -k 1234567b5aa12467880fbad249b6d679f496f9fa6fc2105b0379cca9fe445bc5
```

### Network verification 

Use the next script to check if your network is online.

```javascript
const Lamden = require('lamden-js')

let testnet = new Lamden.Network({
    name: ' Private Testnet',
    type: 'testnet',
    host: 'http://161.35.61.118', port: '18080' 
})

testnet.events.on('online', (online) => {
    console.log(online)
}) 

testnet.ping()
```

### Join node (if you are trying to join an existing running network)

```bash
cil join <masternode | delegate> -k <sk in hex format> -m <list of any master node currently online>
```

The example of a connection to the node.

```bash
cil join masternode -k 068d58db5aa12467880fbad249b6d679f496f9fa6fc2105b0379cca9fe445bc5 -m 168.192.0.0
```
