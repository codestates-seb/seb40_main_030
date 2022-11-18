--더미 유저
insert into Member(member_id, email, password, nickname, phone, address, photoURL, createdAt, modifiedAt) values ('1001', 'test@gmail.com', 'asdf1234*', '테스트유저', '010-1588-1588', '경기도 성남시 분당구 정자일로 95', 'asd564aw564asdf',"2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867");

--더미 cart
insert into Cart(cart_id, startTime, endTime, createdAt, modifiedAt) values('101', '2022-11-18T09', '2022-11-20T09','2022-11-04T19:41:25.505236', '2022-11-15T19:41:25.505236');
insert into Cart(cart_id, startTime, endTime, createdAt, modifiedAt) values('102', '2022-11-20T09', '2022-11-22T09','2022-11-05T19:41:25.505236', '2022-11-16T19:41:25.505236');
insert into Cart(cart_id, startTime, endTime, createdAt, modifiedAt) values('103', '2022-11-25T09', '2022-11-29T09','2022-11-14T19:46:25.505236', '2022-11-19T19:48:25.505236');
insert into Cart(cart_id, startTime, endTime, createdAt, modifiedAt) values('104', '2022-11-07T09', '2022-11-10T09','2022-11-11T19:41:25.505236', '2022-11-13T17:41:25.505236');
insert into Cart(cart_id, startTime, endTime, createdAt, modifiedAt) values('105', '2022-12-24T09', '2022-12-25T09','2022-11-14T19:41:25.505236', '2022-11-14T19:45:25.505236');

--더미 배터리
INSERT INTO Battery(batteryId, capacity, status, price, photoURL, createdAt, LAST_MODIFIED_AT) VALUES("1", "4kWh", false, "10000", "http://img/example.com", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867");
INSERT INTO Battery(batteryId, capacity, status, price, photoURL, createdAt, LAST_MODIFIED_AT) VALUES("2", "8kWh", false, "20000", "http://img/example.com", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867");
INSERT INTO Battery(batteryId, capacity, status, price, photoURL, createdAt, LAST_MODIFIED_AT) VALUES("3", "4kWh", false, "30000", "http://img/example.com", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867");
