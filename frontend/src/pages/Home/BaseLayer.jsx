import * as S from './BaseLayer.style';

const BaseLayer = ({ children }) => {
  return (
    <S.PageWrapper>
      <p>This is our landing page</p>
      {children}
    </S.PageWrapper>
  );
};

export default BaseLayer;
