# Point Materi

## Kabel Jaringan

### Jenis
- UTP (Unshielded Twisted Pair)
- STP (Shielded Twisted Pair)

### Susunan Kabel
![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlDPsU0JUMmVxuPR_BZ8Cunu5f0_F6Ucmrg&usqp=CAU)
- Crossover (perangkat sama) `TIA568A`
- Straight (perangkat beda) `TIA568B`

## IP Address

### Kelas IP
- Kelas A: `0 - 127`
- Kelas B: `128 - 191`
- Kelas C: `192 - 223`

### Subnetting Kelas C
|Prefix|Max hosts|Subnet Mask|
|------|---------|-----------|
|/24|256|255.255.255.0|
|/25|128|255.255.255.128|
|/26|64|255.255.255.192|
|/27|32|255.255.255.224|
|/28|16|255.255.255.240|
|/29|8|255.255.255.248|
|/30|4|255.255.255.252|
|/31|2|255.255.255.254|
|/32|1|255.255.255.255|

## Standar IEEE 802.11
|802.11|Speed (Mbps)|Freq (GHz)|
|------|-----|----|
|b|5.4 - 11|2.4|
|a|54|5|
|g|30/54|2.4|
|n|300|2.4 & 5|



# 5.7.3

- Set Identity

`System > Identity`

- Set Login

`System > Users`

- Set Clock

`System > Clock`

- Set Logging

`System > Logging`

- Set Interface & IP Address

| Nama Ethernet | IP Address |
|---------------|------------|
| ether1-Internet | 192.168.9.32/24 (DHCP) |
| ether2-Pegawai | 10.10.10.1/28 |
| ether3-Server | 40.40.40.1/29 |
| ether4-Admin | 30.30.30.1/29 |
| wlan1-Hotspot | 20.20.20.1/27 |

- Set Internet Connection (DNS Google)

## Hotspot Tamu

- Create IP Pool

`IP > Pool`

```
- Name:  pool-tamu
- Addr:  21-30
```

- Create DHCP Server

`IP > DHCP Server`

```
@DHCP Server
- Intf:  wlan1-hotspot
- Pool:  pool-tamu

@DHCP Network
- Addr: 20.20.20.1
- Gtwy: 20.20.20.1
- DNS : 20.20.20.1
- Domn: hotspot<name>.net
```

- Create Hotspot

`IP > Hotspot`

```
@Server
- Intf: wlan1-hotspot
- Pool: pool-tamu
- Prof: default

@Server Profile
#General
- Name: default
- Addr: 20.20.20.1
- DNS : hotspot<name>.net
#Login
- Uncheck "Cookie"

@User Profile
- Name: user-tamu
- Pool: pool-tamu
- Sess: 00:60:00
- User: 5
- MAC : Remove
- Page: HTTP login

@User
- Srvr: all
- Name: user1
- Pass: 123456
- Prof: user-tamu
```

- Show Specification

`System > Resource`

- Download Log File

- Export Backup

- Change Device

- Import Backup

## Hotspot Pegawai

- Create IP Pool

`IP > Pool`

```
- Name: pool-pegawai
- Addr: 5-10
```

- Create Hotspot

`IP > Hotspot`

```
@Server Profile 
#General
- Name: hotspot-pegawai
- Addr: 10.10.10.1
- DNS : hotspot<name>.net
#Login
- Uncheck "Cookie" 

@Server
- Intf: ether2-Pegawai
- Pool: pool-pegawai
- Prof: hotspot-pegawai

@User Profile
- Name: pegawai
- Pool: pool-pegawai
- User: 1
- MAC : Remove
- Page: HTTP login

@User
- Srvr: server2
- Name: pegawai01, pegawai02, pegawai03
- Pass: 123456
- Prof: user-pegawai
```

## Limit Access

- Sync Clock

`System > SNTP Client`

```
- Enab: ✅
- Prim: 202.154.59.226
- Secn: 203.89.31.12
```

- Block Yt

`IP > Firewall`

```
@Layer7 Protocol
- Name: blok-youtube
- Regx: ^.+(youtube.com).*$

@Filter Rule
# General
- SrcA: 10.10.10.0/28
# Advance
- Lay7: blok-youtube
# Extra > Time
- Time: 08:00:00 – 14:00:00
- Days: Full
# Action
- actn: drop
```

- Limit Time

```
@Filter Rule
# General
- SrcA: <network>
# Extra > Time
- Time: <time>
- Days: <day>
# Action
- actn: drop
```

- Set Security
```
@Filter Rule
#General
- Cain: input
- Intf: ether4-Admin
- Prot: TCP
- Dst : 8291
#Action
- actn: accept

@Filter Rule
#General
- Cain: input
- Prot: tcp
- Dst : 8291
#Action
- actn: drop
```

## Sharing File

- Set Addr List

`IP > Firewall`

```
@Address List
- name: sharing
- addr: 10.0/28, 20.2-20.20, 40.0/29

@Mangle
#Advance
- list: sharing
#Action
- actn: accept

@NAT
#Advance
- list: sharing
#Action
- actn: masquerade
```

## Graphing

`Tools > Graphing`

```
@Interface
- Intf: all
- Netw: default
- cek : ✅
#Setting
- stor: 5 min

@Queue
- Intf: all
- Netw: default
- cek : ✅
```
