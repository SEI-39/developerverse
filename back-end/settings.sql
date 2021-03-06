/* To run:
$ psql -f settings.sql
Replace DB_NAME, DB_USER, DB_PWD
With values in .env
*/
CREATE DATABASE DB_NAME;
CREATE USER DB_USER WITH PASSWORD 'DB_PWD';
GRANT ALL PRIVILEGES ON DATABASE DB_NAME TO DB_USER;
