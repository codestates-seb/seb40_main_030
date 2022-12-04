import * as S from './Battery.style';

const BatteryTitle = ({ title }) => {
  return (
    <S.BatteryTitleContainer>
      <h1>{title}</h1>
    </S.BatteryTitleContainer>
  );
};

export default BatteryTitle;
