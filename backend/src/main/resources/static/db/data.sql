--더미 Member
INSERT INTO Member(member_id,createdAt,modifiedAt,address,email,nickname,password,phone,photoURL) VALUES (1,'2022-11-19 17:32:55.325906','2022-11-19 17:32:55.325906','경기도 분당시 엄복동','test@gmail.com','테스트','123411aa','010-1111-2222','http://asd311114f6asd54f6aw');
INSERT INTO Member(member_id,createdAt,modifiedAt,address,email,nickname,password,phone,photoURL) VALUES (2,'2022-11-19 17:33:04.000228','2022-11-19 17:33:04.000228','서울시 강남구 역삼동','nike@gmail.com','나이키','123411aa','010-1111-2222','http://asd311114f6as3d54f6aw');

--더미 Admin
INSERT INTO Admin(adminId,createdAt,email,modifiedAt,password,phone) VALUES (1,'2022-11-19 17:33:16.026388','admin@gmail.com','2022-11-19 17:33:16.026388','asdf5t1234*','010-7942-7942');
INSERT INTO Admin(adminId,createdAt,email,modifiedAt,password,phone) VALUES (2,'2022-11-19 17:33:38.289305','admin2@gmail.com','2022-11-19 17:33:38.290304','asdf5t12342*','010-7942-7942');

-- 더미 Station
INSERT INTO Station(station_id,createdAt,modifiedAt,details,latitude,longitude,name,photoURL) VALUES (1,'2022-11-19 17:33:53.258093','2022-11-19 17:33:53.258093','첫번째 대여소',12344567,987654321,'인천제일주유소','@#!@DSAF!@#');
INSERT INTO Station(station_id,createdAt,modifiedAt,details,latitude,longitude,name,photoURL) VALUES (2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','두번째 대여소',12344567,987654321,'서울제일주유소','@#!@DSAF!@#');
--더미 Battery
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (1,'100000mA','2022-11-19 17:34:17.716045','2022-11-19 17:34:17.716045','http://asdfqwer111',50000,false,1);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (2,'100000mA','2022-11-19 17:34:18.453315','2022-11-19 17:34:18.453315','http://asdfqwer111',50000,false,1);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (3,'100000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','http://asdfqwer111',50000,false,1);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (4,'100000mA','2022-11-19 17:34:22.887204','2022-11-19 17:34:22.887204','http://asdfqwer111',50000,true,2);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (5,'100000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','http://asdfqwer111',50000,true,2);

-- 더미 payment
INSERT INTO Payment(id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES (1,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','끝나는 시간','카카오페이','시작 시간',0,50000,1,1,1);
INSERT INTO Payment(id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES (2,'2022-11-19 17:35:42.896863','2022-11-19 17:35:42.896863','끝나는 시간','카카오페이','시작 시간',0,50000,2,1,1);
INSERT INTO Payment(id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES (3,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','끝나는 시간','카카오페이','시작 시간',0,50000,3,1,1);

-- 더미 Reservation
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("1","1", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T09:52:37.9592711","2022-11-21T09:52:37.9592867");
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("2","2", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T09:52:37.9592711","2022-11-21T09:52:37.9592867");
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("3","3", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T09:52:37.9592711","2022-11-21T09:52:37.9592867");
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("4","3", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T09:52:37.9592711","2022-11-21T09:52:37.9592867");

--더미 cart
--insert into Cart(cart_id, startTime, endTime, member_id, zone_id, createdAt, modifiedAt) values('101', '2022-11-18T09', '2022-11-20T09','1001', '11', '2022-11-04T19:41:25.505236', '2022-11-15T19:41:25.505236');
--insert into Cart(cart_id, startTime, endTime, member_id, zone_id, createdAt, modifiedAt) values('102', '2022-11-20T09', '2022-11-22T09','1001', '11', '2022-11-05T19:41:25.505236', '2022-11-16T19:41:25.505236');
--insert into Cart(cart_id, startTime, endTime, member_id, zone_id, createdAt, modifiedAt) values('103', '2022-11-25T09', '2022-11-29T09','1001', '11', '2022-11-14T19:46:25.505236', '2022-11-19T19:48:25.505236');
--insert into Cart(cart_id, startTime, endTime, member_id, zone_id, createdAt, modifiedAt) values('104', '2022-11-07T09', '2022-11-10T09','1001', '11', '2022-11-11T19:41:25.505236', '2022-11-13T17:41:25.505236');
--insert into Cart(cart_id, startTime, endTime, member_id, zone_id, createdAt, modifiedAt) values('105', '2022-12-24T09', '2022-12-25T09','1001', '11', '2022-11-14T19:41:25.505236', '2022-11-14T19:45:25.505236');

