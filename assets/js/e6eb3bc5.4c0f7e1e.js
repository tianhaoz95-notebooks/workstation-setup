"use strict";(self.webpackChunkworkstation_setup=self.webpackChunkworkstation_setup||[]).push([[170],{4095:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),r=["components"],i={sidebar_position:4},p="Pi Setup",l={unversionedId:"pi-setup",id:"pi-setup",isDocsHomePage:!1,title:"Pi Setup",description:"NAS",source:"@site/docs/pi-setup.md",sourceDirName:".",slug:"/pi-setup",permalink:"/workstation-setup/docs/pi-setup",editUrl:"https://github.com/tianhaoz95-notebooks/workstation-setup/edit/main/docs/pi-setup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Ubuntu Server Setup",permalink:"/workstation-setup/docs/ubuntu-server-setup"},next:{title:"Linux Workstation Setup",permalink:"/workstation-setup/docs/linux-workstation-setup"}},c=[{value:"NAS",id:"nas",children:[],level:2},{value:"Code server",id:"code-server",children:[],level:2},{value:"Pi hole",id:"pi-hole",children:[],level:2},{value:"Portainer",id:"portainer",children:[],level:2},{value:"ArozOS",id:"arozos",children:[],level:2},{value:"Home assistant",id:"home-assistant",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"pi-setup"},"Pi Setup"),(0,s.kt)("h2",{id:"nas"},"NAS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install samba samba-common\n")),(0,s.kt)("p",null,"Update ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/samba/smb.conf")," by appending:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[Projects]\npath = /mnt/Share/Projects\nwriteable = yes\ncreate mask = 0775\ndirectory mask = 0775\npublic=no\n")),(0,s.kt)("h2",{id:"code-server"},"Code server"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-the-code-server-cloud-ide-platform-on-ubuntu-20-04"},"https://www.digitalocean.com/community/tutorials/how-to-set-up-the-code-server-cloud-ide-platform-on-ubuntu-20-04")," and ",(0,s.kt)("a",{parentName:"p",href:"https://coder.com/docs/code-server/latest/guide"},"https://coder.com/docs/code-server/latest/guide")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[Unit]\nDescription=code-server\nAfter=nginx.service\n\n[Service]\nType=simple\nUser=pi\nExecStart=/home/pi/.yarn/bin/code-server --config /home/pi/.config/code-server/config.yaml\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"bind-addr: x.x.x.x:6443\nauth: password\npassword: awesome_passwd\ncert: false\n")),(0,s.kt)("h2",{id:"pi-hole"},"Pi hole"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\n# More info at https://github.com/pi-hole/docker-pi-hole/ and https://docs.pi-hole.net/\nservices:\n  pihole:\n    container_name: pihole\n    image: pihole/pihole:latest\n    ports:\n      - "192.168.0.161:53:53/tcp"\n      - "192.168.0.161:53:53/udp"\n      - "67:67/udp"\n      - "80:80/tcp"\n    environment:\n      TZ: "America/Los_Angeles"\n      WEBPASSWORD: "CUSTOMIZE_HERE"\n    # Volumes store your data between container upgrades\n    volumes:\n      - "./etc-pihole/:/etc/pihole/"\n      - "./etc-dnsmasq.d/:/etc/dnsmasq.d/"\n    # Recommended but not required (DHCP needs NET_ADMIN)\n    #   https://github.com/pi-hole/docker-pi-hole#note-on-capabilities\n    cap_add:\n      - NET_ADMIN\n    restart: unless-stopped\n')),(0,s.kt)("h2",{id:"portainer"},"Portainer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  portainer:\n    container_name: portainer\n    image: portainer/portainer-ce\n    ports:\n      - "8000:8000"\n      - "9000:9000"\n    restart: always\n    volumes:\n      - "/var/run/docker.sock:/var/run/docker.sock"\n      - "./portainer_data:/data"\n')),(0,s.kt)("h2",{id:"arozos"},"ArozOS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM golang:buster\nRUN apt -y update && apt -y install git\nRUN git clone https://github.com/tobychui/arozos /arozos\nWORKDIR /arozos/src\nRUN go build\nCMD ./arozos -port 80\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  arozos:\n    container_name: arozos\n    build: .\n    ports:\n      - "7888:80"\n      - "2121:21"\n    restart: always\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For ArozOS project details, see ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/tobychui/arozos"},"https://github.com/tobychui/arozos"),"."))),(0,s.kt)("h2",{id:"home-assistant"},"Home assistant"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  homeassistant:\n    container_name: homeassistant\n    image: "ghcr.io/home-assistant/raspberrypi4-homeassistant:stable"\n    volumes:\n      - ./config:/config\n      - /etc/localtime:/etc/localtime:ro\n    restart: unless-stopped\n    privileged: true\n    network_mode: host\n')))}u.isMDXComponent=!0}}]);