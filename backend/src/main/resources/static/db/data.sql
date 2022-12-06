--더미 Member
INSERT INTO Member(member_id,createdAt,modifiedAt,address,detailAddress,email,nickname,password,phone,photoURL,kakaoAccessToken,kakaoRefreshToken) VALUES
(1,'2022-11-27 19:46:44.346140','2022-11-27 19:46:44.346140','경기도 분당시 엄복동','자전차왕 푸르지오 1001동 401호','test@gmail.com','테스트','{bcrypt}$2a$10$XGotgfCnYqJ/kVeDoiD1KeS7fIidoyrr8kbjXNxRKGfGxPNQhmzXy','010-1111-2222','http://asd311114f6asd54f6aw',null,null),
(2,'2022-11-27 19:47:10.850315','2022-11-27 19:47:10.850315','서울시 강남구 역삼동','아디다스 앞동네','nike@gmail.com','나이키','{bcrypt}$2a$10$.vHhhPbb7F1hgmRD5Cxkb.d97nem9ApMGHDQbatnjxnelVpcBg.p6','010-1111-2222','http://asd311114f6asd54f6aw',null,null);

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
(20,2,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','롯데월드 대여소',37.51260448,127.10255559,'롯데월드타워','@#!@DSAF!@#','010-2580-2580',234446),
(21,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','서울숲 대여소',37.54432223,127.04273991,'서울숲','@#!@DSAF!@#','02-460-2905',11331488),
(22,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','서울고속버스터미널 대여소',37.50607506,127.0069895,'서울고속버스터미널','@#!@DSAF!@#','010-2580-2580',12989994),
(23,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','여의도 한강공원 대여소',37.53424287,126.91556039,'여의도한강공원주차장','@#!@DSAF!@#','010-2580-2580',17556915),
(24,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','더 현대 서울 대여소',37.52587207,126.92844612,'더현대서울','@#!@DSAF!@#','02-767-2233',1662602781),
(25,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','국회의사당 대여소',37.53190827,126.91416237,'국회의사당','@#!@DSAF!@#','010-2580-2580',18742697),
(26,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','부산역 대여소',35.11510918,129.04141918,'부산역','@#!@DSAF!@#','010-2580-2580',8329752),
(27,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','신세계 센텀 대여소',35.16864393,129.12907174,'신세계백화점 센텀시티점','@#!@DSAF!@#','010-2580-2580',7969139),
(28,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','광안리해수욕장 대여소',35.15319327,129.11897609,'광안리해수욕장','@#!@DSAF!@#','010-2580-2580',8202423),
(29,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','동서대 센텀 대여소',35.1729329,129.12756151,'동서대학교 센텀산업단지캠퍼스','@#!@DSAF!@#','010-2580-2580',19451298),
(30,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','시그니엘 대여소',35.16029421,129.16921767,'시그니엘 부산','@#!@DSAF!@#','010-2580-2580',327520717),
(31,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','파라다이스호텔 부산 대여소',35.16022153,129.16527311,'파라다이스호텔 부산','@#!@DSAF!@#','010-2580-2580',8625845),
(32,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','김해국제공항 대여소',35.1731997,128.94672874,'김해국제공항','@#!@DSAF!@#','010-2580-2580',8239831),
(33,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','송정해수욕장 대여소',37.77982866,128.93779616,'송정해변','@#!@DSAF!@#','010-2580-2580',7960891),
(34,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','김포국제공항 대여소',37.55894903,126.80286552,'김포국제공항','@#!@DSAF!@#','010-2580-2580',26970621),
(35,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','인천국제공항 대여소',37.44945028,126.4504267,'인천국제공항','@#!@DSAF!@#','010-2580-2580',10751028),
(36,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','신세계백화점 의정부점 대여소',37.73721362,127.04630894,'신세계백화점 의정부점','@#!@DSAF!@#','010-2580-2580',10068751),
(37,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','영등포역 대여소',37.5156837,126.90787603,'영등포역','@#!@DSAF!@#','010-2580-2580',8001349),
(38,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','노들섬 대여소',37.51766014,126.95803387,'노들섬','@#!@DSAF!@#','010-2580-2580',8252248),
(39,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','카카오 모빌 대여소',37.47540327,126.63261605,'동인천역','@#!@DSAF!@#','010-2580-2580',21160563),
(40,1,'2022-11-19 17:34:05.641588','2022-11-19 17:34:05.641588','코스트코 양재점 대여소',37.46193109,127.03628788,'코스트코 양재점','@#!@DSAF!@#','010-2580-2580',8105590);




--더미 Battery
INSERT INTO Battery(batteryId,capacity,createdAt,LAST_MODIFIED_AT,photoURL,price,defaultPrice,status,station_id, batteryName) VALUES
(1,'50000mA','2022-11-19 17:34:17.716045','2022-11-19 17:34:17.716045','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,1,"Samsung"),
(2,'100000mA','2022-11-19 17:34:18.453315','2022-11-19 17:34:18.453315','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,15000,false,1,"Samsung"),
(3,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,20000,true,1,"Samsung"),
(4,'50000mA','2022-11-19 17:34:22.887204','2022-11-19 17:34:22.887204','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,true,2,"Hyundai"),
(5,'30000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,5000,true,2,"Hyundai"),
(6,'150000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,15000,false,2,"Hyundai"),
(7,'200000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,20000,false,2,"Hyundai"),
(8,'100000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,15000,true,3,"Hyundai"),
(9,'50000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,true,4,"Hyundai"),
(10,'70000mA','2022-11-19 17:34:23.503853','2022-11-19 17:34:23.503853','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,12500,false,4,"Hyundai"),
(11,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,20000,true,1,"Samsung"),
(12,'150000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,15000,true,1,"Samsung"),
(13,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,true,2,"Samsung"),
(14,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,2,"Samsung"),
(15,'100000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,15000,false,2,"Samsung"),
(16,'200000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,20000,false,5,"Kakao"),
(17,'150000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,15000,true,5,"SK_Innovation"),
(18,'300000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,30000,true,6,"Kakao"),
(19,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,6,"LG_Energy_Solution"),
(20,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,7,"Kakao"),
(21,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,7,"Kakao"),
(22,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,7,"Kakao"),
(23,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,7,"Kakao"),
(24,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,7,"Kakao"),
(25,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,8,"Kakao"),
(26,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,8,"Kakao"),
(27,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,8,"Kakao"),
(28,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,8,"Kakao"),
(29,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,8,"Kakao"),
(30,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,8,"Kakao"),
(31,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,9,"Kakao"),
(32,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,9,"Kakao"),
(33,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,9,"Kakao"),
(34,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,9,"Kakao"),
(35,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,9,"Kakao"),
(36,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,10,"Kakao"),
(37,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,10,"Kakao"),
(38,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,10,"Kakao"),
(39,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,11,"Kakao"),
(40,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,11,"Kakao"),
(41,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,11,"Kakao"),
(42,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,12,"Kakao"),
(43,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,12,"Kakao"),
(44,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,13,"Kakao"),
(45,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,13,"Kakao"),
(46,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,13,"Kakao"),
(47,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,14,"Kakao"),
(48,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,15,"Kakao"),
(49,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,15,"Kakao"),
(50,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,16,"Kakao"),
(51,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,16,"Kakao"),
(52,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,16,"Kakao"),
(53,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,16,"Kakao"),
(54,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,17,"Kakao"),
(55,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,17,"Kakao"),
(56,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,18,"Kakao"),
(57,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,18,"Kakao"),
(58,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,18,"Kakao"),
(59,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,18,"Kakao"),
(60,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,18,"Kakao"),
(61,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,19,"Kakao"),
(62,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,20,"Kakao"),
(63,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,20,"Kakao"),
(64,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,21,"Kakao"),
(65,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,21,"Kakao"),
(66,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,22,"Kakao"),
(67,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,22,"Kakao"),
(68,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,22,"Kakao"),
(69,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,22,"Kakao"),
(70,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,23,"Kakao"),
(71,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,23,"Kakao"),
(72,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,23,"Kakao"),
(73,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,23,"Kakao"),
(74,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,23,"Kakao"),
(75,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,24,"Kakao"),
(76,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,24,"Kakao"),
(77,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,24,"Kakao"),
(78,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,24,"Kakao"),
(79,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,24,"Kakao"),
(80,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,25,"Kakao"),
(81,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,25,"Kakao"),
(82,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,25,"Kakao"),
(83,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,26,"Kakao"),
(84,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,26,"Kakao"),
(85,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,27,"Kakao"),
(86,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,27,"Kakao"),
(87,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,28,"Kakao"),
(88,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,29,"Kakao"),
(89,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,29,"Kakao"),
(90,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,30,"Kakao"),
(91,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,30,"Kakao"),
(92,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,31,"Kakao"),
(93,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,32,"Kakao"),
(94,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,33,"Kakao"),
(95,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,34,"Kakao"),
(96,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,35,"Kakao"),
(97,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,36,"Kakao"),
(98,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,36,"Kakao"),
(99,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,37,"Kakao"),
(100,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,38,"Kakao"),
(101,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,38,"Kakao"),
(102,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,39,"Kakao"),
(103,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,39,"Kakao"),
(104,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,39,"Kakao"),
(105,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,39,"Kakao"),
(106,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,39,"Kakao"),
(107,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,40,"Kakao"),
(108,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://d3jn14jkdoqvmm.cloudfront.net/wp/wp-content/uploads/2021/11/08143804/%EC%A0%84%EA%B8%B0%EC%B0%A8%EC%9A%A9-%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-ZipCharge-Go-evpost-01_evpost.jpg',50,10000,false,40,"Kakao"),
(109,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,40,"Kakao"),
(110,'50000mA','2022-11-19 17:34:19.139197','2022-11-19 17:34:19.139197','https://o.aolcdn.com/hss/storage/midas/22a58d08f10e1ec9ff7a4772952a8d48/203525068/honda-clarity-generator-2016-03-10-01.jpg',50,10000,false,40,"Kakao");

-- 더미 payment
INSERT INTO Payment(payment_id,createdAt,modifiedAt,endTime,payMethod,startTime,status,totalPrice,battery_id,member_id,station_id,returnTime) VALUES
(1,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094',"2022-12-01T15:30",'카카오페이','2022-12-01T00:00',3,10300,1,1,1,"2022-12-01T15:30"),
(2,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-03T18:30','카카오페이','2022-12-02T17:30',3,10300,1,1,1,'2022-12-03T18:30'),
(3,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-10T18:30','카카오페이','2022-12-09T17:30',1,10300,2,1,1,'2022-12-10T18:30'),
(4,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-25T18:30','카카오페이','2022-12-24T17:30',1,10300,2,1,1,'2022-12-25T18:30'),
(5,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-02T18:30','카카오페이','2022-12-01T17:30',3,25000,2,1,1,'2022-12-02T18:30'),
(6,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-31T18:30','카카오페이','2022-12-30T17:30',1,25000,2,1,1,'2022-12-31T18:30'),
(7,'2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094','2022-12-14T18:30','카카오페이','2022-12-03T17:30',2,100000,2,1,1,'2022-12-14T18:30');

-- 더미 Reservation
INSERT INTO Reservation(reservationId, battery_id, createdAt, modifiedAt, startTime, endTime,payment_id) VALUES
(1,1, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-01T00:00","2022-12-01T15:30",1),
(2,1, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-01T17:30","2022-12-01T18:30",2),
(3,2, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-02T17:30","2022-12-02T18:30",3),
(4,2, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-04T17:30","2022-12-04T18:30",4),
(5,2, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-31T17:30","2022-12-30T18:30",6),
(6,2, '2022-11-19 17:34:32.536094','2022-11-19 17:34:32.537094', "2022-12-14T17:30","2022-12-03T18:30",7);


INSERT INTO member_roles(Member_member_id,roles) values
(1,'USER'),
(2,'USER');

INSERT INTO admin_roles(Admin_admin_id,roles) values
(1,'ADMIN'), (1,'USER'),
(2,'ADMIN'), (2,'USER');