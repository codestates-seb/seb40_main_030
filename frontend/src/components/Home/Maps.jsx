import KakaoMap from './KakaoMap/KakaoMap';
import * as S from './Maps.style';

const MapArea = () => {
  return (
    <S.Wrapper>
      {/* 상단에 검색창 추후 구현시 이자리 */}
      <KakaoMap />
    </S.Wrapper>
  );
};

export default MapArea;
