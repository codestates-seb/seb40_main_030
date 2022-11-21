import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { currentLocationState } from '../../recoil/pagesState';
import { ShadowButton } from '../@commons';
import useSearchMap from './hooks/useSearchMap';
import * as S from './Search.style';

const SearchPage = () => {
  const navigate = useNavigate();
  const { inputRef, setKeyword, locationData } = useSearchMap();
  const setLocation = useSetRecoilState(currentLocationState);

  return (
    <>
      <div>
        <S.SearchInput
          ref={inputRef}
          type='text'
          placeholder='어디에서 빌리시나요 ?'
          maxLength={20}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setKeyword(e.target.value);
            }
          }}
        />
        <ShadowButton
          content='지도 이동하기'
          width='100%'
          style={{ marginTop: 100 }}
          onClick={() => {
            navigate(`/`);
            setLocation({
              latitude: locationData[0]?.y,
              longitude: locationData[0]?.x,
            });
          }}
        />
      </div>
      <S.Body>
        {locationData.length === 0 ? (
          <div>검색 결과가 존재하지 않습니다.</div>
        ) : (
          locationData?.map(({ address_name, id }) => (
            <div key={id}>{address_name}</div>
          ))
        )}
      </S.Body>
    </>
  );
};

export default SearchPage;
