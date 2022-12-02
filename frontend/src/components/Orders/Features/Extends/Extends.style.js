import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 80%;

  .max-extend-time {
    position: relative;
    bottom: 30px;
    color: ${({ theme }) => theme.RED};
    font-weight: bold;
  }
`;

const DateSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
`;

const ExtendedDate = styled.span`
  font-size: 18px;
  padding-bottom: 20px;
  border-bottom: 1px solid red;

  margin-bottom: 20px;
`;

export { ContentWrapper, DateSelectContainer, ExtendedDate };
