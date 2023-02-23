import { ReactNode } from 'react';

import * as S from './Cards.style';

type Props = {
  width?: string | number;
  height?: string | number;
  children: ReactNode;
};

function ShadowCard({ width, height, children }: Props) {
  return (
    <S.ShadowCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
      width={width}
      height={height}
    >
      {children}
    </S.ShadowCard>
  );
}

export default ShadowCard;
