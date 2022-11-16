import { ServiceLogo } from '../../assets';
import * as S from './EntranceStyledComp.style';
const TitleAndLogo = () => {
  return (
    <S.TitleAndLogoContainer>
      <div>집나간 배터리</div>
      <div className='car-logo'>
        <ServiceLogo width={'200px'} height={'300px'} />
      </div>
    </S.TitleAndLogoContainer>
  );
};

export default TitleAndLogo;
