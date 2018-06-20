# High Availability Task!

## Installation
* Download the project
```
$ git clone https://github.com/mareimorsy/high-availability-task.git
$ cd high-availability-task/
```
```
$ vagrant up
```
Please wait until it finishes, then visit

http://192.168.33.20:1337

### Notes
* The container base image of the application has an issue which makes the request to NodeAPI container timing out as specified in that link :
https://github.com/ealeksandrov/NodeAPI/issues/35
so, I have spent the whole day trying to figure out what is wrong with that image, then I have managed to solve this problem by making my own node container

* I made my own haproxy container and configured it

* I made a simple nodeJS server that is running on port 9000 and 9001 instead of the real app because I can't figure out how to replicate the application server with the same mongo database yet -but I'm working on it-

* As the app server is going to run on the same machine, so it has to run on different ports, so there is no need for another container ... that's why I made just only one container that is running and listening on port 9000 and 9001 ... coz in this demo it has the same effect
ATTENTION : please don't execute the following command on your local machine
```
docker run -d -p 9000:9000 -p 9001:9001 -v ~/app:/app mareimorsy/node:6.10.3 node /app/server.js
```

* haproxy image is configured to forward the requests from `192.168.33.20:90` to `192.168.33.20:9000` and `192.168.33.20:9001` ... It works properly on Firefox! :D ... just visit 

http://192.168.33.20:90

* I have configured Nginx image a thousand times and It's never worked! ... I'm working on it ... but it's supposed to be working on port 80 and forward the requests to haproxy on port 90

* Instead of making a python script inside of each container ... I can make a master script that can execute docker inspect each hour and collect the whole data and send them at once

* I know that I have to expose only the port 80

* And I should have run all containers in docker-compose in order to check its status and run it only if it's not running
