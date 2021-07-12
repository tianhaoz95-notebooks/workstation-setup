---
sidebar_position: 3
---

# Ubuntu Server Setup

## Disable auto sleep

```bash
sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target
```

:::note
For more details, see
[this post](https://www.unixtutorial.org/disable-sleep-on-ubuntu-server/).
:::

## Driver

<!-- see https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html#ubuntu-lts for how to install Nvidia driver -->

:::note
Check out
[the Nvidia installation docs](https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html#ubuntu-lts)
for how to install Nvidia drivers.
:::

## WoL

For checking the current WoL status, see instructions in https://help.ubuntu.com/community/WakeOnLan

For setting up on-boot service, see https://www.techrepublic.com/article/how-to-enable-wake-on-lan-in-ubuntu-server-18-04/

## Docker

:::note
Check out
[the official documentation](https://docs.docker.com/engine/install/ubuntu/)
for instructions.

Also, don't forget to follow the
[post-installation instructions](https://docs.docker.com/engine/install/linux-postinstall/)
after docker installation.
:::

## Driver docker support

:::note
Check out
[the official documentation for more details](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker) for more details.
:::

## Desktop environment

Install Xfce:

```bash
sudo DEBIAN_FRONTEND=noninteractive \
    apt install --assume-yes xfce4 desktop-base
```

Install Cinnamon:

```bash
sudo DEBIAN_FRONTEND=noninteractive \
    apt install --assume-yes cinnamon-core desktop-base
```

:::note
For details, see the
[official CRD configure example](https://cloud.google.com/architecture/chrome-desktop-remote-on-compute-engine#cinnamon).
:::

## User

### Add users

To add a Linux user with **home directory** and **login shell (bash)**, use the
following command:

```bash
sudo useradd -m -s /usr/bin/bash "$NEW_USERNAME"
```

```bash
sudo passwd "$NEW_USERNAME"
```

:::note
For more options, see
[this post](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command).
:::

### Delete users

To remove a Linux user, use the following command:

```bash
sudo userdel "$NEW_USERNAME"
```

:::note
For more options, see
[this doc](https://www.godaddy.com/help/remove-a-linux-user-19158).
:::

### Permissions

For any Linux developer account to make sense, it need as least the following:

```bash
sudo usermod -aG docker "$NEW_USERNAME"
sudo usermod -aG sudo "$NEW_USERNAME"
```

:::note
Alternatively, we can use the admin account to setup all the `sudo` related
tools and remove other users from `sudo` which is safer, but can cause
inconveniences.
:::

## Remote Access

<!-- see https://bytexd.com/install-chrome-remote-desktop-headless/ for how to setup headless CRD -->

Here is an
[official example](https://cloud.google.com/architecture/chrome-desktop-remote-on-compute-engine#xfce)
for setting up CRD on GCloud VM.

Here is an
[official example](https://support.google.com/chrome/answer/1649523#zippy=%2Cuse-chrome-remote-desktop-on-linux)
for setting up CRD for Linux workstation.

## Essential apps

### VS code

Visit <https://code.visualstudio.com>.


### Portainer

```yml
version: '3'
services:
 portainer_agent:
 container_name: portainer_agent
  image: portainer/agent
  ports:
   - '9001:9001'
  restart: always
  volumes:
   - '/var/run/docker.sock:/var/run/docker.sock'
   - '/var/lib/docker/volumes:/var/lib/docker/volumes'
```

### Chrome

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

:::note
Check out
[this post](https://itsfoss.com/install-chrome-ubuntu/#install-chrome-terminal)
for more details.
:::

## Drive

<!-- see https://www.cyberciti.biz/faq/mount-drive-from-command-line-ubuntu-linux/ for how to mount drive from command line -->
<!-- see https://unix.stackexchange.com/questions/315063/mount-wrong-fs-type-bad-option-bad-superblock for wrong fs type error -->

:::note
This is not needed for Ubuntu server since you can set up a Raid 0 during
installation which works better.
:::

## Network

<!-- see https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line for connect wifi with commands -->
<!-- see https://www.cyberciti.biz/faq/how-to-find-my-public-ip-address-from-command-line-on-a-linux/ for how to get public ip from command line -->

## SSH

Here is a sample configuration file:

```log
Host example
    HostName 192.168.1.10
    User example-user
    Port 7654
    LocalForward 5901 192.168.1.10:5901
    RemoteForward 5037 localhost:5037
```

## Development environments

### Android

#### Device not connecting

When Android devices are connected but `adb devices` cannot find the devices,
it's because the `adb` server doesn't have sufficient permission to access usb
devices.

##### Short term solution

For short term solution, we can just restart the `adb` server with `sudo`
privilege:

```bash
sudo adb kill-server
sudo adb start-server
```

:::note
For more details, please see
[this answer](https://askubuntu.com/questions/863587/adb-device-list-doesnt-show-phone).
:::

### Long term solution

For long term solution, we need to add the correct user as the `usb` device
owner.

First, we need to find the vendor ID and product ID of the Android device with:

```bash
lsusb
Bus 001 Device 002: ID 046d:c52b Logitech, Inc. Unifying Receiver
...
```

:::tip
Here `046d` is the vendor ID and `c52b` is the product ID.
:::

Then we need to add the ownership config as `/etc/udev/rules.d/51-android.rules`
which contains something like:

```bash
# adb for Moto E devl device
SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", ATTR{idProduct}=="6860", MODE="0600", OWNER="username"
```

:::tip
Here we need to replace `idVendor`, `idProduct` and `username`.
:::

:::note
For more details, see this
[answer](https://askubuntu.com/questions/213874/how-to-configure-adb-access-for-android-devices).
:::
