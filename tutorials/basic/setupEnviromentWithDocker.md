---
title: Setup Develop Enviroment With Docker
slug: basic-docker
date: 2022-08-10T09:00
authors:
  - name: Dapiguabc
    url: https://github.com/Dapiguabc
    image_url: https://github.com/Dapiguabc.png
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: true
---

We have prepared a docker image for you to simplify the setup of the development environment.
With this image, you can focus more on the development of smart contracts without spending a lot of time installing the following tools:

1. Python3.6
2. Mongo
3. Contracting Python Package

### Prerequisites
- Linux System.
- [<u>Docker Installed</u>](https://docs.docker.com/).
- [<u>Visual Studio Code</u>](https://code.visualstudio.com/download).
- [<u>Docker VS Code Extension</u>](https://code.visualstudio.com/docs/containers/overview).

:::info

Contracting Package does not support running on windows as a result that we only provide a docker image of linux.

:::

### Start the lamden contracting container

1. Pull the docker image first:

```bash
docker pull crosschainer/lamden-contracting
```

2. After a few seconds, use the following command to check your image:

```bash
docker images
```
Now you can find the lamden-contracting image in the output.

![image](/img/basic/docker1.png)

3. Start the container

docker run -it --name contracting ImageID /bin/bash

The -i parameter indicates that you're running the container in interactive mode.
After you run the commande above, you can interact with the contracting container.


### Coding your smart contracts in VS Code

Although you can already interact with the container through bash, it is not convenient for coding smart contracts.
Luckily, most ides support the development with docker. You can choose whatever ide you like to coding your contracts.
As for this tutorials, we choose Vs Code.

1. In VS Code, select the Docker icon on the left to view the Docker extension.

![image](/img/basic/docker2.png)

2. Right-click on docker/getting-started to open a context menu. Select Attach Visual Studio Code.

![image](/img/basic/docker3.png)

3. A new VS Code client will be opened and then you can start coding your Lamden smart contracts.