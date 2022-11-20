import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ArrowIcon } from '../../assets';
import { currentLocationState } from '../../recoil/pagesState';
import { ShadowButton } from '../@commons';
import useSearchMap from './hooks/useSearchMap';
import * as S from './Search.style';

const SearchPage = () => {
  const { inputRef, setKeyword, locationData } = useSearchMap();

  const navigate = useNavigate();

  return (
    <S.MotionWrapper
      initial={{ opacity: 1, x: '100%', transition: { duration: 1 } }}
      animate={{ opacity: 1, x: '0%', transition: { duration: 0.5 } }}
      exit={{ opacity: 1, x: '100%', transition: { duration: 0.5 } }}
    >
      <S.Header>
        <div onClick={() => navigate(-1)}>
          <ArrowIcon />
        </div>
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

        <ShadowButton content='지도 이동하기' style={{ marginTop: 100 }} />
      </S.Header>
      <S.Body>
        {locationData?.map(({ address_name, id }) => {
          return <div key={id}>{address_name}</div>;
        })}
      </S.Body>
    </S.MotionWrapper>
  );
};

export default SearchPage;
