import batteryData from '../../components/Business/Battery/batteryData';
import BatteryList from '../../components/Business/Battery/BatteryList';

import Filter from '../../components/Business/Filter/Filter';

const Bussines = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Filter />
      <BatteryList batteryList={batteryData} />
    </div>
  );
};

export default Bussines;
