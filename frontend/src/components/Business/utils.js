const filterBatteryInfo = (data) => {
  const batteries = [];
  data.stationList.forEach((station) => {
    const EachBatteryInfo = station.battery.map((bat) => {
      return {
        stationName: station.name,
        stationId: station.id,
        batteryId: bat.batteryId,
        capacity: bat.capacity,
        status: bat.status,
        price: bat.price,
        photoURL: bat.photoURL,
        batteryName: bat.batteryName,
      };
    });
    batteries.push(...EachBatteryInfo);
  });
  return batteries;
};

const filterByBatteryState = (batteryList, status) => {
  //selectFn
  const listFiltedByBatteryState = batteryList.filter((battery) => {
    return battery.status === status;
  });
  return listFiltedByBatteryState;
};

const getEachStateNum = (batteryList) => {
  const result = [0, 0, 0];
  batteryList.forEach((battery) => {
    battery.status ? result[1]++ : result[2]++;
  });
  result[0] = batteryList.length;
  return result;
};

//전체 단일 관리자 api사용해서 stationList => station 정보만 map
const filterStation = (adminInfo) => {
  const result = adminInfo.stationList.map((station) => {
    return {
      stationId: station.id,
      details: station.details,
      stationName: station.name,
      photoURL: station.photoURL,
      batteryCount: station.battery.length,
      phone: station.phone,
    };
  });
  return result;
};

//전체 단일 관리자 api사용해서 stationList => battery 있는 스테이션 갯수 정보만 map
const stationListWithValidBattery = (stationsInfo) => {
  const result = [0, 0, 0];
  stationsInfo.forEach((station) => {
    station.batteryCount > 0 ? result[1]++ : result[2]++;
  });
  result[0] = stationsInfo.length;
  return result;
};

const removeDuplicatedBatteryName = (data) => {
  const onlyOneNames = data.reduce(function (acc, current) {
    if (
      acc.findIndex(
        ({ batteryName }) => batteryName === current.batteryName,
      ) === -1
    ) {
      acc.push(current);
    }
    return acc;
  }, []);
  return onlyOneNames;
};

const removeDuplicatedStationName = (data) => {
  const onlyOneNames = data.reduce(function (acc, current) {
    if (
      acc.findIndex(
        ({ stationName }) => stationName === current.stationName,
      ) === -1
    ) {
      acc.push(current);
    }
    return acc;
  }, []);
  return onlyOneNames;
};

//필터 상태에 따라 필터링
const filterByStationState = (stationList, status) => {
  const listFilteredByStationState = stationList.filter((station) => {
    return (station.batteryCount > 0 ? true : false) === status;
  });
  return listFilteredByStationState;
};

const getStationEachStatNum = () => {};

export {
  filterBatteryInfo,
  getEachStateNum,
  filterByBatteryState,
  removeDuplicatedBatteryName,
  removeDuplicatedStationName,
  filterByStationState,
  getStationEachStatNum,
  filterStation,
  stationListWithValidBattery,
};
