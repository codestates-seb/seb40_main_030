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

const getEachStateNum = (batteryList) => {
  const result = { total: 0, available: 0, unavailable: 0 };
  batteryList.forEach((el) => {
    el.status ? result.available++ : result.unavailable++;
  });
  result.total = batteryList.length;
  return result;
};

export { filterBatteryInfo, getEachStateNum };
