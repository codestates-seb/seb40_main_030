import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ShadowButton, SnackBar } from '@/components/@commons';
import { MESSAGE, ROUTES } from '@/constants';
import { useSnackBar } from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

import SearchBar from './SearchBar/SearchBar';
import { StationType } from '../../@types/index';

const SearchPage = ({ stations }: { stations: StationType[] }) => {
  const { isActive, message, openSnackBar } = useSnackBar();
  const [locationInfo, setLocationInfo] = useState<any>({});
  const navigate = useNavigate();
  const setLocation = useSetRecoilState(currentLocationState);

  return (
    <>
      <div>
        <SearchBar stations={stations} setLocationInfo={setLocationInfo} />
        {Object.keys(locationInfo).length !== 0 && (
          <ShadowButton
            content={`${locationInfo?.name}으로 이동`}
            width='100%'
            style={{ marginTop: 100, width: '100%' }}
            onClick={() =>
              Object.keys(locationInfo).length !== 0
                ? (setLocation(locationInfo?.location),
                  navigate(ROUTES.HOME.PATH))
                : openSnackBar(MESSAGE.KEYWORD_NOT_PROVIDED)
            }
          />
        )}
      </div>
      <SnackBar isActive={isActive} message={message} />
    </>
  );
};

export default SearchPage;
