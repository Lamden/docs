---
id: config
title: Config
sidebar_label: Config
---

You can custom your block service in ```.env``` file.

### Lamden configuration items

|  Item   | Description  | default |
|  ----  | ----  | ---- |
| NETWORK   |  Which Lamden network to sync | testnet |
| MASTERNODE_URL  |  A URL of a lamden masternode | https://testnet-master-1.lamden.io |

### Mongo DB configuration items

|  Item   | Description  | default |
|  ----  | ----  | ---- |
| DBUSER |  database user | null |
| DBPWD  |  database password | null |
| AUTHSOURCE |  auth source if using a user and password | admin |
| DBURL  |  database url | 127.0.0.1 |
| DBPORT |  database port | 27017 |
| DBNAME |  the name of the database | ${NETWORK}-blockservice. Example ```testnet-blockservice```|


### Runtime options

|  Item   | Description  | default |
|  ----  | ----  | ---- |
| DEBUG_ON |  outputs some logs while grabbing blocks | false |
| REPAIR_BLOCKS  |  Use this if you are missing blocks. The app will start at whatever value you pass in and iterate up in blocks to see if it's missing any. Any missing will be processed. | undefined |
| RE_PARSE_BLOCKS |  Reload the CurrentState and StateChanges tables using the Blockinfo stored inthe Blocks database. This drops both tables before hand but DOES NOT DROP BLOCKS TABLE! | false |
| START_AT_BLOCK_NUMBER  |  Used in conjunction with ```RE_PARSE_BLOCKS``` to set a starting block. Could be useful if you're app has no state below a certain block. | 0 |
| WIPE  |  ```USE AT OWN RISK!``` This will drop the entire database which means you will need to start syncing all blocks from the masternode (which is slow). If you want to just reload the CurrentState and StateChanges tables then use ```RE_PARSE_BLOCKS``` instead! | false | 

### Server options

|  Item   | Description  | default |
|  ----  | ----  | ---- |
| BLOCKSERVICE_PORT   |  The port used for the webserver and websockets | 3535 |
| BLOCKSERVICE_HOST  |  Service bind host| localhost|

### Msic options

|  Item   | Description  | default |
|  ----  | ----  | ---- |
| APIDOC_PORT   | Port for api document | 8999 |
| SCRIPT_SOCKET_CONN |  Estimation script socket server connection. | http://localhost:3232 |
| LOG_LEVEL | Log Level | info |

**Log Level Details**
- info - Displays all messages from all loggers.
- timer - Displays messages only from the time, timeEnd, debug, warn, error & fatal loggers.
- debug - Displays messages only from the debug, warn, error & fatal loggers.
- warn - Displays messages only from the warn, error & fatal loggers.
- error - Displays messages only from the error & fatal loggers.


