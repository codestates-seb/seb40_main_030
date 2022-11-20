import Header from './Header';
import * as S from './BottomSheet.style';
import useBottomSheet from '../../../hooks/BottomSheet/useBottomSheet';

const BottomSheet = ({ children }) => {
  const { onDragEnd, controls } = useBottomSheet();

  return (
    <S.Wrapper
      drag='y'
      onDragEnd={onDragEnd}
      initial='hidden'
      animate={controls}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 400,
      }}
      variants={{
        visible: { y: 0 },
        hidden: { y: '100%' },
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
    >
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};

export default BottomSheet;
