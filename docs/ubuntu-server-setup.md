---
sidebar_position: 3
---

# Ubuntu Server Setup

## Driver

<!-- see https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html#ubuntu-lts for how to install Nvidia driver -->

:::note
Check out
[the Nvidia installation docs](https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html#ubuntu-lts)
for how to install Nvidia drivers.
:::

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
sudo usermod -aG \
    sudo docker \
    $USER
```

:::note
Alternatively, we can use the admin account to setup all the `sudo` related
tools and remove other users from `sudo` which is safer, but can cause
inconveniences.
:::

## Remote Access

<!-- see https://bytexd.com/install-chrome-remote-desktop-headless/ for how to setup headless CRD -->

## Drive

<!-- see https://www.cyberciti.biz/faq/mount-drive-from-command-line-ubuntu-linux/ for how to mount drive from command line -->
<!-- see https://unix.stackexchange.com/questions/315063/mount-wrong-fs-type-bad-option-bad-superblock for wrong fs type error -->

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
