import { CSSProperties } from 'styled-components';
import * as S from './Buttons.style';

type Props = {
  color?: string;
  padding?: string;
  content: string;
  shadow?: boolean;
  width?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
};

const ShadowButton = ({
  color,
  padding,
  content,
  shadow = true,
  ...rest
}: Props) => {
  return (
    <S.ShadowButton color={color} padding={padding} shadow={shadow} {...rest}>
      {content}
    </S.ShadowButton>
  );
};

export default ShadowButton;
