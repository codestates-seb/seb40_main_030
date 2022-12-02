--더미 Member
INSERT INTO Member(member_id,createdAt,modifiedAt,address,detailAddress,email,nickname,password,phone,photoURL) VALUES
(1,'2022-11-27 19:46:44.346140','2022-11-27 19:46:44.346140','경기도 분당시 엄복동','자전차왕 푸르지오 1001동 401호','test@gmail.com','테스트','{bcrypt}$2a$10$XGotgfCnYqJ/kVeDoiD1KeS7fIidoyrr8kbjXNxRKGfGxPNQhmzXy','010-1111-2222','http://asd311114f6asd54f6aw'),
(2,'2022-11-27 19:47:10.850315','2022-11-27 19:47:10.850315','서울시 강남구 역삼동','아디다스 앞동네','nike@gmail.com','나이키','{bcrypt}$2a$10$.vHhhPbb7F1hgmRD5Cxkb.d97nem9ApMGHDQbatnjxnelVpcBg.p6','010-1111-2222','http://asd311114f6asd54f6aw');

--더미 Admin
INSERT INTO Admin(admin_id,createdAt,email,modifiedAt,password,phone) VALUES
(1,'2022-11-27 20:00:14.671605','admin@gmail.com','2022-11-27 20:00:14.671605','{bcrypt}$2a$10$RdZBTco1TMcJRM8Q6xxWEOsJ0/dzgj3vJQokgaJ5YrHvcSjPfcmcW','010-7942-7942'),
(2,'2022-11-27 20:00:54.366883','admin2@gmail.com','2022-11-27 20:00:54.366883','{bcrypt}$2a$10$cT9O3nABoMQc2CxolXzJFu0.OQrSL7HTUMzShY0G49h/FijolcfZq','010-7942-7942');

-- 더미 Station
INSERT INTO Station(station_id, admin_id, createdAt,modifiedAt,details,latitude,longitude,name,photoURL,phone,confirmId) VALUES
(1,1,'2022-11-19 17:33:53.258093','2022-11-19 17:33:53.258093','코드스테이츠 대여소',37.49655445,127.02475418,'코드스테이츠','@#!@DSAF!@#','010-1588-1588',1615822138),
(2,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','역삼역 대여소',37.50067442,127.03646947,'역삼역','@#!@DSAF!@#','010-2580-2580',21160619),
(3,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','서초한양수자인 대여소',37.48743208,127.02732692,'서초한양수자인','@#!@DSAF!@#','010-2580-2580',14584819),
(4,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','부산대학교병원 대여소',35.10027532,129.01873161,'부산대학교병원','@#!@DSAF!@#','010-2580-2580',18956887),
(5,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','카카오 대여소',37.39570089,127.11043351,'카카오 본사','@#!@DSAF!@#','010-2580-2580',18577297),
(6,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','카카오 엔터 대여소',37.5562364,126.92801759,'카카오엔터테인먼트','@#!@DSAF!@#','010-2580-2580',1496522045),
(7,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','카카오 모빌 대여소',37.39407844,127.11012509,'카카오모빌리티','@#!@DSAF!@#','010-2580-2580',547176330),
(8,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','서울역 대여소',37.55467884,126.97060692,'서울역','@#!@DSAF!@#','010-2580-2580',9113903),
(9,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','경복궁역 대여소',37.57580612,126.97369135,'경복궁역','@#!@DSAF!@#','010-2580-2580',21160823),
(10,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','이태원역 대여소',37.53452521,126.99433386,'이태원역','@#!@DSAF!@#','010-2580-2580',21160762),
(11,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','네이버 대여소',37.35886006,127.10520633,'네이버 본사','@#!@DSAF!@#','010-2580-2580',348984619),
(12,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','강남역 대여소',37.49808634,127.02800141,'강남역 2호선','@#!@DSAF!@#','010-2580-2580',21160803),
(13,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','신논현역 대여소',37.50481111,127.02549204,'신논현역 9호선','@#!@DSAF!@#','010-2580-2580',7967869),
(14,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','신사역 대여소',37.51643598,127.02030856,'신사역 3호선','@#!@DSAF!@#','010-2580-2580',547176330),
(15,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','두원빌딩 대여소',37.51860487,127.01924811,'신사역 두원빌딩','@#!@DSAF!@#','010-2580-2580',11963092),
(16,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','반포 자이 대여소',37.50759363,127.01319324,'반포 자이','@#!@DSAF!@#','010-2580-2580',12143684),
(17,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','삼성서울병원 대여소',37.48833613,127.085245,'삼성서울병원','@#!@DSAF!@#','010-2580-2580',7922895),
(18,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','신촌역 4번출구 대여소',37.55550373,126.93720232,'신촌역 4번출구','@#!@DSAF!@#','010-2580-2580',21160531),
(19,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','홍대입구역 대여소',37.55687074,126.92377856,'홍대입구역','@#!@DSAF!@#','010-2580-2580',126.93720232),
(20,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','카카오 모빌 대여소',37.51260448,127.10255559,'롯데월드타워','@#!@DSAF!@#','010-2580-2580',23444676);


--더미 Battery
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,defaultPrice,status,station_id, batteryName) VALUES
(1,'50000mA','2022-11-19 17:34:17.716045','2022-11-19 17:34:17.716045','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,10000,false,1,"Samsung"),
(2,'100000mA','2022-11-19 17:34:18.453315','2022-11-19 17:34:18.453315','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,15000,false,1,"Samsung"),
(3,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,20000,true,1,"Samsung"),
(4,'50000mA','2022-11-19 17:34:22.887204','2022-11-19 17:34:22.887204','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,10000,true,2,"Hyundai"),
(5,'30000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,5000,true,2,"Hyundai"),
(6,'150000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,15000,false,2,"Hyundai"),
(7,'200000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,20000,false,2,"Hyundai"),
(8,'100000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,15000,true,3,"Hyundai"),
(9,'50000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,10000,true,4,"Hyundai"),
(10,'70000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,12500,false,4,"Hyundai"),
(11,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,20000,true,1,"Samsung"),
(12,'150000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,15000,true,1,"Samsung"),
(13,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,10000,true,2,"Samsung"),
(14,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,10000,false,2,"Samsung"),
(15,'100000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,15000,false,2,"Samsung"),
(16,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,20000,false,5,"Kakao"),
(17,'150000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,15000,true,5,"SK_Innovation"),
(18,'300000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37398-7-automotive-battery-image.png',50,30000,true,6,"Kakao"),
(19,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,10000,false,6,"LG_Energy_Solution"),
(20,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://freepngimg.com/thumb/battery/37152-2-automotive-battery-file.png',50,10000,false,7,"Kakao");

-- 더미 payment
INSERT INTO Payment(payment_id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES
(1,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094',"2022-12-01T15:30",'카카오페이','2022-12-01T00:00',1,10300,1,1,1),
(2,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-03T18:30','카카오페이','2022-12-02T17:30',1,10300,1,1,1),
(3,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-10T18:30','카카오페이','2022-12-09T17:30',1,10300,2,1,1),
(4,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-25T18:30','카카오페이','2022-12-24T17:30',1,10300,2,1,1);
--INSERT INTO Payment(payment_id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES
--(1,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-01T09:30','카카오페이','2022-12-01T17:30',1,50000,1,1,1),
--(2,'2022-11-19 17:35:42.896863','2022-11-19 17:35:42.896863','2022-11-21T19:00','카카오페이','2022-11-21T09:00',0,50000,2,2,1),
--(3,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-25T09:00','카카오페이','2022-11-23T09:00',1,50000,3,1,2),
--(4,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-25T09:00','카카오페이','2022-11-23T09:00',2,50000,4,1,2),
--(5,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-25T09:00','카카오페이','2022-11-23T09:00',2,50000,5,1,2),
--(6,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-25T09:00','카카오페이','2022-11-23T09:00',1,50000,6,1,2),
--(7,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-25T09:00','카카오페이','2022-11-23T09:00',2,50000,7,1,2),
--(8,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-30T12:00','카카오페이','2022-11-30T09:00',2,50000,1,1,3),  -- 지난 예약 결제
--(9,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-30T19:00','카카오페이','2022-12-01T006:00',2,50000,1,1,3),  -- 현재 사용중 결제
--(10,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-12-06T09:00','카카오페이','2022-12-05T09:00',2,50000,1,1,3),  -- 예약중인 결제
--(11,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-29T09:00','카카오페이','2022-11-29T09:00',2,50000,1,1,3),  -- 지난 날짜 예약 취소
--(12,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-12-05T09:00','카카오페이','2022-12-05T09:00',2,50000,1,1,3);  -- 미래 날짜 예약 취소

-- 더미 Reservation
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime,payment_id) VALUES
(1,1, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-01T00:00","2022-12-01T15:30",1),
(2,1, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-01T17:30","2022-12-01T18:30",2),
(3,2, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-02T17:30","2022-12-02T18:30",3),
(4,2, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-04T17:30","2022-12-04T18:30",4);
--INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES
--(1,1, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-12-01T09:30","2022-12-01T17:30"),
--(11,1, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T09:30","2022-11-21T12:30"),
--(2,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T13:30","2022-11-21T23:30"),
--(22,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-22T13:30","2022-11-23T23:30"),
--(3,3, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T16:30","2022-11-20T23:30"),
--(4,3, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-19T16:30","2022-11-19T23:30"),
--(5,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T18:30","2022-11-20T22:30"),
--(55,2, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T18:30","2022-11-20T22:30"),
--(6,1, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-30T09:30","2022-11-30T12:30"), --지난 예약
--(7,1, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-30T19:30","2022-12-01T06:30"), -- 현재 사용중
--(8,1, "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-12-05T09:30","2022-12-05T17:30");  -- 예약중


INSERT INTO member_roles(Member_member_id,roles) values
(1,'USER'),
(2,'USER');

INSERT INTO admin_roles(Admin_admin_id,roles) values
(1,'ADMIN'), (1,'USER'),
(2,'ADMIN'), (2,'USER');