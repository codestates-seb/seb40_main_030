import batteryData from '../../components/Business/Battery/batteryData';
import BatteryList from '../../components/Business/Battery/BatteryList';
import Filter from '../../components/Business/Filter/Filter';
import { BodyWrapper, PageWrapper } from './Business.style';

const Business = () => {
  return (
    <PageWrapper>
      <BodyWrapper>
        <Filter />
        <BatteryList batteryList={batteryData} />
      </BodyWrapper>
    </PageWrapper>
  );
};

export default Business;
