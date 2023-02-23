import { ReactNode } from 'react';

import * as S from './Content.style';

function Modal({ children }: { children: ReactNode }) {
  return <S.ContentModal>{children}</S.ContentModal>;
}

export default Modal;
