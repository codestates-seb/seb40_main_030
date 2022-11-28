const filterBatteryInfo = (data) => {
  const batteries = [];
  data.stationList.forEach((station) => {
    const EachBatteryInfo = station.battery.map((bat) => {
      return {
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

//station 각 상태 별 갯수
const getStationEachStateNum = (stationList) => {
  const result = [0, 0, 0];
  stationList.forEach((station) => {
    station.batteryCount > 0 ? result[1]++ : result[2]++;
  });
  result[0] = stationList.length;
  return result;
};

const filterStationInfo = (data) => {
  const stations = [];
  data.content.forEach((station) => {
    const eachStation = {
      stationId: station.id,
      stationName: station.name,
      photoURL: station.photoURL,
      batteryCount: station.batteries.length,
      phone: station.phone,
      details: station.details,
    };
    stations.unshift(eachStation);
  });
  return stations;
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
  filterStationInfo,
  removeDuplicatedBatteryName,
  removeDuplicatedStationName,
  getStationEachStateNum,
  filterByStationState,
  getStationEachStatNum,
};
