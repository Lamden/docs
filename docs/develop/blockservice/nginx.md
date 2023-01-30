# Setup NGINX
> You will need to setup a DNS name for your node, ie. blockservice.my-domain.com

## Install
```bash
sudo apt install nginx
rm -f /etc/nginx/sites-enabled/default
```

## Setup Proxy file
You have two options. 

1. If you have the lamden_block_service package installed then you can copy the file from there.
```bash
cp ~/lamden_block_service/misc/nginx-proxy-bs /etc/nginx/sites-available/nginx-proxy-bs
```

2. otherwise you can get the file from Github with wget
```bash
wget -P /etc/nginx/sites-available/ https://raw.githubusercontent.com/Lamden/lamden_block_service/main/nginx-proxy-bs
```

## Config Proxy
```bash
nano /etc/nginx/sites-available/nginx-proxy-bs
```

Replace `<blockservice.my-domain.com>` with the dns name of your server ie `blockservice.coolnodes.com`.
If you do not have a DNS name then simple remove this line by putting your cursor on it and typing `CTRL+k`.

```
server {
    listen 80;
    listen [::]:80;
    server_name blockservice.my-domain.com; <- REPLACE WITH YOUR DNS NAME HERE
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header Host $http_host;

    location ^~ / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:3535";
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection "upgrade";
    }
}

```

Save file:
- Press `CTRL + X`
- Press `y`
- Press `Enter`

## Make changes Live
```bash
ln -s /etc/nginx/sites-available/nginx-proxy-bs /etc/nginx/sites-enabled/nginx-proxy-bs
/etc/init.d/nginx reload
```