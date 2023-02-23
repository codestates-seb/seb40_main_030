import styled from 'styled-components';

const ContentWrapper = styled.div<{ height?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: ${({ height }) => height || '80%'};

  .max-extend-time {
    position: relative;
    bottom: 30px;
    color: ${({ theme }) => theme.RED};
    font-weight: bold;
  }

  b {
    font-size: 20px;
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

const ReturnDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 60%;
`;

const Border = styled.div`
  margin: 5px 0;
`;

const ExtendNotPossibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 20px;
    text-align: center;
  }
`;

export {
  ContentWrapper,
  DateSelectContainer,
  ExtendedDate,
  ReturnDateContainer,
  Border,
  ExtendNotPossibleContainer,
};
