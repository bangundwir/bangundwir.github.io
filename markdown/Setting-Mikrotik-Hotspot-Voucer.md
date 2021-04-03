 

Setting Mikrotik Hotspot Voucer
===============================

[Jump to
navigation](https://hadescenter.my.id/wiki/index.php/Setting_Mikrotik_Hotspot_Voucer#mw-head)[Jump
to
search](https://hadescenter.my.id/wiki/index.php/Setting_Mikrotik_Hotspot_Voucer#searchInput)

**Atur DHCP**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
IP --> DHCP Client --> Interface : Intirface 1  isp --> Add Default Route:Yes  --> status bound OK
Cek IP --> Addresses
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Atur DNS di Mikrotik**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Maskuk IP --> DNS Setting --> servers 8.8.8.8 | 8.8.4.4 | 1.1.1.1 | 1.0.0.1 --> Centang Allow remote requests OK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Atur Firewall**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
IP --> Firewall --> NAT --> + --> Chain: srcnat | out. interface: ether 1 ISP --> Action: masquarade  OK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Test jaringa**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Terminal --> ping google.com OK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  
**Mnentukan alamat IP client**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
IP --> Addresses --> + --> Interface ether2_PC --> address: 192.168.22.1/24 --> Network 192.168.22.0 OK
IP --> Addresses --> + --> Interface ether3_Hotspot --> address: 192.168.22.1/24 --> Network 10.20.30.1/24 OK
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Konfigurasi DHCP Server**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
IP --> DHCP Server --> DHCP --> klik --> DHCP Setup --> DHCP server interface: Ether2_PC --> Next --> Next --> Next --> seting waktu 12jam OK
REBOOT
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Setting Tanggal dan jam Mikrotik**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
System --> SMTP Client --> enable -->Server DNS Names: id.pool.ntp.org OK
System --> Clock --> Asia Jakarta
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Konfigurasi Hotspot**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
IP --> Hotspot --> Servers --> Hotspot Setup --> Hotspot Interface: Ether 3 Hotspot --> Andrres pool of Network -->sesuaikan --> next --> next --> DNS 
NAME:terserah atau Hadescenter12.com --> Create LocalHotpot : potok | potok OK 
IP --> Hotspot --> klik hotspot1 --> Addresses per MAC : 1/satu kode voucer hanya bisa login 1 kali OK
IP --> Hotspot --> Server Profiles --> klik hotspot1 --> Login --> centang HTTP CHAP | HTTP PAP | MAC Cookie OK
IP --> Hotspot --> Server Profiles --> klik default --> general --> DNS hadescenter123.com --> hotpsot addres 10.20.30.1 -->Login --> centang HTTP CHAP | HTTP PAP 
| MAC Cookie OK
IP --> Hotspot --> User Profile --> Shared User: 1 voucer 1 user --> Rate Limit : Membatasi kecepatan: 1M/2M OK
IP --> Hotspot --> User --> 
IP --> Hotspot --> Host cek
IP --> Hotspot --> Sctive user yang aktif
IP --> Hotspot --> Host cek --> mendapatak A- aurhorized
Queues --> Muncul Kecepatan 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Catatan**

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
IP access pont:10.20.30.2 samapai 10.20.30.11
IP Pengguna voucer 10.20.30.11 sampai 10.20.30.254
Settinng Centang hide pass
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
