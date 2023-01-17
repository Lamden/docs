
# Blockservice Config


All configuration is done by an ```.env``` file which you need to create in the root of the application folder. Some variables which are not be set will use default values.  

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

### Server options

|  Item   | Description  | default |
|  ----  | ----  | ---- |
| BLOCKSERVICE_PORT   |  The port used for the webserver and websockets | 3535 |
| BLOCKSERVICE_HOST  |  Service bind host| localhost|

### Misc options

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


