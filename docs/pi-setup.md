---
sidebar_position: 4
---

# Pi Setup

## Code server

See <https://www.digitalocean.com/community/tutorials/how-to-set-up-the-code-server-cloud-ide-platform-on-ubuntu-20-04> and <https://coder.com/docs/code-server/latest/guide>

```bash
[Unit]
Description=code-server
After=nginx.service

[Service]
Type=simple
ExecStart=/home/pi/.yarn/bin/code-server --config /home/pi/.config/code-server/config.yaml --cert /home/pi/.local/share/code-server/localhost.crt --cert-key /home/pi/.local/share/code-server/localhost.key
Restart=always

[Install]
WantedBy=multi-user.target
```

```yml
bind-addr: 0.0.0.0:6443
auth: password
password: awesome_passwd
cert: true
```

## Pi hole

```yml
version: "3"
# More info at https://github.com/pi-hole/docker-pi-hole/ and https://docs.pi-hole.net/
services:
  pihole:
    container_name: pihole
    image: pihole/pihole:latest
    ports:
      - "192.168.0.161:53:53/tcp"
      - "192.168.0.161:53:53/udp"
      - "67:67/udp"
      - "80:80/tcp"
    environment:
      TZ: 'America/Los_Angeles'
      WEBPASSWORD: 'CUSTOMIZE_HERE'
    # Volumes store your data between container upgrades
    volumes:
      - './etc-pihole/:/etc/pihole/'
      - './etc-dnsmasq.d/:/etc/dnsmasq.d/'
    # Recommended but not required (DHCP needs NET_ADMIN)
    #   https://github.com/pi-hole/docker-pi-hole#note-on-capabilities
    cap_add:
      - NET_ADMIN
    restart: unless-stopped
```

## Portainer

```yml
version: '3'
services:
  portainer:
    container_name: portainer
    image: portainer/portainer-ce
    ports:
      - '8000:8000'
      - '9000:9000'
    restart: always
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock'
      - './portainer_data:/data'
```

## ArozOS

```dockerfile
FROM golang:buster
RUN apt -y update && apt -y install git
RUN git clone https://github.com/tobychui/arozos /arozos
WORKDIR /arozos/src
RUN go build
CMD ./arozos -port 80
```

```yml
version: "3"
services:
  arozos:
    container_name: arozos
    build: .
    ports:
      - "7888:80"
      - "2121:21"
    restart: always
```

:::note
For ArozOS project details, see <https://github.com/tobychui/arozos>.
:::

## Home assistant

```yml
version: '3'
services:
  homeassistant:
    container_name: homeassistant
    image: "ghcr.io/home-assistant/raspberrypi4-homeassistant:stable"
    volumes:
      - ./config:/config
      - /etc/localtime:/etc/localtime:ro
    restart: unless-stopped
    privileged: true
    network_mode: host
```
