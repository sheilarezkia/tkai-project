DROP TABLE IF EXISTS foodtracker;
CREATE TABLE foodtracker(id bigserial PRIMARY KEY, timest date, foodname varchar(100), calory bigint, recipe varchar);
SET datestyle TO 'ISO, DMY';