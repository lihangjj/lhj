-- 一、删除数据库
DROP DATABASE IF EXISTS ajax ;
-- 二、创建数据库
CREATE DATABASE ajax CHARACTER SET UTF8 ;
-- 三、使用ajax数据库
USE ajax ;
-- 四、删除数据表
DROP TABLE IF EXISTS admin ;
-- 五、创建数据表
CREATE TABLE admin(
	adminid			VARCHAR(50) ,
	password	VARCHAR(32) 	NOT NULL ,
	CONSTRAINT pk_mid PRIMARY KEY(adminid)
) ;
-- 六、增加测试数据 —— mldn / java
INSERT INTO member(adminid,password) VALUES ('mldn','93F725A07423FE1C889F448B33D21F46') ;
-- 增加测试数据 —— admin / hello
INSERT INTO member(adminid,password) VALUES ('admin','5D41402ABC4B2A76B9719D911017C592') ;
-- 七、事务提交
COMMIT ;