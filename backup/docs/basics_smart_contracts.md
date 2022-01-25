---
id: basics_smart_contracts
hide_title: Basics
sidebar_label: Basics
---
  

### 1. How to create a contract

#### 1.1 Components Installation
To create a contract, you need to install the next components. 

```bash 
sudo apt-get update
sudo apt-get upgrade
apt install python3-pip
```

Install Contracting 

```bash 
pip3 install contracting
```
### 1.2 Contract naming standards

While using `Contracting` as a tool for submission smart contract, you are not limited to select a name for the contract. 

If you submit the contract through the `Lamden Vault` or `lamden-js` you need to write a name that has `con_` in the beginning. 

:::caution
The name of the contract must be preceded with `con_`.
:::

For example - `con_my_token`.

### 1.3 Where to code it?
You can write a code of smart contract in any IDE that supports Python, for example PyCharm or Jupyter Notebook.

For this quick `how-to`, we will be using **[Jupyter Notebook](https://jupyter.org/)**. Jupyter is a great tool for Python programmers to develop and explore in as they combine the high feedback of a REPL with the presentation and saving of a program.

If you are a Python programmer, chances are you already have Jupyter installed. If not, follow [this guide](https://jupyter.readthedocs.io/en/latest/install.html) to get started. After that, just start the notebook:

```
jupyter notebook
```

### 1.4 Import the Client
Contracting has a super high-level client that allows you to develop smart contracts without any knowledge of the underlying mechanics of the execution system. This makes it perfect for new comers to the library.

```python
from contracting.client import ContractingClient
client = ContractingClient()
```
If initializing the `client` hangs, that means your database is not running, and Contracting can't connect to where it stores data.

#### 1.4.1 Hello, World!
The following will be our first smart contract. Recreate it in your notebook.

```python
def hello_world():
    @export
    def hello():
        return 'World!'

    @export
    def add(a, b):
        return private_add(a, b)

    def private_add(a, b):
        return a + b
```

Off the bat, notice two things:

 1. The smart contract is a closure (a function inside of a function)
 2. There is an `@export` decorator.

 This will make sense in a bit. For now, notice them, and let's submit this into the smart contracting `state space`.

```python
client.submit(hello_world)
client.get_contracts()
```

```python
>> ['hello_world', 'submission']
```

If the `hello_world` contract now appears in the returned list, you've successfully submitted your first smart contract. Congrats!

:::note
For submitting closures, the name of the contract is automatically taken from the name of the closure. `def my_func():` becomes `my_func` in the smart contract state space, etc.
:::

#### 1.5 How to test smart-contract written in Python
For initial testing, you don't need to deploy any private blockchain or connect to the testnetwork.

For testing you have two options as well.

1. Using `Contracting` by itself, for testing in the command line.
2. Using a Sanic Server that will imitate Blockchain network. 

The example of using Sanic Server.

```bash
pip3 install sanic
``` 

In your IDE create file contracting_server.py

```python
# server/contracting_server.py

from sanic import Sanic, response
import ast

from contracting.db.encoder import encode
from contracting.client import ContractingClient
client = ContractingClient()

with open('my_token.py') as f:
    code = f.read()
    client.submit(code, name='my_token')

app = Sanic("contracting server")

# Make sure the server is online
@app.route("/ping")
async def ping(request):
    return response.json({'status': 'online'})

# Get all Contracts in State (list of names)
@app.route("/contracts")
async def get_contracts(request):
    contracts = client.get_contracts()
    return response.json({'contracts': contracts})

@app.route("/contracts/<contract>")
# Get the source code of a specific contract
async def get_contract(request, contract):
    # Use the client raw_driver to get the contract code from the db
    contract_code = client.raw_driver.get_contract(contract)

    # Return an error response if the code does not exist
    if contract_code is None:
        return response.json({'error': '{} does not exist'.format(contract)}, status=404)

    funcs = []
    variables = []
    hashes = []

    # Parse the code into a walkable tree
    tree = ast.parse(contract_code)

    # Parse out all functions
    function_defs = [n for n in ast.walk(tree) if isinstance(n, ast.FunctionDef)]
    for definition in function_defs:
        func_name = definition.name
        kwargs = [arg.arg for arg in definition.args.args]

        funcs.append({'name': func_name, 'arguments': kwargs})

    # Parse out all defined state Variables and Hashes
    assigns = [n for n in ast.walk(tree) if isinstance(n, ast.Assign)]
    for assign in assigns:
        if type(assign.value) == ast.Call:
            if assign.value.func.id == 'Variable':
                variables.append(assign.targets[0].id.lstrip('__'))
            elif assign.value.func.id == 'Hash':
                hashes.append(assign.targets[0].id.lstrip('__'))

    #Return all Information
    return response.json({
        'name': contract,
        'code': contract_code,
        'methods': funcs,
        'variables': variables,
        'hashes': hashes
    }, status=200)

# Return the current state of a variable
@app.route("/contracts/<contract>/<variable>")
async def get_variable(request, contract, variable):
    # Check if contract exists. If not, return error
    contract_code = client.raw_driver.get_contract(contract)
    if contract_code is None:
        return response.json({'error': '{} does not exist'.format(contract)}, status=404)
    # Parse key from request object
    key = request.args.get('key')
    if key is not None:
        key = key.split(',')

    # Create the key contracting will use to get the value
    k = client.raw_driver.make_key(contract=contract, variable=variable, args=key)

    # Get value
    value = client.raw_driver.get(k)

    # If the variable or the value didn't exists return None
    if value is None:
        return response.json({'value': None}, status=404)

    # If there was a value, return it formatted
    return response.json({'value': value}, status=200, dumps=encode)

@app.route("/", methods=["POST",])
async def submit_transaction(request):
    # Get transaction details
    contract_name = request.json.get('contract')
    method_name = request.json.get('method')
    kwargs = request.json.get('args')
    sender = request.json.get('sender')

    # Set the sender
    client.signer = sender

    # Get reference to contract
    contract = client.get_contract(contract_name)

    # Return error of contract does not exist
    if contract_name is None:
        return response.json({'error': '{} does not exist'.format(contract)}, status=404)

    # Get a reference to the contract method to be called
    method = getattr(contract, method_name)

    # Call method with supplied arguments and return status
    try:
        method(**kwargs)
        return response.json({'status': 0})
    except Exception as err:
        return response.json({'status': 1, 'error': str(err)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3737)
```

## 2. How to submit the smart contract to the Lamden Blockchain Network
There are two ways how it is possible to submit the smart contract.

By means of:

1. Lamden Vault.
2. Lamden-js library

### `Lamden Vault` interface.

You can submit a smart contract through the `Lamden Vault` interface.

1. Open Lamden Vault.
2. At the left sidebar, click on the `Smart Contracts`.
3. In the top of the area with example code, click on the button `New Contract` .
4. Click `SUBMIT TO NETWORK`
5. On the next screen, select the wallet from which you would like to submit the contract.
6. In the field `Name` enter the name of the contract. 
7. Click on the `Confirm Transaction`.

If your smart-contract does not have any errors, it will be submitted without any warnings, and you will get a message that `Contract is Okay`.

### Submission through `Lamden-js` library.

To submit the contract through `lamden.js`, you need to connect to the network and submit a transaction that contains as an argument the contract. The content of the contract should be in string format.

```javascript
{
    contractName: my_first_contract, 
    methodName: submit_contract, 
    kwargs: {
        name: "con_ + name of your contract", 
        code: "your code as a string",
        owner: "usually blank", 
        constructor_args: { a kwargs object with values to supply to you @construct method} 
}

```

### The example of submission smart-contract to the `Lamden Blockchain` by means of `lamden-js`.

```javascript

const lamdenJs = require('lamden-js');

var fs = require("fs");

var contents = fs.readFileSync("./my_token.py").toString('utf-8');

const sender = {
       vk: "ea2cee33f9478d767d67afe345592ef36446ee04f8d588fa76942e6569a53298",
       sk: "69a8db3fb7196debc2711fad1fa1935918d09f5d8900d84c3288ea5237611c03"
  }

const senderSk = sender.sk;

const networkInfo = {
    host: 'http://167.172.126.5',
    port: '18080',
    type: 'testnet'
}
let txInfo = {
    uid:'',
    senderVk: sender.vk,
    contractName:'submission',
    methodName:'submit_contract',
    kwargs:{
        name: "con_my_first_contract",
        code: contents
},
    stampLimit: 150000    
}

let tx = new lamdenJs.TransactionBuilder(networkInfo, txInfo)

//console.log(tx.kwargs)

tx.events.on('response', () => {console.log(tx.getAllInfo())})

tx.send(sender.sk).then(() => tx.checkForTransactionResult())

```
### 2.1 Explanation of the Submission contract

For development purposes, there is a need to verify if your contract passes all requirements of the Blockchain network in terms of compilation; for that reason, you will use the Submission contract.

`Submission contract` is using to mimic the real submission to the Lamden Blockchain network.

#### 2.1.1 How It Works

When a smart contract is submitted, it goes through a particular `submission` smart contract that is seeded at the beginning of the software's lifecycle.

The submission contract is something that bypasses the traditional linting and compilation processes and thus provides a gateway between deeper levels of the Contracting protocol and the `whitelisted` interfaces of the execution environment.

#### submission.s.py
```python
@__export('submission')
def submit_contract(name, code, owner=None, constructor_args={}):
    __Contract().submit(name=name, code=code, owner=owner, constructor_args=constructor_args)
```

The central concept is that generally, \_\_ variables are private and not allowed. However, this code is injected into the state space before the software starts up. Once it is in the state, the `__Contract` object can never be submitted in another smart contract by the user because it will fail.

Calling on the `submit_contract` function will then call `__Contract` which is a particular ORM object. `__Contract`'s only job is to submit contracts.

```python
class Contract:
    def __init__(self, driver: ContractDriver=driver):
        self._driver = driver

    def submit(self, name, code, owner=None, constructor_args={}):

        c = ContractingCompiler(module_name=name)

        code_obj = c.parse_to_code(code, lint=True)

        scope = env.gather()
        scope.update({'__contract__': True})
        scope.update(rt.env)

        exec(code_obj, scope)

        if scope.get(config.INIT_FUNC_NAME) is not None:
            scope[config.INIT_FUNC_NAME](**constructor_args)

        self._driver.set_contract(name=name, code=code_obj, owner=owner, overwrite=False)
```

The code that is submitted is put through the `ContractingCompiler` with the `lint` flag set as true. This causes the code to be run through all of the checks and transformed into pure Contracting code, which has slight variations to the code that the user submits but is used internally by the system.

`__Contract` will then gather the working environment and execute it on the submitted code. This encapsulates the execution environment entirely within the new code module without potential leakage or exposure. The `__contract__` flag is also set to indicate to the Python import system that this code cannot use any builtins at runtime.

`__Contract` will then try to see if there is a `@construct` function available on the code. If this is the case, it will execute this function and pass the constructor arguments into it if any are provided.

Finally, the code string, as compiled, is stored in the state space so that other contracts can import it, and users can transact upon it.

### 2.2 The example of Smart Contract
This is an example of a smart contract from the wallet

```python
def token_contract():
     balances = Hash()
     owner = Variable()
     
     @construct
     def seed():
         owner.set(ctx.caller)

     @export
     def balance_of(wallet_id):
         return balances[wallet_id]

     @export
     def transfer(to, amount):
         balances[ctx.caller] -= amount
         balances[to] += amount
         sender_balance = balances[ctx.caller]

         assert sender_balance >= 0, "Sender balance must be non-negative!!!"

     @export
     def mint(to, amount):
         assert ctx.caller == owner.get(), 'Only the original contract author can mint!'
         balances[to] += amount
```

   
### 2.3 What types of variables can you make (dict, List, single value)

In contracting you can define any variable that available in the Python:

`Dict, List, str, int, Decimal, Boolean, Timedelta, Datetime`.

### 2.3.1 Encoding

All data is encoded in JSON format. This means that you can store `complex` Python types and pull them out for your own use. Lists, tuples, and dictionaries are supported. Python objects are not supported. However, Timedelta and Datetime types are, which is explained in the `Stdlib and Extensions` section in `Key Concepts`.

| Contracting format |  JSON format |
|--------------------|--------------|
|Python dict        | object    |
|Python list        | array |
|Python str     | string    |
|Python int     | number (int)  |
|Python Decimal     | object (special)  |
|Python True        | true  |
|Python False       | false |
|Contracting Timedelta      | object    |
|Contracting Datetime       | object    |

### 2.5 How to declare a variable

   - Setting initial state of variables
   - Setting/changing variable values via methods

```python
def data_contract():
    basic_contract_owner = ForeignVariable(foreign_contract='basic_contract', foreign_name='owner')
    
    # Demonstration of declaring a value
    variable = Variable()
    hash_ = Hash()
    
    # Demonstration of returning a value in another smart contract's namespace
    @export
    def whos_the_owner():
        return basic_contract_owner.get()
    # Demonstration of setting a value to the variable
    @export
    def set_var(x):
        variable.set(x)
    # Demonstration of setting a value to the hash variable  
    @export
    def set_hash(k, v):
        hash_[k] = v
```

## limitations???
