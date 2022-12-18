---
title: 'RouterSpace Writeup'
excerpt: 'Hackthebox RouterSpace boot to root writeup'
coverImage: '/assets/blogs/RouterSpace.png'
date: '22-06-2022'
---
<h1> RouterSpace Hackthebox Writeup </h1>

# NMAP SCANNING

```
┌──(x4k5h4yx💀Kali)-[~]
└─$   nmap -sC -sV 10.10.11.148
Starting Nmap 7.92 ( https://nmap.org ) at 2022-03-26 01:33 EDT
Nmap scan report for 10.10.11.148
Host is up (0.26s latency).
Not shown: 998 filtered tcp ports (no-response)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     (protocol 2.0)
| fingerprint-strings: 
|   NULL: 
|_    SSH-2.0-RouterSpace Packet Filtering V1
| ssh-hostkey: 
|   3072 f4:e4:c8:0a:a6:af:66:93:af:69:5a:a9:bc:75:f9:0c (RSA)
|   256 7f:05:cd:8c:42:7b:a9:4a:b2:e6:35:2c:c4:59:78:02 (ECDSA)
|_  256 2f:d7:a8:8b:be:2d:10:b0:c9:b4:29:52:a8:94:24:78 (ED25519)
80/tcp open  http
| fingerprint-strings: 
|   FourOhFourRequest: 
|     HTTP/1.1 200 OK
|     X-Powered-By: RouterSpace
|     X-Cdn: RouterSpace-29248
|     Content-Type: text/html; charset=utf-8
|     Content-Length: 70
|     ETag: W/"46-xjHoLMGLNuwUgj+wfGrPgEMZdoI"
|     Date: Sat, 26 Mar 2022 05:37:44 GMT
|     Connection: close
|     Suspicious activity detected !!! {RequestID: v vb X6f ik5f m C D }
|   GetRequest: 
|     HTTP/1.1 200 OK
|     X-Powered-By: RouterSpace
|     X-Cdn: RouterSpace-54386
|     Accept-Ranges: bytes
|     Cache-Control: public, max-age=0
|     Last-Modified: Mon, 22 Nov 2021 11:33:57 GMT
|     ETag: W/"652c-17d476c9285"
|     Content-Type: text/html; charset=UTF-8
|     Content-Length: 25900
|     Date: Sat, 26 Mar 2022 05:37:42 GMT
|     Connection: close
|     <!doctype html>
|     <html class="no-js" lang="zxx">
|     <head>
|     <meta charset="utf-8">
|     <meta http-equiv="x-ua-compatible" content="ie=edge">
|     <title>RouterSpace</title>
|     <meta name="description" content="">
|     <meta name="viewport" content="width=device-width, initial-scale=1">
|     <link rel="stylesheet" href="css/bootstrap.min.css">
|     <link rel="stylesheet" href="css/owl.carousel.min.css">
|     <link rel="stylesheet" href="css/magnific-popup.css">
|     <link rel="stylesheet" href="css/font-awesome.min.css">
|     <link rel="stylesheet" href="css/themify-icons.css">
|   HTTPOptions: 
|     HTTP/1.1 200 OK
|     X-Powered-By: RouterSpace
|     X-Cdn: RouterSpace-59424
|     Allow: GET,HEAD,POST
|     Content-Type: text/html; charset=utf-8
|     Content-Length: 13
|     ETag: W/"d-bMedpZYGrVt1nR4x+qdNZ2GqyRo"
|     Date: Sat, 26 Mar 2022 05:37:42 GMT
|     Connection: close
|     GET,HEAD,POST
|   RTSPRequest, X11Probe: 
|     HTTP/1.1 400 Bad Request
|_    Connection: close
|_http-title: RouterSpace
|_http-trane-info: Problem with XML parsing of /evox/about

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 55.19 seconds
```

# Visiting the site 
![image](https://user-images.githubusercontent.com/68991993/172608118-ffb6e23f-5c8e-4b53-bf57-8e47bb6e0647.png)
</br> After visiting the web page, we could download an ```apk``` file from the home page.
### Downloading the apk file and test it.
![image](https://user-images.githubusercontent.com/68991993/172608319-89ede613-16db-44d3-8952-b7939b616408.png)
# Analysing the apk.
```
┌──(x4k5h4yx💀Kali)-[~]
└─$ sudo apt install apktool -y
┌──(x4k5h4yx💀Kali)-[~]
└─$ apktool d RouterSpace.apk -o output
Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=on -Dswing.aatext=true
I: Using Apktool 2.5.0-dirty on RouterSpace.apk
I: Loading resource table...
I: Decoding AndroidManifest.xml with resources...
I: Loading resource table from file: /home/kali/.local/share/apktool/framework/1.apk
I: Regular manifest package...
I: Decoding file-resources...
I: Decoding values */* XMLs...
I: Baksmaling classes.dex...
I: Copying assets and libs...
I: Copying unknown files...
I: Copying original files...
```
After analysing various strings, I could not find any useful information.
## Installing the apk.
```
┌──(x4k5h4yx💀Kali)-[~]
└─$ sudo apt install adb -y
┌──(x4k5h4yx💀Kali)-[~]
└─$ 