import styled from 'styled-components';
const EntranceWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #c1c4db;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;
`;

const TitleAndLogoContainer = styled.div`
  border: 1px solid red;
  width: 450px;
  height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    padding: 10px;
    font-size: 70px;
    font-weight: 900;
  }
  & .car-logo {
  }
`;

export { TitleAndLogoContainer, EntranceWrapper };
