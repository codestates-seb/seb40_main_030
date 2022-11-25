import { useRecoilValue } from 'recoil';

import InputModal from '@/components/Business/InputModal/InputModal';
import { addModeState } from '@/recoil/business';

import PageWrapper from '../../components/@commons/PageWrapper/PageWrapper';
import BatteryList from '../../components/Business/Battery/BatteryList';
import Filter from '../../components/Business/Filter/Filter';
import Management from '../../components/Business/Management/Management';
import useGetBatteryList from '../../hooks/Business/useGetBatteryList';
import * as S from './Business.style';

const Business = () => {
  const { batteryInfo, isLoading } = useGetBatteryList();
  const isAddMode = useRecoilValue(addModeState);

  if (isLoading) {
    return <p>로딩중</p>;
  }

  return (
    <PageWrapper title={'사장님'} path={'/'}>
      {isAddMode ? <InputModal /> : null}
      <S.BodyWrapper>
        <Management />
        <Filter countList={batteryInfo.countList} />
        <BatteryList batteryList={batteryInfo.batteryList} />
      </S.BodyWrapper>
    </PageWrapper>
  );
};

export default Business;
