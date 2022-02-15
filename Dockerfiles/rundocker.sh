#!/bin/sh
#Basic shell script to automate docker in github actions 
docker build -t server ./server/.
docker run -dp 5000:5000 server --name server
docker build -t app ./app/.
docker run -d app --name app
