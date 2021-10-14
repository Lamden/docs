
# Usage
Follow the installation steps above to install the `Lamden-Unity` asset package.

The `LamdenManager` from 'Assets/LamdenUnity/Prefabs' is required in your scene to interact with the Lamden blockchain.  The attached `MasterNodeApi` script handles all the calls to the network. 

Note: All Lamden Unity classes are in the `LamdenUnity`namespace.  So a `using LamdenUnity` statement is required to access the classes and methods.

The `MasterNodeApi` script can be configured with the follow variables:

* Timeout:  Timeout time in milliseconds before the network request is aborted if not answered by the server, Default value: 10000 ms, Type: int
* Network Info
* Hosts: An array of strings that define the URL of nodes on the lamden network that will be called to execute requests, Default value: http://167.172.126.5:18080/ (Lamden Testnet), Type: string
* Network Type: Type of Lamden network, Default value: testnet, Type: string
* Currency symbol: Name of the currency used in the network, Default Value: dTAU, Type: string
* Lamden: Defines if the network is a Lamden network or not, Default Value: true, Type: boolean
* Block Explorer: URL to the block explorer for the defined network, Default value: https://testnet.lamden.io/

If you are performing testing with a locally hosted [Lamden mockchain](https://github.com/Lamden/mockchain) with the default configuration change the hosts array to only contain one host of `http://127.0.0.1:8000`.  The other settings should not matter for testing.

Afer adding the `LamdenManager` to the scene the next thing to do is create a Lamden wallet.  This is done using the 'LamdenUnity\Core\Wallet' script.  A wallet is composed of a VK (verification key or public key) and a SK (signing key or private key) keypair.  ***NOTE: Anyone that has copy of a wallet's SK can perform any action on behalf of the owner, so the SK should stored in a secure place.*** For testing purposes on a local mockchain or on the testnet it probably ok to store the SK in plain text or in code. ***NOTE: Keypairs are shared across the lamden testnet and mainnet, ensure that you are not using a keypair that has any TAU or other assets associated with it in your development environment to avoid issues with having the SK post in source or accidently executing a transaction on the mainnet.***

# Creating or Loading Wallet and Accessing Keys
* `New()`: Creates a new keypair (VK and SK)
* `Load(string sk)`: Regenerates keypair (VK and SK) from `sk` argument, in other words passing in the SK will regenerate the VK so both do not need to be stored
* `GetVK()`: Get hex string of the VK (verification key or public key) 
* `GetSK()`: Get hex string of the SK (signing key or private key)

