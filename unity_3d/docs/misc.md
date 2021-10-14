## Miscellaneous

For more details there are unit tests that run the Unity Test Framework to test all the methods that provide good example of usage.  Also, there is a example scene under `Assets\Lamden UI Example` that implements a GUI that can create a wallet, ping the server and submit a transaction.

![My image](https://github.com/Lamden/lamden-unity-csharp/blob/master/readme_images/exampleUI.JPG?raw=true)

**Create New Wallet** will create a new random keypair that can be used as a wallet
**Ping Server** will ping the server configured in the `Lamden Manager/MasterNodeApi` script and the image to the right will turn green if the server is online and red if unreaachable.

**Create Wallet from SK** will generate the VK from the SK that is entered into the field to the left of it *NOTE: Copy and paste works with keyboard short cuts for all the input fields)*.

**VK** is the wallets verification key or public key.

**SK** is the wallets signature key or private key **NOTE: In non-development situations this the SK is extremely senstive and should kept secert.  Do not use your mainnet wallet for development!**

**Get Balance** will update the wallet currency amount in the field to the right of it.

**Get dTAU "Testnet TAU"** will copy the wallets VK to the clipboard and open the [Testnet Faucet](https://faucet.lamden.io/) webpage, where you can paste the VK and get 100 dTAU a day for development purposes.

**Test Contract Submission** is actually testing the contract excecution of the `con_values_testing/test_values`, the submit button will send the contract to the server *Note: you need to have a wallet with dTAU or TAU in it to execute a contract on the testnet or mainnet respectively*

**Test Signature Generation** will create a signature using the SK of the test in the top input field.