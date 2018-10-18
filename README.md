# Opty Web

### installation
first, install local dependencies
```
git clone https://github.com/thechgrp/opty-web.git && cd opty-web
npm install
```
yarn:
```
yarn
```

then, go ahead and make sure to install pm2

```
npm install -g pm2
```
yarn:
```
yarn global add pm2
```

### running
after everything has been installed, run the following command to let pm2 take over everything
```
pm2 start server.js
```
this will start a process and manage it for you.

by default the server runs on port :3000