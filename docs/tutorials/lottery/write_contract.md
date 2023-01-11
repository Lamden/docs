# Write Lottery Contract


Make sure python contracting package installed before you start this tutorial.

Check [this link](https://contracting.lamden.io/#installing) to get more details.


[<strong style={{color: "tomato"}}><u>Here is the completed Git repo for this part</u></strong>](https://github.com/Dapiguabc/lottery)

There are only a few things that we need to do in a lottery.

1. Buy a lottery ticket
2. Randomly pick the winner
3. Get payout
4. Repeat the lottery game

<!--truncate-->

### 1. Initialization

We need to create some instance variables to manage the state of the lottery.
You can understand their role through the comments in the following code.

```python
owner = Variable() # the owner of this contract
current_round = Variable() # Indicates the current lottery round
min_amount = Variable() # Minimum purchase amount for a ticket
interval_seconds = Variable() # 
genesis_round_run =  Variable() # Indicates whether the first round of the lottery has started
total = Variable() # The lottery jackpot
tickets = Variable() # self-explanatory

rounds = Hash() # Lottery info
user_rounds = Hash() # Save the round number of the lotteries we've played so far

``` 
Then, we need to seed our lottery contact with some initial states. 

```py
@construct
def seed():
    owner.set(ctx.caller) # set owner to the submitter of this contract
    min_amount.set(1) # set min purchase amount to 1 tau
    interval_seconds.set(3600) # one hour
    current_round.set(1) # set initial round number to 1
    genesis_round_run.set(False) # default false
    total.set(0) # default 0
    tickets.set(['Banana', 'Grape', 'Lemon', 'Orange', 'Peach', 'Pineapple'])
```

The `seed` method with the `@construct` decorator will execute **only once** when the contract is submitted. We can use this method to set up some initial states.

### 2. Run a lottery

Let's run a lottery now! First we need to create a method to end the current lottery round and start the next.

<Tabs>
<TabItem value="1" label="run()">

The method `run()` is used to start next and end the current round. Only owner has the right to call it.

```py
@export         
def run():
    # Only owner can call this method
    assert owner.get() == ctx.caller, 'Only owner can execute start method.' 

    current = current_round.get()

    # For genesis round, don't need to end last round and calculate the rewards.
    if not genesis_round_run.get():
        start_round(current)
        genesis_round_run.set(True)
        return

    # End last round
    end_round(current)

    # Calculate rewards
    calculate_rewards()

    # Increment current round to next round
    next_round = current + 1
    current_round.set(next_round)

    # start next round
    start_round(next_round)
```

</TabItem>
<TabItem value="2" label="end_round() / start_round()">

**Note** that the `start_round()` and `end_round()` methods without any decorators are both private methods.
They can only be used internally by this lottery contract.

There is a special variable called **now**  in the blockchain which will be the current time in a transaction.
Learn more about the **now** click [<u>here</u>](https://contracting.lamden.io/concepts/time/).

```py
def start_round(round_num: int):
    # Get current time
    now_time = now
    # Set start time
    rounds[round_num, "startTime"] = now_time
    # Set end time
    rounds[round_num, "endTime"] = now_time + datetime.timedelta(seconds=interval_seconds.get())
    rounds[round_num, "status"] = "Starting"

    for ticket in tickets.get():
        rounds[round_num, "betInfo", ticket] = []

def end_round(round_num: int):
    # Make sure this round can be ended.
    assert rounds[round_num, "endTime"] is not None and rounds[round_num, "endTime"] < now, \
        f"Round #{round_num} not ended"

    # Mark this round is ended
    rounds[round_num, "status"] = "Ended"
```

</TabItem>
<TabItem value="3" label="calculate_rewards()">

As you can see, we use the module random to draw a winning ticket. 
**Note that the method `random.seed()` need to be run once per transaction. Otherwise, the transaction will fail.**
Besides the method `seed()`, the rest of the module follows Python random 1:1. Learn more about the **random** click [<u>here</u>](https://contracting.lamden.io/concepts/randoms/).

```py
def calculate_rewards():

    current = current_round.get()

    # Called once per transaction
    random.seed()
    # Calculate the winning ticket
    winning_ticket = tickets.get()[random.randint(1,6)]

    winner_bet_amount = 0
    total_amount = 0

    for ticket in tickets.get():
        for value in rounds[current, "betInfo", ticket]:
            if winning_ticket == ticket:
                winner_bet_amount = winner_bet_amount + value.get('amount')
            total_amount = total_amount + value.get('amount')
    # total amount of all winners in this round
    rounds[current, "winnerBetAmount"] = winner_bet_amount
    # total sales this round
    rounds[current, "totalAmount"] = total_amount
    # total prize in this round
    rounds[current, "totalAwards"] = total_amount + total.get()
    # Winning tickets
    rounds[current, "winTicket"] = winning_ticket

    if winner_bet_amount > 0:
        # If winner exists, empty the prize pool
        total.set(0)
    else: 
        # If there is no winner, the bonus will be accumulated into the prize pool
        total.set(total.get() + total_amount)
```

</TabItem>
</Tabs>


Wow, now we can buy a lottery ticket!

```py
@export
def buy(ticket: str, amount: float, round_num: int):
    # Check whether the ticket is correct.
    assert ticket in tickets.get(), f'Ticket #{ticket} not exists'
    # Ensure the amount is larger than or equal to the minimum purchase amount.
    assert amount >= min_amount.get(), f'At least {min_amount.get()} Taus are required.'
    
    # nsure the specified round has started
    assert rounds[round_num, "startTime"] is not None and rounds[round_num, "startTime"] <= now, \
        f'Round #{round_num} not started'
    # Ensure the specified round not ended
    assert rounds[round_num, "endTime"] is not None and rounds[round_num, "endTime"] >= now, \
        f'Round #{round_num} has ended'

    caller = ctx.caller

    # transfer the funds of the caller to this contract
    currency.transfer_from(amount=amount, to=ctx.this, main_account=caller)

    # Store bet info 
    rounds[round_num, "betInfo", ticket].append({
        'buyer': caller,
        'amount': amount
    })
    rounds[round_num, "betInfo", ticket] = rounds[round_num, "betInfo", ticket]

    # Inital
    if user_rounds[caller] is None:
        user_rounds[caller] = []
    
    # Store the round numbers that the caller played
    if round_num not in user_rounds[caller]:
        user_rounds[caller].append(round_num)
        # Ensure data stored 
        user_rounds[caller] = user_rounds[caller]
```

Finally, we can claim our winnings by calling the method `claim()`. Make sure the current lottert round is ended and the player
is eligible for claim.

```py
@export
def claim(round_num: int):
    caller = ctx.caller
    # Check whether the round is ended 
    assert rounds[round_num, "status"] == "Ended", f"Claim failed, round #{round_num} not ended"
    # Check whether you have claimed your winnings
    assert not rounds[round_num, caller, "claimed"], "You have claimed for this round"

    # Do calculations
    winning_ticket = rounds[round_num, "winTicket"]
    bet_amount = 0
    for value in rounds[round_num, "betInfo", winning_ticket]:
        if value.get('buyer') == caller:
            bet_amount = bet_amount + value.get('amount')

    # Check whether you won the prize
    assert bet_amount > 0, "Not eligible for claim"

    winner_bet_amount = rounds[round_num, "winnerBetAmount"]
    total_amount = rounds[round_num, "totalAmount"]
    rewards = (bet_amount / winner_bet_amount) * total_amount
    rounds[round_num, caller, "claimed"] = True

    # transfer the prizes to caller
    currency.transfer(amount=rewards, to=caller)
```

### 3. Schedule a job

**Unfortunately, we can not schedule a job in Lamden Blockchain at present**. 
In order to run a lottery regularly, we need a script to call the method `run()` of the lottery contract.

Create file `schedule.py`. Install python package **lamden** and **requests**.

```
pip install lamden
pip install requests
```

Next copy the following code into `schedule.py`.
Update the value of these variables `my_wallet`, `masternode_url` and `contract` with you own.

```py
# Import libraries
from lamden.crypto.wallet import Wallet
from lamden.crypto.transaction import build_transaction
import requests

def run():
    # Create wallet
    my_wallet = Wallet('<Private key>')

    # Get Nonce
    # mainnet: https://masternode-01.lamden.io
    # testnet: https://testnet-master-1.lamden.io
    masternode_url = 'Master node url'

    res = requests.get(f'{masternode_url}/nonce/{my_wallet.verifying_key}')

    nonce = res.json()['nonce']
    processor = res.json()['processor']

    stamps = 200 

    # Pushing a transaction is similar to intracting with smart contracts via the client
    contract = 'Your contact name'
    function = 'run'

    tx = build_transaction(
            wallet=my_wallet,
            processor=processor,
            stamps=stamps,
            nonce=nonce,
            contract=contract,
            function=function,
            kwargs={}
        )

    # You can submit the transaction through any Python HTTP library
    response = requests.post(masternode_url, data=tx, verify=False)

if __name__ == '__main__':
    run()
```

It's time to schedule a job to run this python script every 1 hour. You can choose whatever timing tools you like.
For me, I will use **crond** which is a computer program in **Linux** that can be used to make a computer do tasks at specific time intervals.

Execute following command in shell. It will open the editing interface.

```bash
crontab -e
```

Add following code to the end. This code will let the system know when to run the `schedule.py` script.

```bash
0 */1 * * * python3 /<your_path>/schedule.py
```


### 4. Writing Tests

In order to test whether the lottery contract works, we need to write some tests.
Here is the entire unittest file:

```py
import imp
import unittest
from contracting.client import ContractingClient
from contracting.stdlib.bridge.time import Timedelta


class MyTestCase(unittest.TestCase):
     # Will be called before per test
    def setUp(self):
        self.client = ContractingClient()
        self.client.flush()
        
        # Submit the currency contract as the dependency of lottert contact
        with open('currency.py') as f:
            code = f.read()
            self.client.submit(code, name='currency')

        # Submit the lottery contract
        with open('./lottery.py') as f:
            code = f.read()
            self.client.submit(code, name='lottery')

        self.lottery = self.client.get_contract('lottery')
        self.currency = self.client.get_contract('currency')

    # Will be called after per test
    def tearDown(self):
        # Reset the contracting client
        self.client.flush()

    # Test seed method 
    def test_seed(self):
        self.assertEqual(self.lottery.quick_read('min_amount'), 1)
        self.assertEqual(self.lottery.quick_read('interval_seconds'), 3600)
        self.assertEqual(self.lottery.quick_read('current_round'), 1)
        self.assertFalse(self.lottery.quick_read('genesis_round_run'))

    def test_buy_error(self):
        self.lottery.run()
        self.currency.approve(amount=1000, to='lottery', signer='dapiguabc')

        # Should raise error if ticket is incorrect
        with self.assertRaisesRegex(AssertionError, 'Ticket #ErrorTicket not exists'):
            self.lottery.buy(ticket = 'ErrorTicket', amount = 10, round_num = 1, signer='dapiguabc')
        
        # Should raise error if amount is less than the min purchase amount
        with self.assertRaisesRegex(AssertionError, 'At least 1 Taus are required'):
            self.lottery.buy(ticket = 'Banana', amount = 0, round_num = 1, signer='dapiguabc')

        # Should raise error if the lottery round is not started
        with self.assertRaisesRegex(AssertionError, 'Round #2 not started'):
            self.lottery.buy(ticket = 'Banana', amount = 10, round_num = 2)

    # Test whether we can buy a ticket successfully
    def test_buy(self):
        self.lottery.run()
        self.currency.approve(amount=1000, to='lottery', signer='dapiguabc')
        self.lottery.buy(ticket = 'Banana', amount = 10, round_num = 1, signer='dapiguabc')
        
        self.assertEqual(self.lottery.user_rounds['dapiguabc'], [1])
        self.assertEqual(self.lottery.rounds[1, 'betInfo', 'Banana'][0], {
            'buyer': 'dapiguabc',
            'amount': 10
        })

    # Test whether we can end current round and start next
    def test_run_next_round(self):
        self.lottery.run()
        self.currency.approve(amount=1000, to='lottery', signer='dapiguabc')
        self.lottery.buy(ticket = 'Banana', amount = 10, round_num = 1, signer='dapiguabc')
        print(self.lottery.quick_read('current_round'))
        env = {'now': self.lottery.now() + Timedelta(seconds=100000)}
        self.lottery.run(environment=env)
        self.assertEqual(self.lottery.quick_read('current_round'), 2)

    # Test whether we can claim the prize
    def test_claim(self):
        self.lottery.run()
        self.currency.approve(amount=1000, to='lottery', signer='dapiguabc')

        # Buy the all tickets to make we can be the winner.
        self.lottery.buy(ticket = 'Banana', amount = 10, round_num = 1, signer='dapiguabc')
        self.lottery.buy(ticket = 'Grape', amount = 10, round_num = 1, signer='dapiguabc')
        self.lottery.buy(ticket = 'Lemon', amount = 10, round_num = 1, signer='dapiguabc')
        self.lottery.buy(ticket = 'Orange', amount = 10, round_num = 1, signer='dapiguabc')
        self.lottery.buy(ticket = 'Peach', amount = 10, round_num = 1, signer='dapiguabc')
        self.lottery.buy(ticket = 'Pineapple', amount = 10, round_num = 1, signer='dapiguabc')

        # Mock the env time to make the current round ended. 
        env = {'now': self.lottery.now() + Timedelta(seconds=100000)}
        self.lottery.run(environment=env)

        self.assertFalse(self.lottery.rounds[1, 'dapiguabc', "claimed"])

        self.lottery.claim(round_num=1, signer='dapiguabc')

        self.assertTrue(self.lottery.rounds[1, 'dapiguabc', "claimed"])


if __name__ == '__main__':
    unittest.main()  
```

### Deployment

After this you should have a contract ready to be deployed on the blockchain.
It's easy to manually upload the lottery contract through [<u>**Lamden Vault**</u>](https://chrome.google.com/webstore/detail/lamden-vault-browser-exte/fhfffofbcgbjjojdnpcfompojdjjhdim).

Open your lamden vault and click the item `Smart Contracts` on the left sidebar.

![image](/img/toturials/contract_deploy_1.png)

Next you should click button `SUBMIT TO NETWORK` to upload your contract.

![image](/img/toturials/contract_deploy_2.png)

Finally, click the button `SUBMIT CONTRACT` on the bottom of the modal and wait a minute to check the result.
Unless something unexpected happens, you'll see that your contract is deployed on the blockchain. 

![image](/img/toturials/contract_deploy_3.png)
![image](/img/toturials/contract_deploy_4.png)
