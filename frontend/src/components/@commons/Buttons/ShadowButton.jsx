import * as S from './Buttons.style';

const ShadowButton = ({ content, ...rest }) => {
  return <S.ShadowButton {...rest}>{content}</S.ShadowButton>;
};

export default ShadowButton;
