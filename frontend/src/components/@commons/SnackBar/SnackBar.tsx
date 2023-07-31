// import { useLocation } from 'react-router-dom';

import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery, useSnackBar } from '@/hooks';

import * as S from './SnackBar.style';

type Props = {
  isActive: boolean;
  message: string;
  confirm?: false;
};

const SnackBar = ({ isActive, message, confirm = false }: Props) => {
  const { setIsConfirmed, setIsCanceled } = useSnackBar();
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    <S.SnackBar isActive={isActive} matches={matches} confirm={confirm}>
      <span>{message}</span>
      {confirm && (
        <S.ButtonContainer>
          <button onClick={() => setIsConfirmed(true)}>확인</button>
          <button onClick={() => setIsCanceled(true)}>취소</button>
        </S.ButtonContainer>
      )}
    </S.SnackBar>
  );
};

export default SnackBar;
