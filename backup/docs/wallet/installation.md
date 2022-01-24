---
id: nstallation
title: Lamden Vault Installation
sidebar_label: Installation
---
 
There are two methods by which one can install the wallet:
 
The first method of installation is to add the wallet in Chrome as an extension from the web store.
 
The second method is a cloning repository from GitHub which builds locally, and afterwards, uploads to Chrome as an extension.
 
## Chrome web store link
 
Click or copy and paste the **[link](https://chrome.google.com/webstore/search/lamden)** to get Lamden Vault.
 
```
https://chrome.google.com/webstore/search/lamden
```
 
Follow the instructions below to install it.
 
A screen will open, inside which the Lamden Vault extension will appear. 
 
1. Click on the button `Add to Chrome`.
2. Confirm installation of the extension by clicking `Add extension`.
3. As confirmation of the installation, a pop-up window will appear in the top left corner of  Chrome.
 
Now you are able to click on the icon of the wallet and launch the wallet in the browser. 
 
![](/img/wallet/chrome_wallet_installation.gif)
 
## Installation from the Repository
 
### Clone Github Repo
 
```bash
git clone https://github.com/Lamden/wallet.git
 
```
Type in the terminal copied command
 
![image](/img/wallet/1._Step_wallet.png)
 
After cloning the repository,the next screen will appear.
 
![image](/img/wallet/2._Step_-_wallet.png)
 
Open the folder named‘wallet’, and all contents of the folder `wallet`will be visible.
 
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
Once the build is completed, you will see the folder `build` was created.
 
![image](/img/wallet/4._Step_-_wallet.png)
 
### Load the extension in Chrome & Opera
1. Open Chrome/Opera browser and navigate to `chrome://extensions`
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file explorer, choose `wallet/build`
 
### Load the extension in Firefox
1. Open Firefox browser and navigate to `about:debugging`
2. Click "Load Temporary Add-on" and from the file browser, choose `wallet/build/manifest.json`
 
![](/img/wallet/wallet_installation_firefox.gif)
 
### Load the extension in Brave
1. Open Brave browser and navigate to `brave://extensions/`
2. Turn on the developer mode from the top right-hand corner
3. Click "Load Unpacked Extention"
4. Select the build directory unzipped from the zip file.
 
## Testing
### Live reload
Once you would like to begin  developing the extension and want to enable live reload use
 
```bash
npm run dev
```
