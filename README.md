# toys-fe
The website for selling and buying clothing

# deployment
1. build angular app: cd toys-fe directory
```
ng build
```
2. copy angular build's dist folder into ec2 using scp
```.env
home/ec2-user/toys-fe
```
3. install nginx in ec2
```.env
sudo amazon-linux-extras install nginx1
vim /etc/nginx/nginx.conf
```
4. Add the following configuration to nginx.conf
```.env
location / { 
	      root /home/ec2-user/toys-fe;
	}
``` 
5. add permission to nginx
```.env
sudo namei -om /usr/share/nginx/html
sudo namei -om /home/ec2-user/toys-fe
sudo chmod 755 /home/ec2-user
``` 
6. restart nginx
```.env
sudo systemctl reload nginx
sudo systemctl restart nginx
``` 
