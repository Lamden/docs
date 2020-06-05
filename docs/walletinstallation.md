---
id: walletinstallation
title: Lamden Wallet Installation
sidebar_label: Lamden Wallet Installation
---



There are two ways how to install the wallet, first of them to install in the Chrome as an extension from the web store, and second one as a cloning the repository from GitHub and build locally and after that upload to the Chrome as an extension.

## Chrome web store link

Click or copy and paste the **[link](https://chrome.google.com/webstore/search/lamden)** to get Lamden wallet

```
https://chrome.google.com/webstore/search/lamden
```

Follow the instructions to install it.

![](/img/wallet/chrome_wallet_installation.gif)

## Installation from the Repository

### Clone Github Repo

```bash
git clone https://github.com/Lamden/wallet.git

```
Type in the terminal copied command

![image](/img/wallet/1._Step_wallet.png)

After cloning repository you will see the next screen

![image](/img/wallet/2._Step_-_wallet.png)

Open folder wallet and you will see all contents of the folder

```bash
cd wallet
```

![image](/img/wallet/3._Step-wallet.png)



### Install package dependencies

```bash
sudo npm install
```

### Build plugin

```bash
npm run build
```
When build is finished you will see that folder `build` was created.

![image](/img/wallet/4._Step_-_wallet.png)


### Load the extension in Chrome & Opera
1. Open Chrome/Opera browser and navigate to `chrome://extensions`
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file browser, choose `wallet/build`

### Load the extension in Firefox
1. Open Firefox browser and navigate to `about:debugging`
2. Click "Load Temporary Add-on" and from the file browser, choose `wallet/build/manifest.json`

![](/img/wallet/wallet_installation_firefox.gif)

### Load the extension in Brave
1. Open Brave broswer and navigate to `brave://extensions/`
2. Turn on developer mode from the top right-hand corner
3. Click "Load Unpacked Extention"
4. Select the build directory unzipped from the zip file.

## Testing
### Live reload
When you want to start developing the extension and want to enable live reload use

```bash
npm run dev
```
