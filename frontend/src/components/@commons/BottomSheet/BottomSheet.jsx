import Header from './Header';
import * as S from './BottomSheet.style';
import useBottomSheet from '../../../hooks/bottomSheet/useBottomSheet';

const BottomSheet = () => {
  // const { sheetRef } = useBottomSheet();

  return (
    // sheet 가 BottomSheet 의 최상위를 가리켜야함
    <S.Wrapper>
      <Header />
    </S.Wrapper>
  );
};

export default BottomSheet;
