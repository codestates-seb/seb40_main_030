import { ReactElement, CSSProperties } from 'react';

import StyledShadowButton from './Buttons.style';

type Props = {
  color?: string;
  padding?: string;
  content: string;
  shadow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
};

function ShadowButton({
  color,
  padding,
  content,
  shadow = true,
  onClick,
  style,
  disabled,
}: Props): ReactElement {
  return (
    <StyledShadowButton
      color={color}
      padding={padding}
      shadow={shadow}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {content}
    </StyledShadowButton>
  );
}

export default ShadowButton;
