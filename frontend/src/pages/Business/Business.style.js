import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 13px;
`;

const BodyWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* gap: 15px; */
  z-index: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -12px;
  padding: 0 10px;
`;

export { PageWrapper, BodyWrapper, HeaderContainer };
