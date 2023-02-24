import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import * as S from './SnackBar.style';

type Props = {
  isActive: boolean;
  message: string;
  confirm?: false;
};

function SnackBar({ isActive, message, confirm = false }: Props) {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    <S.SnackBar isActive={isActive} matches={matches} confirm={confirm}>
      <span>{message}</span>
    </S.SnackBar>
  );
}

export default SnackBar;
