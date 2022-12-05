import { TeongImg } from '@/assets';

import * as S from './Empty.style';

const BatteryEmpty = () => {
  return (
    <S.EmptyWrapper>
      <img src={TeongImg} alt='텅' width='100%' />
      {/* <img src={BatteryEmptyImg} alt='배터리 없어요' width='100%' /> */}
    </S.EmptyWrapper>
  );
};

export default BatteryEmpty;
