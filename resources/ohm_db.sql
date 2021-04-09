CREATE DATABASE ohm_db;

USE ohm_db;

CREATE TABLE ohm_values (
  id int unsigned NOT NULL AUTO_INCREMENT,
  color varchar(45) NOT NULL,
  band int DEFAULT NULL,
  multiplier int NULL,
  tolerance decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY color_UNIQUE (color),
  UNIQUE KEY id_UNIQUE (id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(1,   "black",    0,    0,  null);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(2,   "brown",    1,    1,  1);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(3,   "red",      2,    2,  2);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(4,   "orange",   3,    3,  .05);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(5,   "yellow",   4,    4,  0.02);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(6,   "green",    5,    5,  0.5);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(7,   "blue",     6,    6,  0.25);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(8,   "violet",   7,    7,  0.1);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(9,   "grey",     8,    8,  0.01);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(10,  "white",    9,    9,  null);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(11,  "gold",     null, -1, 5);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(12,  "silver",   null, -2, 10);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(13,  "pink",     null, -3, null);
INSERT INTO ohm_values (id, color, band, multiplier, tolerance) VALUES(14,   "none",    null,  null, 20);

-- Test Query
SELECT color, band, multiplier, tolerance FROM ohm_values ORDER BY id ASC;
