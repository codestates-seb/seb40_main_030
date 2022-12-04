import * as S from './Buttons.style';

const ShadowButton = ({ color, padding, content, shadow = true, ...rest }) => {
  return (
    <S.ShadowButton color={color} padding={padding} shadow={shadow} {...rest}>
      {content}
    </S.ShadowButton>
  );
};

export default ShadowButton;
