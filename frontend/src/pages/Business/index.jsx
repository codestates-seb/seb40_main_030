import batteryData from '../../components/Business/Battery/batteryData';
import BatteryList from '../../components/Business/Battery/BatteryList';

const Bussines = () => {
  return (
    <>
      <BatteryList batteryList={batteryData} />
    </>
  );
};

export default Bussines;
