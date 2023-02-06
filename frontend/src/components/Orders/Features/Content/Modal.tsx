import * as S from './Content.style';
import { ReactNode } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  return <S.ContentModal>{children}</S.ContentModal>;
};

export default Modal;
