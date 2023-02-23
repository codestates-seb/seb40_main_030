import { TeongImg } from '@/assets';

import EmptyWrapper from './Empty.style';

function BatteryEmpty() {
  return (
    <EmptyWrapper>
      <img src={TeongImg} alt='텅' width='100%' />
    </EmptyWrapper>
  );
}

export default BatteryEmpty;
