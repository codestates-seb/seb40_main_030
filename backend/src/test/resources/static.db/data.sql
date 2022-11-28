--더미 Member
INSERT INTO Member(member_id,createdAt,modifiedAt,address,email,nickname,password,phone,photoURL) VALUES
(1,'2022-11-27 19:46:44.346140','2022-11-27 19:46:44.346140','경기도 분당시 엄복동','test@gmail.com','테스트','{bcrypt}$2a$10$XGotgfCnYqJ/kVeDoiD1KeS7fIidoyrr8kbjXNxRKGfGxPNQhmzXy','010-1111-2222','http://asd311114f6asd54f6aw'),
(2,'2022-11-27 19:47:10.850315','2022-11-27 19:47:10.850315','서울시 강남구 역삼동','nike@gmail.com','나이키','{bcrypt}$2a$10$.vHhhPbb7F1hgmRD5Cxkb.d97nem9ApMGHDQbatnjxnelVpcBg.p6','010-1111-2222','http://asd311114f6asd54f6aw');

--더미 Admin
INSERT INTO Admin(admin_id,createdAt,email,modifiedAt,password,phone) VALUES
(1,'2022-11-27 20:00:14.671605','admin@gmail.com','2022-11-27 20:00:14.671605','{bcrypt}$2a$10$RdZBTco1TMcJRM8Q6xxWEOsJ0/dzgj3vJQokgaJ5YrHvcSjPfcmcW','010-7942-7942'),
(2,'2022-11-27 20:00:54.366883','admin2@gmail.com','2022-11-27 20:00:54.366883','{bcrypt}$2a$10$cT9O3nABoMQc2CxolXzJFu0.OQrSL7HTUMzShY0G49h/FijolcfZq','010-7942-7942');

-- 더미 Station
INSERT INTO Station(station_id, admin_id, createdAt,modifiedAt,details,latitude,longitude,name,photoURL,phone,confirmId) VALUES
(1,1,'2022-11-19 17:33:53.258093','2022-11-19 17:33:53.258093','첫번째 대여소',37.49655445,127.02475418,'코드스테이츠','@#!@DSAF!@#','010-1588-1588',1615822138),
(2,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','두번째 대여소',37.50067442,127.03646947,'역삼역','@#!@DSAF!@#','010-2580-2580',21160619),
(3,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','세번째 대여소',37.48743208,127.02732692,'서초한양수자인','@#!@DSAF!@#','010-2580-2580',14584819),
(4,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','네번째 대여소',35.10027532,129.01873161,'부산대학교병원','@#!@DSAF!@#','010-2580-2580',18956887);

--더미 Battery
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id, batteryName) VALUES
(1,'50000mA','2022-11-19 17:34:17.716045','2022-11-19 17:34:17.716045','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',1500,false,1,"Samsung"),
(2,'100000mA','2022-11-19 17:34:18.453315','2022-11-19 17:34:18.453315','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',2000,false,1,"Samsung"),
(3,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',3000,true,1,"Samsung"),
(4,'50000mA','2022-11-19 17:34:22.887204','2022-11-19 17:34:22.887204','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',1500,true,2,"Hyundai"),
(5,'30000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',1000,true,2,"Hyundai"),
(6,'150000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',2500,false,2,"Hyundai"),
(7,'200000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',3000,false,2,"Hyundai"),
(8,'100000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',2000,true,3,"Hyundai"),
(9,'50000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',1000,true,4,"Hyundai"),
(10,'70000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',1000,false,4,"Hyundai"),
(11,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',3000,true,1,"Samsung"),
(12,'150000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',2500,true,1,"Samsung"),
(13,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',1000,true,2,"Samsung"),
(14,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',1000,false,2,"Samsung"),
(15,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',3000,false,2,"Samsung");

-- 더미 payment
INSERT INTO Payment(payment_id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES
(1,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-11-20T23:30','카카오페이','2022-11-20T17:30',0,50000,1,1,1),
(2,'2022-11-19 17:35:42.896863','2022-11-19 17:35:42.896863','2022-11-21T19:00','카카오페이','2022-11-21T09:00',0,50000,2,2,1),
(3,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-25T09:00','카카오페이','2022-11-23T09:00',1,50000,3,1,2);

-- 더미 Reservation
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES
(1,1, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T13:30","2022-11-21T23:30"),
(11,1, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T09:30","2022-11-21T12:30"),
(2,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T13:30","2022-11-21T23:30"),
(22,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-22T13:30","2022-11-23T23:30"),
(3,3, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T16:30","2022-11-20T23:30"),
(4,3, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-19T16:30","2022-11-19T23:30"),
(5,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T18:30","2022-11-20T22:30"),
(55,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T18:30","2022-11-20T22:30");

INSERT INTO member_roles(Member_member_id,roles) values
(1,'USER'),
(2,'USER');

INSERT INTO admin_roles(Admin_admin_id,roles) values
(1,'ADMIN'), (1,'USER'),
(2,'ADMIN'), (2,'USER');