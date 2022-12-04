import { useSearchParams } from 'react-router-dom';

import { useSearchBar } from '@/hooks';

import * as S from './SearchBar.style';

const SearchBar = ({ stations, setLocationInfo }) => {
  const [_, setSearchParams] = useSearchParams();
  _;

  const {
    handleKeyword,
    handleAutoComplete,
    inputRef,
    isActive,
    filteredLocation,
  } = useSearchBar(stations);

  return (
    <S.Wrapper>
      <S.InputContainer>
        <S.SearchInput
          ref={inputRef}
          type='text'
          placeholder='어디에서 빌리시나요 ?'
          maxLength={20}
          onChange={(e) => handleKeyword(e.target.value)}
        />
        <S.AutoCompleteContainer isActive={isActive}>
          {filteredLocation?.length === 0 ? (
            <S.AutoCompleteList>{`검색하신 결과가 존재하지 않습니다.`}</S.AutoCompleteList>
          ) : (
            filteredLocation.map((locationInfo) => (
              <S.AutoCompleteList
                key={locationInfo.confirmId + locationInfo.id}
                onClick={(e) => {
                  handleAutoComplete();
                  setSearchParams({ location: e.target.textContent });
                  setLocationInfo(locationInfo);
                }}
              >
                {locationInfo.name}
              </S.AutoCompleteList>
            ))
          )}
        </S.AutoCompleteContainer>
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default SearchBar;
