import * as S from './UseNowList.style';
import styled from 'styled-components';

const UseNowList = ({ data }) => {
  console.log('List/UseNowList-> props data : ', data);

  const img = data.batteryPhotoURL;

  // 시간 props로 받은거 배열로 만들어주기
  const start = data.startTime.split('');
  const end = data.endTime.split('');
  // 시간 깔끔하게 해주는 함수
  const timeRefresh = () => {
    let newStart = [...start];
    let newEnd = [...end];
    let result = '';

    newStart.splice(newStart.indexOf('T'), 1, ' ');
    newEnd.splice(newEnd.indexOf('T'), 1, ' ');

    result = newStart.join('') + ' ~ ' + newEnd.join('');

    return result;
  };

  const BatteryImg = styled.div`
    background-size: contain;
    display: block;
    background-color: white;
    background-image: url(${img});
    border-radius: 3px;
    width: 20%;
    margin-right: 3px;
  `;
  return (
    <S.UseNowListContainer>
      <S.ListContents>
        <BatteryImg />
        <S.ListText>
          <S.SpanTextDiv>
            <S.SpanTitle>대여기간 : </S.SpanTitle>
            <S.SpanData>{timeRefresh()}</S.SpanData>
          </S.SpanTextDiv>
          <S.SpanTextDiv>
            <S.SpanTitle>대여위치 : </S.SpanTitle>
            <S.SpanData>{data.stationName}</S.SpanData>
          </S.SpanTextDiv>
          <S.SpanTextDiv>
            <S.SpanTitle>배터리이름 : </S.SpanTitle>
            <S.SpanData>{data.batteryName}</S.SpanData>
          </S.SpanTextDiv>
          <S.SpanTextDiv>
            <S.SpanTitle>결제금액 : </S.SpanTitle>
            <S.SpanData>{data.totalPrice}원</S.SpanData>
          </S.SpanTextDiv>
        </S.ListText>
      </S.ListContents>
    </S.UseNowListContainer>
  );
};

export default UseNowList;
