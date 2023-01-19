
# Estimation Script Installation


This script is used for estimating stamps cost of a transaction and serves a socket server to communicate with Lamden Block Service. 
Installing this script can ensure endpoint ```/stamps/estimation``` works. You can find it at [<u>here</u>](https://github.com/Lamden/stamp_estimation_script).

### Preparation
1. [<u>Mongodb</u>(version > 4.0)](httpv://www.mongodb.com/docs/manual/installation/)
2. [<u>python 3.6.x</u>](https://www.python.org/) (should come with UBUNTU 18.04)
3. poetry installed. poetry is a package manager tool. More detail click [<u>here</u>](https://python-poetry.org/docs)
```
    curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
    source $HOME/.poetry/env
```

### Install Dependancies
1. pip3
```
    sudo apt-get update
    sudo apt-get -y install python3-pip
```

2. python setuptools
```
    pip3 install setuptools
```

2. lamden contracting
```
    cd ~
    git clone https://github.com/Lamden/contracting.git
    cd contracting
    git checkout blockservice-driver
    python3 ./setup.py develop
```

### Install
You should make sure that poetry and python have been installed.

```
git clone https://github.com/Lamden/stamp_estimation_script.git 

cd stamp_estimation_script/

poetry install # Installing dependences.
```

### Config 
There are two config files: ```config.ini```(for production) and ```config.dev.ini```(for development) which are used to configure mongodb and socket server. Please edit them to ensure that script works. 

```
# mongo config
[mongo]
conn=mongodb://user:pwd@localhost:27017 # mongo connection string.
database=testnet-blockservice  # mongo database name.  
collection=currentState  # Collection name.

# socket config
[socket]
host=localhost # host address
port=3232    # port number
```

### Run
```
poetry run python ./setup.py # Default use config.dev.ini

PYTHON_ENV="production" poetry run python ./setup.py # Will use config.ini
```

