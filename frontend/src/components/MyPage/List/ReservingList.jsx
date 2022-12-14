import * as S from './ReservingList.style';
import styled from 'styled-components';
import { useEffect } from 'react';

const ReservingList = ({ data }) => {
  const img = data.batteryPhotoURL;
  const start = data.startTime.split('');
  const end = data.endTime.split('');

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
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    background-color: white;
    background-image: url(${img});
    border-radius: 3px;
    width: 20%;
    height: 50px;
    margin: 0 3px 3px 0;
  `;

  return (
    <S.ReservingListContainer>
      <S.ListContents>
        <BatteryImg />
        <S.ListText>
          <S.SpanTextDiv>
            <S.SpanData>{timeRefresh()}</S.SpanData>
          </S.SpanTextDiv>
          <S.SpanTextDiv>
            <S.SpanStatus>결제완료</S.SpanStatus>
          </S.SpanTextDiv>
        </S.ListText>
      </S.ListContents>
    </S.ReservingListContainer>
  );
};

export default ReservingList;
