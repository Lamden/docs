# Authentication

For most Dapps the account being provided from [getInfo](/docs/develop/wallet_api/get_wallet_info) is enough. If your Dapp is simply initiating transactions on behalf of the user then using this endpoint is redundant as only a Vault with the private key will be able to complete Blockchain transactions.

Sometimes your Dapp will need the user to do some "off-chain" activities specific to your Dapp. Maybe editing profile information or joining a chat.  In those cases what you need is a way for your user to "login" to your site.

The Lamden Vault has an Auth flow so that Dapps can prove the Vault owner actually has the private key of the account the Vault is providing. 

## Auth Flow
1. Dapp creates a `dapp_challenge` string
    - Must be a string
    - Cannot be JSON
    - Cannot be > 64 characters
2. Dapp sends the `dapp_challenge` in the detail of a CustomEvent named `auth`
3. Vault receives the event on its `auth` event listener
3. Vault creates a `challenge_message` by combining the `dapp_challenge`, some boilerplate and a new string it creates called the `vault_challenge`
    - `[VAULT_AUTH]__DAPP__dapp_challenge__VAULT__vault_challenge`
4. Vault signs the `challenge_message` with the private key the dapp is currently attached to
5. Vault sends the `signature` and `vault_challenge` back to the dapp using the `authReturn` event
6. Dapp receives this auth information on it's `authReturn` event listener.
7. Dapp recreates the `challenge_message` using the `dapp_challenge` it already knows and the `vault_challenge` received from the Vault.
8. Once the Dapp verifies the signature it can authenticate the user to its Dapp.


## Example Auth Routine
```javascript
// Import lamden-js
import Lamden from 'lamden-js'

// Listen for auth responses (see handler definition further down)
document.addEventListener('auth_return', handle_auth_return)

// create a challenge_string for a new date string 
const dapp_challenge = new Date().toString()

// Send the auth event to the Lamden Vault, response will be handled via auth_return
document.dispatchEvent(new CustomEvent('auth', {detail: JSON.stringify({dapp_challenge})}));
 
// Handler for auth responses
function handle_auth_return(response){
    // extract info from the response
    const { signature, vault_challenge } = response

    // get the account the Lamden Vault has previously provided
    const account_vk = get_vk_from_vault()

    // join the 'dapp_challenge' and the 'vault_challenge' with boilerplate to recreate 'challenge_message'
    // This should be the message that was created in the Lamden Vault and signed by the user's private key
    const challenge_message =  `[VAULT_AUTH]__DAPP__${dapp_challenge}__VAULT__${vault_challenge}`
    
    // Verify the signature using lamden-js
    if (Lamden.wallet.verify(account_vk, challenge_message, signature)){
        // User is authorized
    }else{
        // User NOT authorized
    }
 }
```