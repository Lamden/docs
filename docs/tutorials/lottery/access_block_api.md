
# Access Block Service API

![image](/img/toturials/access_blockapi_1.png)

This tutorial will get you know how to access **Block Service** api. The **Block Service** is a application for syncing and serving the Lamden Blockchain to a local app. This application serves as starting point to be able to build an app on Lamden that requires easy access to current state and realtime updates. 

<!--truncate-->

[<strong style={{color: "tomato"}}><u>Here is the completed Git repo for this part</u></strong>](https://github.com/Dapiguabc/lottery)


:::caution

The Block Service used in these tutorials **do not provide any guarantee** !!!
As a result, **your should set up your own Block Service**.  [`Click here`](/docs/develop/blockservice/overview) to learn more about the Block Service.

:::

### Display current round data

As a dapp, it's important to show the current lottery round data to users. Luckily the Block Service provides us with some APIs to access the current state of smart contract. 

- [<u>/current/one/:contractName/:variableName</u>](https://docs.lamden.io/docs/develop/blockservice/restful#get-state-of-variable)
- [<u>/current/all/:contractName/:variableName</u>](https://docs.lamden.io/docs/develop/blockservice/restful#get-state-of-variable-1)
 
Open the file `src\helper.js`. There are two methods `getVariable()` and `getAllVariable`, which are the wrappers of the two APIs mentioned above.
We'll use these two methods to retrieve the current states of smart contract.

```js
/** Return current state of a contract variable for smart contract 
 * @param {string} contract 
 * @param {string} variableName 
 * @param {any[]} keys
 * @param {any} default_value 
 **/
export async function getVariable(contract, variableName, keys, default_value) {
  try {
      let url = `http://${Network[process.env.NODE_ENV].blockService}/current/one/${contract}/${variableName}`;
      if (keys.length > 0) {
          url = `${url}/${keys.join(':')}`
      }
      const res = await fetch(
          url, {
              method: 'GET',
          },
      )
      if (res.status === 200) {
          let json = await res.json()
          let value = json.value
          if (value || value===0) {
              if (value.__fixed__) return new BigNumber(value.__fixed__)
              else return value
          } else {
              return default_value
          }
      } else {
          return default_value
      }
  } catch (error) {
      return default_value;
  }
}

/** Return all the state of a contract variable
 * @param {string} contract 
 * @param {string} variableName 
 * @param {any[]} keys
 **/
export async function getAllVariable(contract, variableName, keys) {
    try {
        let url = `http://${Network[process.env.NODE_ENV].blockService}/current/all/${contract}/${variableName}`;
        if (keys.length > 0) {
            url = `${url}/${keys.join(':')}`
        }
        const res = await fetch(
            url, {
                method: 'GET',
            },
        )
        if (res.status === 200) {
            return res.json()
        } else {
            return {}
        }
    } catch (error) {
        return {};
    }
}
```

Let us open the file `src\Pages\Home\Play.jsx`. First we should know the newest round number of lottery. 
Copy the below code into the file. It will get the newest round number when the component is mounted.

```js
useEffect(() => {
    getVariable(contract, "current_round", [], 0).then((res) => setCurrentRound(2))
}, [])
```

Now that we have known what is the newest round. Next we will fetch the whole data of the newest round.

:::info

The timezone on the Lamden Blockchain is always UTC+0 so that we should convert the date from blockchain to local date.

:::

```js
useEffect(() => {
    const convertDate = (dateArr) => {
        let date = new Date(...dateArr)
        date.setMonth(date.getMonth() - 1)
        return changeTimeZone(date).toLocaleString()
    }

    getAllVariable(contract, "rounds", [currentRound])
    .then((res) => {
        let data = res[contract]["rounds"][currentRound.toString()]
        data.endTime = convertDate(data.endTime.__time__)
        data.startTime = convertDate(data.startTime.__time__)
        data.roundNumber = currentRound

        let statistics = {
            restPrize: 0,
            totalBetAmount: 0,
            Banana: 0, 
            Grape: 0,
            Lemon: 0,
            Orange: 0,
            Peach: 0,
            Pineapple: 0
        }

        for (let key in data.betInfo) {
            for (let item of data.betInfo[key]) {
                statistics[key] = new BigNumber(item.amount.__fixed__ || item.amount).plus(statistics[key])
            }
            statistics.totalBetAmount = new BigNumber(statistics[key]).plus(statistics.totalBetAmount)
        }
        if (currentRound)
        setRound(r => {
            // Don't update
            if (r.roundNumber > data.roundNumber) return r

            statistics.restPrize = r.statistics.restPrize
            return {
                ...data,
                statistics
            }
        })
    })

    getVariable(contract, "total", [], 0).then((res) => {
        setRound(r => {
            r.statistics.restPrize = res
            return r
        })
    })
}, [currentRound])
```

Save the changes and you would see:

![image](/img/toturials/access_blockapi_1.png)


Please click the button `Buy Tickets`, you'll see the back of draw card.

![image](/img/toturials/access_blockapi_2.gif)


### Display Tau Balance

You will notice that the balance is 0, but your actual balance is not 0.
You need to add some new code to make the balance display correct.

```js
useEffect(() => {
    if (!showCover) {
        getVariable("currency", "balances", [wallet.account], 0).then((res) => setWallet(w => ({
            ...w,
            tauBalance: res.toString()
        })))
    }
}, [showCover, wallet.account, setWallet])

```

Save the new changes and take a look!

![image](/img/toturials/access_blockapi_3.png)


### Display History

Click the tab button `Claim`. Then you will find nothing about the bet history.

![image](/img/toturials/access_blockapi_4.png)


We can get current states of lottery contract by calling the Block Service APIs and then display them to suers.
So that users can easily figure out what rounds they have played so far.

The first thing that we need to do is to get to know what rounds users have played. So we can get the value of **user_rounds**.
Open the file `src\Pages\Home\Claim.jsx` and copy the code into the component "Claim".

```js
useEffect(() => {
    getVariable(contract, "user_rounds", [wallet.account], [])
    .then((res) => setUserRounds(res))
}, [wallet.account])
```

Next get all lottery data, and then filter out the lottery data that the user has played.

```js
useEffect(() => {
    // Conver date to local date
    const convertDate = (dateArr) => {
        let date = new Date(...dateArr)
        date.setMonth(date.getMonth() - 1)
        return changeTimeZone(date).toLocaleString()
    }

    if (userRounds.length > 0 && wallet.account) {
        getAllVariable(contract, "rounds", [])
        .then((res) => {
            if (res === {}) return

            let betList = []

            let data = res[contract]["rounds"]
            for(let i of userRounds) {
                let round = i.toString()
                data[round].endTime = convertDate(data[round].endTime.__time__)
                data[round].startTime = convertDate(data[round].startTime.__time__)
                data[round].id = round

                for(let k in data[round].betInfo) {
                    let amount = 0
                    for(let b of data[round]['betInfo'][k]){
                        if (b.buyer === wallet.account) {
                            amount = new BigNumber(b.amount.__fixed__ || b.amount).plus(amount)
                        }
                    }
                    data[round]['betInfo'][k] = amount.toString()
                }
                betList.push(data[i])
            }
            setBetInfo(betList)
        })
    } else {
        // Reset the betinfo if wallet connection disconnect 
        setBetInfo([])
    }
}, [userRounds, wallet.account])
```

Save the changes above to file `src\Pages\Home\Claim.jsx` and take a look !!!

![image](/img/toturials/access_blockapi_5.png)