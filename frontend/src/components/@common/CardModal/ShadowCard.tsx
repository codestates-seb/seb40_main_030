import { ReactNode } from 'react';
import * as S from './Cards.style';

type Props = {
  width?: string | number;
  height?: string | number;
  children: ReactNode;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
};

const ShadowCard = ({ width, height, children, ...rest }: Props) => {
  return (
    <S.ShadowCard width={width} height={height} {...rest}>
      {children}
    </S.ShadowCard>
  );
};

export default ShadowCard;
