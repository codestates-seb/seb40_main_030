import { useState } from 'react';
import KakaoMap from '../@commons/KakaoMap/KakaoMap';

import * as S from './Maps.style';

const MapArea = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <S.Wrapper>
      <S.Button
        type='button'
        onClick={() => setToggle(!toggle)}
        title='지도 보기'
        value={toggle ? '지도로 보기' : '로드뷰'}
      >
        <span>{toggle ? '지도로 보기' : '로드뷰'}</span>
      </S.Button>
      {/* 상단에 검색창 추후 구현시 이자리 */}
      <KakaoMap toggle={toggle} />
    </S.Wrapper>
  );
};

export default MapArea;