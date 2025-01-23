-- Adminer 4.8.1 MySQL 8.0.30 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pincode` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`id`, `email`, `pincode`, `phone`, `name`) VALUES
(1,	'john.doe@example.com',	'123456',	'1234567890',	'John Doe'),
(2,	'xyz@gmail.com',	'273004',	'1234567890',	'XYZ'),
(4,	'xyza@gmail.com',	'273004',	'1234567890',	'XYZA'),
(5,	'sri@gmail.com',	'273004',	'1234567890',	'ar'),
(6,	'ss@gmail.com',	'273004',	'1234567890',	'XYZvv'),
(8,	'xyzaaa@gmail.com',	'273004',	'1234567890',	'XYZ'),
(9,	'xyftfz@gmail.com',	'273004',	'1234567890',	'XYZ'),
(10,	'xygygz@gmail.com',	'273004',	'1234567890',	'XYZ'),
(11,	'abctf@gmail.com',	'273004',	'1234567890',	'ar'),
(12,	'xyggz@gmail.com',	'273004',	'1234567890',	'ar'),
(13,	'xyzgfff@gmail.com',	'273004',	'1234567890',	'XYZ'),
(14,	'xytttz@gmail.com',	'273004',	'1234567890',	'Arch'),
(15,	'xyzfdxd@gmail.com',	'273004',	'1234567890',	'XYZ'),
(16,	'xssyz@gmail.com',	'273004',	'1234567890',	'XYZ'),
(17,	'testg@gmail.com',	'273004',	'1234567890',	'joomla_db'),
(18,	'tssest@gmail.com',	'273004',	'1234567890',	'XYZ'),
(19,	'sriarchita24@gmail.com',	'273004',	'1234567890',	'joomla_db'),
(21,	'xyffz@gmail.com',	'273004',	'1234567890',	'XYZ'),
(22,	'xyzff@gmail.com',	'273004',	'1234567890',	'XYZ'),
(23,	'cdsxs@ddd',	'487384',	'443657453',	'sxsxsa'),
(24,	'xggyz@gmal.com',	'273004',	'1234567890',	'XYZA'),
(26,	'xyzaffaa@gmail.com',	'273004',	'1234567890',	'joomla_db');

-- 2025-01-23 17:49:45
