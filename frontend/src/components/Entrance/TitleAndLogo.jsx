import { ServiceLogo } from '../../assets';
import * as S from './Entrance.style';
const TitleAndLogo = () => {
  return (
    <S.TitleAndLogoContainer>
      <h1>집나간 배터리</h1>
      <div className='car-logo'>
        <ServiceLogo width={'200px'} height={'300px'} />
      </div>
    </S.TitleAndLogoContainer>
  );
};

export default TitleAndLogo;
