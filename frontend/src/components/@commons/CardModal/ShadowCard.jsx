import * as S from './Cards.style';

const ShadowCard = ({ width, height, children, ...rest }) => {
  return (
    <S.ShadowCard width={width} height={height} {...rest}>
      {children}
    </S.ShadowCard>
  );
};

export default ShadowCard;
