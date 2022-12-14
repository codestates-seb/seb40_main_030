import styled from 'styled-components';

export const KaKaoLoginBtn = styled.button`
  width: 100%;

  margin-bottom: ${({ matches }) => (matches ? '35px' : null)};
`;
