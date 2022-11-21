import * as S from './Buttons.style';

const ShadowButton = ({
  color,
  padding,
  content,
  noShadow = false,
  ...rest
}) => {
  return (
    <S.ShadowButton
      color={color}
      padding={padding}
      noShadow={noShadow}
      {...rest}
    >
      {content}
    </S.ShadowButton>
  );
};

export default ShadowButton;
