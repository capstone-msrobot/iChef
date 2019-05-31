export MYSQL_ROOT_PASSWORD="password"
export MYSQL_CONTAINER_NAME="mysqldemo"
export MYSQL_DB="recipeDB"

docker rm -f $MYSQL_CONTAINER_NAME

docker run -d \
-p 3306:3306 \
--name $MYSQL_CONTAINER_NAME \
-e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
-e MYSQL_DATABASE=$MYSQL_DB  \
nehay100/mysqldemo

# sleep 20
# -p 3306:3306 \
# docker run -it \
# --rm \
# --network host \
# nehay100/mysqldemo sh -c "mysql -h127.0.0.1 -uroot -p$MYSQL_ROOT_PASSWORD"