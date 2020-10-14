/* To run:
$ psql -f settings.sql
Replace DB_NAME, DB_USER, DB_PWD
With values in .env
*/
CREATE DATABASE developerverse;
CREATE USER developerverse_user WITH PASSWORD 'developerverse';
GRANT ALL PRIVILEGES ON DATABASE developerverse TO developerverse_user;
