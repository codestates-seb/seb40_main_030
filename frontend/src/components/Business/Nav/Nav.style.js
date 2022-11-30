import styled from 'styled-components';

const NavigationBarWrapper = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
`;

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ToggleButtonContainer = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid gray;
  cursor: pointer;
  margin: 0 5px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const CircleContainer = styled.div`
  background-color: #9e9d9d;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${({ isClicked }) =>
    isClicked &&
    `transform: translate(18px, 0);
    transition: all 0.5s ease-in-out;
    `}
`;

export {
  NavigationBarWrapper,
  NavigationBarContainer,
  ToggleButtonContainer,
  CircleContainer,
};
