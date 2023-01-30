
# Blockservice Installation


### Preparation
1. [<u>Mongodb</u>(version > 4.0)](httpv://www.mongodb.com/docs/manual/installation/)
2. Python Estimation Script. Click [<u>here</u>](/develop/blockservice/estimationScriptInstallation/) to figure out how to install it (Optional).


### Install Docker

```
curl -fsSL https://get.docker.com | bash -s docker
```

### Install Docker-compose

You can get the latest release at [here](https://github.com/docker/compose/releases)

```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### Install Blockservice

Clone this project
```
git clone https://github.com/lamden/lamden_block_service.git
cd lamden_block_service
```

### Config Blockservice
You can custom blockservice by creating/editing  ```.env``` file at the root of the project folder.  Click [<u>here</u>](/docs/develop/blockservice/config) to get more details.

```bash
nano .env
```

Use these values for Arko Mainnet

```bash
NETWORK=mainnet   
MASTERNODE_URL=http://127.0.0.1:18080
RATE_LIMIT_ENABLE=1
RATE_LIMIT_PERIOD=5000
RATE_LIMIT_NUM=20
```

Save file:
- Press `CTRL + X`
- Press `y`
- Press `Enter`

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


