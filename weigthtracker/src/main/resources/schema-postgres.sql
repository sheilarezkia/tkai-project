DROP TABLE IF EXISTS weighttracker;
CREATE TABLE weighttracker(id bigserial PRIMARY KEY, timest date, weight bigint);
SET datestyle TO 'ISO, DMY';