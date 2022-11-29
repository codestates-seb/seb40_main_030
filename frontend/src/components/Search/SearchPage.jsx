import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ShadowButton, SnackBar } from '@/components/@commons';
import { useSnackBar } from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './Search.style';
import SearchBar from './SearchBar/SearchBar';

const SearchPage = ({ stations }) => {
  const { isActive, message, openSnackBar } = useSnackBar();
  const [locationInfo, setLocationInfo] = useState();
  const navigate = useNavigate();
  const setLocation = useSetRecoilState(currentLocationState);

  return (
    <>
      <div>
        <SearchBar stations={stations} setLocationInfo={setLocationInfo} />
        {locationInfo && (
          <ShadowButton
            content={`${locationInfo.name}으로 이동`}
            width='100%'
            style={{ marginTop: 100, width: '100%' }}
            onClick={() =>
              locationInfo
                ? (setLocation(locationInfo.location), navigate('/'))
                : openSnackBar('검색어를 입력해주세요.')
            }
          />
        )}
      </div>
      <S.Body></S.Body>
      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default SearchPage;
