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
***note***: this is already setup on opty-web-1
```
npm install -g pm2@latest
```
yarn:
```
yarn global add pm2@latest
```

### running
after everything has been installed, run the following command to let pm2 take over everything
```
pm2 start server.js
```
this will start a process and manage it for you.

by default the server runs on port :3000

***NOTE***: the server's name on pm2 is 'server'

### using pm2
to get logs that the server will spit out, run this to get them

```
pm2 logs server
```

if you ever have to update the files themselves, run this to reload without 0 downtime

```
pm2 reload all
```

### modules and file structure
under the hood, serve is running the static site.

```
opty-web
|     server.js -- serve main file
| --- src
|     |     index.html
|     |     terms.hmtl
|     |     privacy.hmtl
| --- lib
|     |     options.js -- houses all options used for serve
```
