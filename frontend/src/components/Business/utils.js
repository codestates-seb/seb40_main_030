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
      };
    });
    batteries.push(...EachBatteryInfo);
  });
  return batteries;
};

const filterByBatteryState = (batteryList, status) => {
  const listFiltedByBatteryState = batteryList.filter((battery) => {
    return battery.status === status;
  });
  return listFiltedByBatteryState;
};

const getEachStateNum = (batteryList) => {
  const result = [0, 0, 0];
  batteryList.forEach((el) => {
    el.status ? result[1]++ : result[2]++;
  });
  result[0] = batteryList.length;
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
    };
    stations.unshift(eachStation);
  });
  return stations;
};

export {
  filterBatteryInfo,
  getEachStateNum,
  filterByBatteryState,
  filterStationInfo,
};
