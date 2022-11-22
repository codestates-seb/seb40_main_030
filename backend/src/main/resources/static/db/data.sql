--더미 Member
INSERT INTO Member(member_id,createdAt,modifiedAt,address,email,nickname,password,phone,photoURL) VALUES (1,'2022-11-19 17:32:55.325906','2022-11-19 17:32:55.325906','경기도 분당시 엄복동','test@gmail.com','테스트','123411aa','010-1111-2222','http://asd311114f6asd54f6aw');
INSERT INTO Member(member_id,createdAt,modifiedAt,address,email,nickname,password,phone,photoURL) VALUES (2,'2022-11-19 17:33:04.000228','2022-11-19 17:33:04.000228','서울시 강남구 역삼동','nike@gmail.com','나이키','123411aa','010-1111-2222','http://asd311114f6as3d54f6aw');

--더미 Admin
INSERT INTO Admin(adminId,createdAt,email,modifiedAt,password,phone) VALUES (1,'2022-11-19 17:33:16.026388','admin@gmail.com','2022-11-19 17:33:16.026388','asdf5t1234*','010-7942-7942');
INSERT INTO Admin(adminId,createdAt,email,modifiedAt,password,phone) VALUES (2,'2022-11-19 17:33:38.289305','admin2@gmail.com','2022-11-19 17:33:38.290304','asdf5t12342*','010-7942-7942');

-- 더미 Station
INSERT INTO Station(station_id,createdAt,modifiedAt,details,latitude,longitude,name,photoURL,phone) VALUES (1,'2022-11-19 17:33:53.258093','2022-11-19 17:33:53.258093','첫번째 대여소',37.53737528,127.00557633,'인천제일주유소','@#!@DSAF!@#','010-1588-1588');
INSERT INTO Station(station_id,createdAt,modifiedAt,details,latitude,longitude,name,photoURL,phone) VALUES (2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','두번째 대여소',37.545024,127.03923,'서울제일주유소','@#!@DSAF!@#','010-2580-2580');

--더미 Battery
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (1,'100000mA','2022-11-19 17:34:17.716045','2022-11-19 17:34:17.716045','http://asdfqwer111',50000,false,1);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (2,'100000mA','2022-11-19 17:34:18.453315','2022-11-19 17:34:18.453315','http://asdfqwer111',50000,false,1);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (3,'100000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','http://asdfqwer111',50000,false,1);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (4,'100000mA','2022-11-19 17:34:22.887204','2022-11-19 17:34:22.887204','http://asdfqwer111',50000,true,2);
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,status,station_id) VALUES (5,'100000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','http://asdfqwer111',50000,true,2);

-- 더미 payment
INSERT INTO Payment(id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES (1,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-11-20T23:30','카카오페이','2022-11-20T17:30',0,50000,1,1,1);
INSERT INTO Payment(id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES (2,'2022-11-19 17:35:42.896863','2022-11-19 17:35:42.896863','2022-11-21T19:00','카카오페이','2022-11-21T09:00',0,50000,2,1,1);
INSERT INTO Payment(id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id) VALUES (3,'2022-11-19 17:35:48.372801','2022-11-19 17:35:48.372801','2022-11-25T09:00','카카오페이','2022-11-23T09:00',0,50000,3,1,1);

-- 더미 Reservation
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("1","1", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T13:30","2022-11-21T23:30");  --됨 after
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("11","1", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T13:30","2022-11-21T23:30");  --됨 after
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("2","2", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T13:30","2022-11-21T23:30");  --됨 after
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("22","2", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-21T13:30","2022-11-21T23:30");  --됨 after
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("3","3", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T16:30","2022-11-20T23:30");  --안됨
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("4","3", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-19T16:30","2022-11-19T23:30");  --됨 before
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("5","2", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T18:30","2022-11-20T22:30");  --안됨
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime) VALUES ("55","2", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867", "2022-11-20T18:30","2022-11-20T22:30");  --안됨
-- avail = 1, 2, 3
-- unavail = 3, 2
-- final = 1