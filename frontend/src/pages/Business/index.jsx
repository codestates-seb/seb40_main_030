import batteryData from '../../components/Business/Battery/batteryData';
import BatteryList from '../../components/Business/Battery/BatteryList';
import Filter from '../../components/Business/Filter/Filter';
import Management from '../../components/Business/Management/ManageMent';
import * as S from './Business.style';

const Business = () => {
  return (
    <S.PageWrapper>
      <S.BodyWrapper>
        <Management />
        <Filter />
        <BatteryList batteryList={batteryData} />
      </S.BodyWrapper>
    </S.PageWrapper>
  );
};

export default Business;
