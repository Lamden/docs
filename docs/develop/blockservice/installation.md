
# Blockservice Installation


## Preparation
1. [<u>Mongodb</u>(version > 4.0)](httpv://www.mongodb.com/docs/manual/installation/)
2. Python Estimation Script. Click [<u>here</u>](/docs/develop/blockservice/estimation_installation) to figure out how to install it (Optional).


## Install Docker

```
curl -fsSL https://get.docker.com | bash -s docker
```

## Install Docker-compose

You can get the latest release at [here](https://github.com/docker/compose/releases)

```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

## Install Blockservice

Clone this project
```
git clone https://github.com/Lamden/lamden_block_service.git
cd lamden_block_service
```

## Configure
All configuration is done by an `.env` file which you need to create in the root of the application folder.
Add these variables to the `.env` to set the following options, `defaults are highlighed`.  
These variables can also be set in any other means you would set an environment variable or pass one into a nodejs app.
Restart the app for these setting to take effect.

### Lamden configuration items
- NETWORK `testnet`: Which Lamden network to sync
- MASTERNODE_URL `https://testnet-master-1.lamden.io`: A URL of a lamden masternode
- GENESIS_BLOCK_URL (optional): a genesis block url if different than the default Lamden Testnet or Lamden Mainnet genesis blocks

### Mongo DB configuration items
- DBUSER `null`: database user
- DBPWD `null`: database password
- AUTHSOURCE `admin`: auth source if using a user and password
- DBURL `127.0.0.1`: database URL
- DBPORT `27017`: database port
- DBNAME `${NETWORK}-blockservice`: the name of the database. Default is too add `-blockservice` to the value of the `NETWORK` variable which defaults to `testnet`

### Runtime options
- DEBUG_ON `false`: outputs some logs while grabbing blocks


### Server options
- BLOCKSERVICE_PORT `3535`: The port used for the webserver and websockets
- BLOCKSERVICE_HOST `localhost`: Api bind host

### Api Rate Limit
you can limit the number of api calls for each ip. **This feature is turned off by default.**

- RATE_LIMIT_ENABLE `0`: Enable:1 Disable:0
- RATE_LIMIT_PERIOD `600000`: Time frame for which requests are checked, defaults units is ms
- RATE_LIMIT_NUM  `10`: number of api calls


### Misc options
- APIDOC_PORT `8999`: Api document port.
- SCRIPT_SOCKET_CONN `http://localhost:3232`: Estimation script socket server connection.
- LOG_LEVEL  `info`: Log level. 
    - 'info' - Displays all messages from all loggers.
    - 'timer' - Displays messages only from the time, timeEnd, debug, warn, error & fatal loggers.
    - 'debug' - Displays messages only from the debug, warn, error & fatal loggers.
    - 'warn' - Displays messages only from the warn, error & fatal loggers.
    - 'error' - Displays messages only from the error & fatal loggers.

### Build project

```
docker-compose build # build docker image
```

### Run

```
docker-compose up -d
```

### Restart

If you have changed anything of block service, you should first rebuild the project. 
Otherwise, forgot it.

```
docker-compose up --detach --build
```

Then restart your project
```
docker-compose restart
```

### Stop 
```
docker-compose stop
```

### Uninstall
Stop and remove your container
```
docker-compose down
```

### View Logs
```
docker-compose logs -f
```

You can output number of lines to show from the end of the logs.

```
docker-compose logs --tail=200 -f
```

you can also show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)
```
docker-compose logs --since 42m
```


### Graphql Support
Now blockserivce support graphql. After you deploy your blockservice, you can access the graphql playground to experience it. The graphql playground link is `{your block service host}/graphql`

![image](/img/graphql.png)


### Sync Chain Data (Optional)
The first time you run the block service, it will take long time to sync blocks data. In order to avoid waiting for so long, you can use
[<u>mongodump</u>](https://www.mongodb.com/docs/database-tools/mongodump/#mongodb-binary-bin.mongodump) to export data from another block service to you own block service.


