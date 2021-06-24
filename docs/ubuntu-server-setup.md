---
sidebar_position: 3
---

# Ubuntu Server Setup

## Add user

<!-- see https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/ for how to add linux users -->
<!-- see https://www.godaddy.com/help/remove-a-linux-user-19158 for command to delete a linux user -->

## Driver

<!-- see https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html#ubuntu-lts for how to install Nvidia driver -->

## Desktop environment

<!-- see https://www.howtogeek.com/107368/how-to-install-the-lightweight-lxde-desktop-on-ubuntu/ for how to install LXDE -->

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

```
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

When Android devices are connected but `adb devices` cannot find the devices, it's because the `adb` server doesn't have sufficient permission to access usb devices.

##### Short term solution

For short term solution, we can just restart the `adb` server with `sudo` privilege:

```bash
sudo adb kill-server
sudo adb start-server
```

:::note
For more details, please see [this answer](https://askubuntu.com/questions/863587/adb-device-list-doesnt-show-phone).
:::

### Long term solution

For long term solution, we need to add the correct user as the `usb` device owner.

First, we need to find the vendor ID and product ID of the Android device with:

```bash
lsusb
Bus 001 Device 002: ID 046d:c52b Logitech, Inc. Unifying Receiver
...
```

:::tip
Here `046d` is the vendor ID and `c52b` is the product ID.
:::

Then we need to add the ownership config as `/etc/udev/rules.d/51-android.rules` which contains something like:

```bash
# adb for Moto E devl device
SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", ATTR{idProduct}=="6860", MODE="0600", OWNER="username"
```

:::tip
Here we need to replace `idVendor`, `idProduct` and `username`.
:::

:::note
For more details, see this [answer](https://askubuntu.com/questions/213874/how-to-configure-adb-access-for-android-devices).
:::
