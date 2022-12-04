// import { useLocation } from 'react-router-dom';

import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery, useSnackBar } from '@/hooks';

import * as S from './SnackBar.style';

const SnackBar = ({ isActive, message, confirm = false }) => {
  // const { pathname } = useLocation();
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
