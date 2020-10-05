/* To run:
$ psql -f seed.sql
*/

CREATE DATABASE final_project;
CREATE USER final_project_user WITH PASSWORD 'final_project';
GRANT ALL PRIVILEGES ON DATABASE final_project TO final_project_user;