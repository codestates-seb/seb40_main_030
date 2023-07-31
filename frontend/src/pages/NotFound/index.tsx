import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants';

import * as S from './NotFound.style';

type Props = {
  message?: string;
  button?: boolean;
  bgColor?: string;
  color?: string;
};

const NotFound = ({
  message = '404 Not Found',
  button = true,
  bgColor,
  color,
}: Props) => {
  return (
    <S.Wrapper
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      bgColor={bgColor}
      color={color}
    >
      <S.Message>{message}</S.Message>
      {button && (
        <S.GoBackButton>
          <Link to={ROUTES.HOME.PATH}>뒤로가기</Link>
        </S.GoBackButton>
      )}
    </S.Wrapper>
  );
};

export default NotFound;
