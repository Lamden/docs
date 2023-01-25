
# Blockservice Installation


### Preparation
1. [<u>Mongodb</u>(version > 4.0)](httpv://www.mongodb.com/docs/manual/installation/)
2. Python Estimation Script. Click [<u>here</u>](/docs/develop/blockservice/estimation_installation) to figure out how to install it (Optional).


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
git clone https://github.com/Dapiguabc/lamden_block_service.git
cd lamden_block_service
```

### Config Blockservice
You can custom blockservice by creating/editing  ```.env``` file at the root of the project folder.  Click [<u>here</u>](/docs/develop/blockservice/config) to get more details.


### Build project

```
docker-compose build # build docker image
```

### Run

```
docker-compose up -d
```

### Graphql Support
Now blockserivce support graphql. After you deploy your blockservice, you can access the graphql playground to experience it. The graphql playground link is `{your block service host}/graphql`

![image](/img/graphql.png)


### Sync Chain Data (Optional)
The first time you run the block service, it will take long time to sync blocks data. In order to avoid waiting for so long, you can use
[<u>mongodump</u>](https://www.mongodb.com/docs/database-tools/mongodump/#mongodb-binary-bin.mongodump) to export data from another block service to you own block service.


