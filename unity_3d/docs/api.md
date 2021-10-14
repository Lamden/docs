# API Calls
Once a wallet has been generated or loaded API calls can be made through the `MasterNodeApi` is added to the `LamdenManager` gameobject. As the network calls are performed using cooroutines the `MasterNodeApi` must be called attached to a gameobject. The basic structure on all the API calls is to execute an `Action` after the request has been executed and return the results in the action arguments.  The first argument in the `Action` will be a `bool` that indicates if the request was successful.  The other arguments generally contain more infomation and are specific to the action.

There are several useful API calls built into the `MasterNodeApi` script:


## Ping
| Method Signature |	Purpose	|
|--------------------|--------------|
|`PingServer(Action<bool, string> callBack)`		| Calls the `<master node>/ping` API to determine if the network is up	|


| Argument Type |	Purpose	|
|---------------|---------------|
| `bool` | string	|
| `string` | |

***

## Get Currency Balance
| Method Signature |	Purpose	|
|--------------------|--------------|
|`GetCurrencyBalance(string key, Action<bool, float> callBack)`	| Retreives the account balance of for the wallet from the server	|


| Argument Type |	Purpose	|
|---------------|---------------|
| `key` | The VK of the wallet for the request	|

| Return Type |	Purpose	|
|---------------|---------------|
| `bool` | `true` = call successful, `false` = call failed	|
| `float` | Successful: The balance of the wallet for a  request, Failed: `-1` |

***

## Get Stamp Ratio
| Method Signature |	Purpose	|
|--------------------|--------------|
|`GetStampRatio(Action<bool, int> callBack)`	| Get the number of stamps per 1 TAU (stamps are the fee that the sender of the transaction pay for it to be processed)	|


| Return Type |	Purpose	|
|---------------|---------------|
| `bool` | `true` = call successful, `false` = call failed	|
| `int` | Successful: The number of stamps per 1 TAU, failed: `-1` |

***


## Get Max Stamps
| Method Signature |	Purpose	|
|--------------------|--------------|
|`GetMaxStamps(string key, Action<bool, int> callBack)`	| Get the maximum number of stamps a user could spend (stamp ratio * currency balance)	|

| Argument Type |	Purpose	|
|---------------|---------------|
| `key` | The VK of the wallet for the request	|

| Return Type |	Purpose	|
|---------------|---------------|
| `bool` | `true` = call successful, `false` = call failed	|
| `int` | Successful: The maximum stamps the user could spend, failed: `-1` |

***

# Sending Transactions

While the methods for sending a transaction are exposed via the `MasterNodeApi` the plugin has a speical class called `Transaction` to execute smart contracts on the Lamden blockchain. Simple create a new instance of the class passing all the needed variables into the class contstructor and the transaction will be started.

| Constructor Signature |	Purpose	|
|--------------------|--------------|
|`Transaction(MasterNodeApi node, TxInfo ti, Action<TransactionStatus, TxResponse> action)`	| Submit a transaction to the Lamden network via a Masternode.	|

| Argument Type |	Purpose	|
|---------------|---------------|
| `node` |  Reference to the MasterNodeApi that has been attached to an active gameobject in the scene	|
| `ti` | An instance of the `TxInfo` class, more on that below... |
| `action` | The action that will be executed after the call to the server was made |

| Return Type |	Purpose	|
|---------------|---------------|
| `TransactionStatus` | Current status of the transaction `enum TransactionStatus { Error, Sending, SubmittedProcessing, Completed  };`	|
| `TxResponse` | Instance of the TxReposnse, more on that below... |

***

When as transaction is called and executed successfully will move from `Sending` to `SubmittedProcessing` and then finally to `Completed`. At any point it could change to `Error` if there was a failure with the execution.  These different states can be used to update the GUI and let the users know the status of the request.  The average for the transaction to be completed is between 400 and 1000 ms which is very fast compared to other blockchains. 

When submitting a transaction details are requried that will depend on the contact that is being executed and these detailed are stored int the `TxInfo` class.  Below is an example `TxInfo`:

```java
TxInfo txInfo = new TxInfo()
{
    sender = wallet,  // 'public Wallet sender' is wallet that will be the ctx.sender in the contract
    contractName = "con_values_testing",  // 'public string contractName' is the name of the contract
    methodName = "test_values", // 'public string methodName' is the name of the method that will be executed in the contract
    stampLimit = 100,  // 'public int stampLimit' the maximum number of stamps (fee) that the user is willing to pay to execute the contract method
    kwargs = new Dictionary<string, KwargType>  // The argument name and arguments that will be passed into the method of the contact
    {
        {"UID", new KT_UID("testing2")},
        {"Str", new KT_String("this is another string")},
        {"Float", new KT_Numeric(1.1f)},
        {"Int", new KT_Int(2)},
        {"Bool", new KT_Bool(false)},
        {"Dict", new KT_Dict(new Dictionary<string, KwargType>{ {"test", new KT_String("my test")}})},
        {"List", new KT_List(new List<KwargType>{ new KT_Numeric(1.2f), new KT_String("test2")})},
        {"ANY", new KT_Numeric(1.1f) },
        {"DateTime", new KT_DateTime(DateTime.Now)},
        {"TimeDelta", new KT_TimeDelta(4898)}
    }
};
```
Note all the `KT_` classes hold the specific contract argument types that relate the Python code.  The above examples relates to the smart contract called [on_values_testing](http://167.172.126.5:18080/contracts/con_values_testing) that accepts one of every argument type for testing.  The `kwargs` variable will need to match the arguments of the contract with names and types.

After the transaction has been sumbitted the status will be returned the `Action` passed into the transaction contructor.  I like using lamba expressions for the `Action` below is an example that updates a text field as the transaction is processed.

```java
Transaction tx = new Transaction(lamdenTest.masterNodeApi, txInfo, (Transaction.TransactionStatus txStatus, TxResponse txResponse) => {
    if (txStatus == Transaction.TransactionStatus.SubmittedProcessing)
        txtStatus.text = "Sumbitted and processing...";

    if (txStatus == Transaction.TransactionStatus.Completed)
        txtStatus.text = "Processed successfully!";

    if (txStatus == Transaction.TransactionStatus.Error)
        txtStatus.text = txResponse.error;
});
```

The `TxResponse` class will contain extra infomation about the transaction including the updated state of the contract. 

```java
public class TxResponse
{
    public string success ="";
    public string hash = "";
    public string error = "";
    public CheckTransactionData transactionData;
}
```

If the transaction `TransactionStatus` returned as error there will be more information in the `TransactionStatus.error` string.  If the transaction status was returned as `Completed` the `TransactionStatus.transactionData` will contain a lot of data about the transacation that was completed held in the `CheckTransactionData` class. Below is the JSON data that is returned.


```json
{
   "hash":"e05c4e5024bca67dcf7a8688f10692af435b3f7466cd06ed9596e9097b0a65e4",
   "result":"None",
   "stamps_used":18,
   "state":[
      {
         "key":"currency.balances:960c002a36c30c3aec8bc670e9b8b40eebcfd545f4e9237579fd7395a21ccebb",
         "value":{
            "__fixed__":"98.1"
         }
      },
      {
         "key":"currency.balances:4680c6ea89ffc29b0b670a5712edef2b62bc0cf40bfba2f20bbba759cdd185b9",
         "value":{
            "__fixed__":"101.0"
         }
      }
   ],
   "status":0,
   "transaction":{
      "metadata":{
         "signature":"d15ec95533cd930628a4190594ed1ca6587a199cfac744059a7ada1a099bd7a12f5b96318c332efbdf7eeaf091b3afab466a689d594d317a996612c30e8ec908",
         "timestamp":1600749858
      },
      "payload":{
         "contract":"currency",
         "function":"transfer",
         "kwargs":{
            "amount":{
               "__fixed__":"1.0"
            },
            "to":"4680c6ea89ffc29b0b670a5712edef2b62bc0cf40bfba2f20bbba759cdd185b9"
         },
         "nonce":0,
         "processor":"89f67bb871351a1629d66676e4bd92bbacb23bd0649b890542ef98f1b664a497",
         "sender":"960c002a36c30c3aec8bc670e9b8b40eebcfd545f4e9237579fd7395a21ccebb",
         "stamps_supplied":100
      }
   }
}
```

