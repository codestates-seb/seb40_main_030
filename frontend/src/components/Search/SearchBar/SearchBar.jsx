import { useSearchParams } from 'react-router-dom';

import { useSearchBar } from '@/hooks';

import * as S from './SearchBar.style';

const SearchBar = () => {
  const [_, setSearchParams] = useSearchParams();
  _;

  const {
    handleKeyword,
    handleAutoComplete,
    inputRef,
    isActive,
    filteredLocation,
  } = useSearchBar();

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
          {filteredLocation.map((location, i) => (
            <S.AutoCompleteList
              key={i}
              onClick={(e) => {
                handleAutoComplete();
                setSearchParams({ location: e.target.textContent });
              }}
            >
              {location}
            </S.AutoCompleteList>
          ))}
        </S.AutoCompleteContainer>
      </S.InputContainer>
    </S.Wrapper>
  );
};

export default SearchBar;
