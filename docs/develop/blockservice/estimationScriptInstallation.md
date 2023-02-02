
# Estimation Script Installation

This script is used for estimating stamps cost of a transaction and serves a socket server to communicate with Lamden Block Service. 
Installing this script can ensure endpoint ```/stamps/estimation``` works. You can find it at [<u>here</u>](https://github.com/Lamden/stamp_estimation_script).

### Install

Clone this repo

```
cd ~
git clone https://github.com/Lamden/stamp_estimation_script.git 

```

Install docker

```
curl -fsSL https://get.docker.com | bash -s docker
```

Then install docker-compose, you can get the latest release at [here](https://github.com/docker/compose/releases)

```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```



### Config 
There are two config files: ```config.ini```(for production) and ```config.dev.ini```(for development) which are used to configure mongodb and socket server. Please edit them to ensure that script works. 

```
# mongo config
[mongo]
conn=mongodb://localhost:27017 # mongo connection string.
database=mainnet-blockservice # mongo database name.
collection=currentState # Collection name.

# socket config
[socket]
host=localhost # stamp estimation host address
port=3232 # stamp estimation port number

```

### Run

Build project

```
cd stamp_estimation_script/
docker-compose build # build docker image
```

Run the server

```
docker-compose up -d # 
```

