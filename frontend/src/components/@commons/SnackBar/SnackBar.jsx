import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import * as S from './SnackBar.style';

const SnackBar = ({ isActive, message }) => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  // snackbar의 fixed 위치가 scroll 대응을 못함
  return (
    <S.SnackBar isActive={isActive} matches={matches}>
      <span>{message}</span>
    </S.SnackBar>
  );
};

export default SnackBar;
