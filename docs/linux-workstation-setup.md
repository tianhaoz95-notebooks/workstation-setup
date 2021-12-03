---
sidebar_position: 6
---

# Linux Workstation Setup

## Mount network drive

Add the following to `/etc/fstab`:

```bash
//192.168.0.[xxx]/[drive_name] /path/to/mounting/point cifs username=[usr],password=[pwd],uid=[usr_id],gid=[grp_id]  0  0
```

:::warning
Don't forget to replace:
* `[xxx]`: with the IP address of the NAS server
* `[drive_name]`: with the shared drive ID
* Path of the local mounting point
* Username and password if applicable
* `[usr_id]`: find this with `id -u`
* `[grp_id]`: find this with `id -g`
:::

After adding the line, run `sudo mount -a` will tell if there is any error.
