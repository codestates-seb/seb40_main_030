import * as S from './Battery.style';

const BatteryStatus = ({ status, count }) => {
  console.log(count);
  return (
    <>
      <S.BatteryStatusContainer status={status} count={count}>
        <div> {status ? '대여가능' : '사용중'}</div>
        {count ? <div>{`${count}개`}</div> : null}
      </S.BatteryStatusContainer>
    </>
  );
};

export default BatteryStatus;
