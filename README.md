# toys-fe
The website for selling and buying clothing

# deployment
1. build angular app: cd toys-fe directory
```
ng build
```
2. copy angular build's dist folder into ec2(ubuntu) using scp
```.env
home/ubuntu/projects/toys-fe
```
3. install nginx in ec2(ubuntu)
```.env
sudo apt update
sudo apt install nginx
sudo systemctl start nginx
verify server is on: http://domain-name
```
4. add permission to nginx
```.env
sudo chown -R $USER:$USER /home/projects/toys-fe
sudo chown -R 755 /home/projects
``` 
5. Add the following configuration to nginx.conf
```.env
sudo vim /etc/nginx/sites-enabled/default
root /home/ubuntu/projects/toys-fe
``` 
6. restart nginx
```.env
sudo systemctl reload nginx
sudo systemctl restart nginx
``` 
