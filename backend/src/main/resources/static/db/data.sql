insert into orders(order_id, status, startTime, endTime, createdAt, modifiedAt) values('101', '1', '2022-11-18T09', '2022-11-20T09','2022-10-14 17:13:10', '2022-10-14 17:13:10');
insert into orders(order_id, status, startTime, endTime, createdAt, modifiedAt) values('102', '1', '2022-11-20T09', '2022-11-22T09','2022-10-14 17:13:10', '2022-10-14 17:13:10');
insert into orders(order_id, status, startTime, endTime, createdAt, modifiedAt) values('103', '1', '2022-11-25T09', '2022-11-29T09','2022-10-14 17:13:10', '2022-10-14 17:13:10');
-- 필요한 mock 데이터 쿼리 입력
INSERT INTO Battery(batteryId, capacity, status, price, photoURL, createdAt, LAST_MODIFIED_AT) VALUES("1", "4kWh", false, "10000", "http://img/example.com", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867");
INSERT INTO Battery(batteryId, capacity, status, price, photoURL, createdAt, LAST_MODIFIED_AT) VALUES("2", "8kWh", false, "20000", "http://img/example.com", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867");
INSERT INTO Battery(batteryId, capacity, status, price, photoURL, createdAt, LAST_MODIFIED_AT) VALUES("3", "4kWh", false, "30000", "http://img/example.com", "2022-11-15T09:52:37.9592711","2022-11-15T09:52:37.9592867");
