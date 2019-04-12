docker build -t nehay100/mysqldemo .
go clean
docker push nehay100/mysqldemo

ssh -oStrictHostKeyChecking=no ec2-user@13.58.58.94 'bash -s' < upgrade-server.sh