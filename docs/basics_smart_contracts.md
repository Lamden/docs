---
id: basics_smart_contracts
title: Basics
sidebar_label: Basics
---
  

### How to create a contract

For contract creation you need to install next components. 

```bash 
sudo apt-get update
sudo apt-get upgrade
apt install python3-pip
```

Install Contracting 

```bash 
pip3 install contracting
```


#### Where to code it?
You can write a code of smart contract in any IDE that supports Python, for example PyCharm.


#### How to test it
For initial testing you don't need to deploy any private blockchain or connect to the testnetwork.

You can use Sanic Server.

```bash
pip3 install sanic
``` 

In your IDE creat file contracting_server.py


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

    # Get reference to the contract method to be called
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

#### How to upload it

You can submit smart contract through the Lamden Wallet interface.

1. Open Lamden wallet.
2. At the left sidebar click on the `Smart Contracts`.
3. In the top of area with example code, click on the button `New Contract` .
4. Click `SUBMIT TO NETWORK`
5. On the next screen select the wallet from which you would like to submit the contract.
6. In the field `Name` enter the name of the contract. 
7. Click on the `Confirm Transaction`.

If your smart-contract does not have any errors it will be submitted without any warnings and you will get a message that `Contract is Okay`.


### Explanation of the Submission contract

The submission contract means that you contract was saved in the blockchain and if your smart contract has public functions you can call them externally.

### Explain all methods and state variables (make sure code is also commented properly)

This is an example of smart contract from the wallet

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

### Could even have a link to this doco as a comment at the top of the contract code

How to declare a variable

What types of variables can you make (dict, List, single value)
limitations
What variable would be better for certain situations
Setting initial state of variables
Setting/changing variable values via methods
Contract naming standards, limitations
Must be preceded with con_
