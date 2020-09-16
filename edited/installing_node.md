---
id: installing_node
title: Installing Node
sidebar_label: Installing Node
---
 
### Server preparation
 
Prepare the server with Ubuntu 18.04.
 
The  use of **[DigitalOcean droplets](https://www.digitalocean.com/products/droplets/)** is recommended, since they have a straightforward interface, and give you a good base for your experiments.
 
Be sure to choose the instance with following parameters:
 
* 2 GB / 1 CPU
* 50 GB SSD disk
* 2 TB transfer 
 
:::info
Storage space is a critical factor. For plans to join the main network it is important to consider more storage space. 
:::
 
* * *
 
### Install all necessary components
 
:::info
In the event that a Private Blockchain network is launched, it is necessary to repeat all the following steps for purposes of  delegation. Another available option is the ability to clone the first instance as many times as there are  delegates present in the existing blockchain.
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
Inexplicably, DigitalOcean droplets, perhaps in addition to other cloud providers, face  `/dev/random` blocking problems. This is likely due to the fact that they are running a multitude of  small computers on a single Linux instance, resulting in the entropy pool drying up at a rapid rate. If this doesn't resolve the difficulty, install Haveged and the issue will no longer persist.
 
If it does, `libsodium`, which is the public-private key cryptography library utilised, uses `/dev/random` with no option to use `/dev/urandom`. Haveged resolves this issue.
 
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
 
Ensure  that the original version of the network is being pulled and double-check the branch of the repository.
 
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
 
The flexibility of  Cillantro allows for the user to  build a `private network`, or join the existing network  and utilise it for a variety of  business purposes. 
 
The advantage of utilising a  Private Network is the ability to access  all functionality of the blockchain network in a short period. Testing of the  DAPP can commence immediately after the deployment network.
 
### Setting up a Private Network
 
Assuming that the  instance on DigitalOcean has been successfully prepared, the following steps may be taken.
For private blockchain, it is necessary to initiate two instances.
In following, firewall rules must be set up.
Open the next ports on both VMs.
 
* 19000 
* 18080
 
To continue, the  IDE must be opened, and accounts must be created which will serve for masternode and delegate.

The process is the same for both types of nodes.
 
Repeat the next step twice more and store all information related to the accounts in a safe location.
 
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
 
Launch the following script to create accounts
 
```bash
node create_account.js
```
 
orby means of Python
 
```python
from cilantro_ee.crypto.wallet import Wallet
w = Wallet()
print(w.verifying_key)
print(w.signing_key)
```
 
### 2. Setup `genesis.json`
 
The file `genesis.json` is a core element of the blockchain. In this file, the account that will store the balance of TAU is defined. The balance is able to  be distributed, regarding the logic of smart contracts. 
 
To take the blockchain live, it is necessary to edit `genesis.json` and paste the address of your master account in the parameter 'VK'.  
 
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
 
The `constitution` is a file which defines the structure of both masternodes and delegates.
 
This is a required file and must be created in order to deploy a private network, or join one.
 
Create a file `constitution.json`, which will define the parameters of the blockchain.
 
```bash
nano ~/constitution.json
```
 
The constitution of the masternode and delegates will be the same and will look like the example below.
 
:::note
For a private network, at least one masternode and one delegate are necessary. 
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
 
In order to join the Lamden Testnet, it is necessary to use the next constitution.
 
```bash
wget -O ~/constitution.json https://gist.github.com/StuartFarmer/c074fa9066b0d40a0a887da266ef5c98
```
 
### Start your node (if you are starting from scratch)
 
It is necessary that all the previous steps have been completed. Once they are complete, the nodes are ready to be launched. 
 
:::note 
For a private network, a masternode must be launched first. Once the masternode is launched , the delegate is able to be launched. 
:::
 
```bash
cil start <masternode | delegate> -k <sk in hex format>
```
 
An example of masternode launching:
 
```bash
cil start masternode  -k 068d58db5aa12467880fbad249b6d679f496f9fa6fc2105b0379cca9fe445bc5
```
 
Anexample of delegate launching:
 
```bash
cil start delegate  -k 1234567b5aa12467880fbad249b6d679f496f9fa6fc2105b0379cca9fe445bc5
```
 
### Network verification 
 
The next script can be used to check if your network is online.
 
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
 
### Join node 
```bash
cil join <masternode | delegate> -k <sk in hex format> -m <list of any master node currently online>
```
 
Anexample of connection to the node.
 
```bash
cil join masternode -k 068d58db5aa12467880fbad249b6d679f496f9fa6fc2105b0379cca9fe445bc5 -m 168.192.0.0
```

