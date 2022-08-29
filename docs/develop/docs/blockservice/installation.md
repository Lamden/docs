---
id: installation
title: Blockservice Installation
sidebar_label: Blockservice Installation
---

# Blockservice Installation

### Preparation
1. [<u>Mongodb</u>(version > 4.0)](httpv://www.mongodb.com/docs/manual/installation/)
2. [<u>Nodejs and NPM</u>](https://nodejs.org/en/)
3. Python Estimation Script. Click [<u>here</u>](/blockservice/estimation_installation) to figure out how to install it.

### Install
```
git clone https://github.com/Lamden/lamden_block_service.git
cd lamden_block_service/
npm install
```

### Run
```
npm run start
```

### Configure
You can custom blockservice by creating/editing  ```.env``` file at the root of the project folder.  Click [<u>here</u>](/blockservice/config) to get more details.

### Sync Chaindata (Optional)
The first time you run the block service, it will take long time to sync blocks data. In order to avoid waiting for so long, you can use
[<u>mongodump</u>](https://www.mongodb.com/docs/database-tools/mongodump/#mongodb-binary-bin.mongodump) to export data from another block service to you own block service.

### Api Doc
```
npm run docs
```
Then you can open ```{host}:{port}/api-docs/``` to check the API documentation served at local. For details, please check at [<u>here</u>](/blockservice/config).

