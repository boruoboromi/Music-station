/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : music

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-10-24 23:27:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL,
  `head` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for t_work
-- ----------------------------
DROP TABLE IF EXISTS `t_work`;
CREATE TABLE `t_work` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `songName` varchar(255) CHARACTER SET utf8 NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 NOT NULL,
  `file` varchar(255) CHARACTER SET utf8 NOT NULL,
  `img` varchar(255) CHARACTER SET utf8 NOT NULL,
  `introduce` text CHARACTER SET utf8 NOT NULL,
  `user` varchar(255) CHARACTER SET utf8 NOT NULL,
  `timex` datetime NOT NULL,
  `zanNum` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for t_zan
-- ----------------------------
DROP TABLE IF EXISTS `t_zan`;
CREATE TABLE `t_zan` (
  `songID` int(11) NOT NULL,
  `user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
