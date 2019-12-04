DROP TABLE IF EXISTS waterintake;
CREATE TABLE waterintake(id bigserial PRIMARY KEY, timest date, millilitres bigint);
SET datestyle TO 'ISO, DMY';