import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 5vh;

  border-bottom: 1px solid gray;
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 13px 0;
  font-size: 18px;
  font-weight: 400;
  border-radius: 10px;
  background-color: blue;
  color: white;
  border: none;
  letter-spacing: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

export { Container, Header, Title, ResetButton };
