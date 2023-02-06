import { SnackBar } from '@/components/@commons';
import { useBottomSheet, useSnackBar } from '@/hooks';

import * as S from './BottomSheet.style';
import Header from './Header';
import { ReactNode } from 'react';

const BottomSheet = ({
  matches,
  children,
}: {
  matches: boolean;
  children: ReactNode;
}) => {
  const { onDragEnd, controls } = useBottomSheet();
  const { isActive, message } = useSnackBar();

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
      matches={matches}
    >
      <Header />
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <SnackBar isActive={isActive} message={message} />
    </S.Wrapper>
  );
};

export default BottomSheet;
