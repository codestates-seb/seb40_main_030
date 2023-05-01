import styled from 'styled-components';

export const KaKaoLoginBtn = styled.button`
  width: 100%;
  margin-bottom: ${({ matches }) => (matches ? '35px' : null)};
  @media (min-width: 376px) {
    display: flex;
    align-items: center;
    background-color: #fee500;
    border-radius: 3px;
    img {
      height: 50px;
      width: 370px;
    }
  }
`;
