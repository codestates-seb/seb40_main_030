import Header from './Header';
import * as S from './BottomSheet.style';
import useBottomSheet from '../../../hooks/bottomSheet/useBottomSheet';

const BottomSheet = ({ children }) => {
  const { sheetRef, contentRef } = useBottomSheet();

  return (
    // sheetRef 가 BottomSheet 의 최상위를 가리켜야함
    <S.Wrapper ref={sheetRef}>
      <Header />
      <S.ContentWrapper ref={contentRef}>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
