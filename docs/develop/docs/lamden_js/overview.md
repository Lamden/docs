---
id: overview
title: Lamden-js Overview
sidebar_label: Overview
---

# lamden-js
This is the Lamden javascript implementation used in the [Lamden Vault Chrome Extension](https://chrome.google.com/webstore/detail/lamden-wallet-browser-ext/lgkgmnhecgdjiifepobmobkeeeheakko) ([Github](https://github.com/Lamden/wallet)). Lamden-js provides Lamden node API wrapers and built-in helpers for managing accounts and processing transactions.

With this package, you can:

1. Create accounts, process and sign transactions.
2. Interact with smart contracts throw.
3. Get block and state information from Lamden nodes.

We recommend that you use the [Lamden Vault API](/wallet_api/overview/) to interact with smart contracts and use [block service](/blockservice/overview/) to get the on-chain data, rather than using lamden-JS.
You should use Lamden-js only if the Lamden Vault API and Block Service can't meet your needs.

## Install

```javascript
npm install lamden-js
```

## Add to project

```javascript
import Lamden from 'lamden-js'
```

**or**

```javascript
const Lamden = require('lamden-js')
```
