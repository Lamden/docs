# Creating a Network Object


Lamden-js uses a `Network Object` which tells the `Transaction Builder` and `Masternode API` information about the Lamden Network you want to use.

### Create new Network instance

> For Arko networks you MUST set `version` = 2
```javascript
let testnet = new Network({
    hosts: ['https://testnet-master-1.lamden.io'] // API calls choose a random entry from this list
    version: 2, // required for an Arko network
    name: 'Lamden Testnet', // optional
    type: 'testnet', // optional
    lamden: true,  // optional
    currencySymbol: 'dTAU',  // optional
    blockExplorer: 'https://testnet.lamden.io,'  // optional
})

testnet.events.on('online', (online) => {
    console.log(online) // true or false
})
testnet.ping()
```

## Network Object Class
An instance of this class can be created for any current [Lamden Network](/docs/develop/blockchain/current_masternodes) or a local developer network. The masternodes provided in the `hosts` list 
must be valid Lamden Masternodes.     

### Class Members
- **hosts** (array): __required__
    - This is a list of masternodes on the network you want to use.
    - The `Network Object` will use a random masternode from the list provided when creating <u>[`Transactions`](/docs/develop/lamden_js/transactions)</u> or calling the <u>[`Masternode API`](/docs/develop/lamden_js/masternode_api_wrapper)</u> endpoints.
    - A list of current Lamden Masternodes can be found <u>[here](/docs/develop/blockchain/current_masternodes)</u>.
- **host** (string): *getter*
    - a random host returned from the hosts list
- **url** (string): *getter*
    - returns host
- **events** (object): *EventEmitter*
    - emits the `online` event
- **API** (object): *LamdenMasterNode_API*
    - Exposes an instance of the <u>[Masternode API](/docs/develop/lamden_js/masternode_api_wrapper)</u> class
- **online** (boolean):
    - default `false`
    - set with the result of `ping()`
- **version** (integer):
    - use value `2` for an Arko network
    - default: `1`
- **name** (string): *optional*
    - used for reference only
    - A reference name for this network
    - default `lamden network`
- **type** (string): *optional*
    - used for reference only
    - usually `mainnet`, `testnet`
    - default `custom`
- **lamden** (boolean): *optional*
    - used for reference only
    - default `false`
- **currencySymbol** (string): *optional*
    - used for reference only
    - default `TAU`
    - Gives a `token symbol` to the values returned from network's `currency contract`  
- **blockExplorer** (string): *optional*
    - used to get transaction results
    - A URL for keeping track of the block explorer associated with this network.
    - default `undefined` 


### Constructor
Creates an instance using the properties of a `Network Info Object`.

#### Arguments
- **networkInfoObj** (object): 
    - a [Network Info Object](/docs/develop/lamden_js/overview#creating-a-network-object) as described above
    - the `hosts` array is the only mandatory parameter


### validateProtocol(host)
Used to validate the hosts lists contains properly formatted url strings.

#### Arguments
- **host** (string): 
    - a masternode url string

> **Returns** *string*: a validated host string

> **Throws** *error*: is string does not include `https://` or `http://` 


### validateProtocol(host)
Used to validate a masternode url has a protocol prefixed.

#### Arguments
- **host** (string): 
    - a masternode url string

> **Returns** *string*: a validated host string

> **Throws** *error*: is string does not include `https://` or `http://` 

### validateHosts(hosts)
Calls <u>[validateProtocol](/docs/develop/lamden_js/overview#vaidateprotocolhost-1)</u> on an array of masternode urls.

#### Arguments
- **hosts** (array): 
    - an array of masternode url strings

> **Returns** *array*: a validated array of masternode urls


### ping()
Used to set the `online` class member to the online status of the network.

> **Returns** *boolean*: network is online

### getNetworkInfo()
Returns this networks information

> **Returns** 
```javascript
{
    name: this.name,
    lamden: this.lamden,
    type: this.type,
    hosts: this.hosts,
    blockservice_hosts: this.blockservice.hosts,
    url: this.url,
    online: this.online,
    version: this.version
}
```
