import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
  height: 8.5%;
  background: #fff;
  top: 93%;
  align-items: center;
  border-radius: 20px;
  padding: 0 20px;

  z-index: 10;
`;

const ListWrap = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const List = styled.div`
  width: calc(100vw / 5.7);
  /* width: 70px; */
  height: 100%;
  position: relative;
  z-index: 1;

  &:active,
  &.active {
    div {
      .icon {
        color: #fff;
        transform: translateY(-100%);
      }
      .text {
        opacity: 1;
        transform: translateY(10px);
      }
    }
  }

  &:nth-child(1).active ~ .indicator {
    transform: translateX(calc(calc(100vw / 5.6) * 0));
  }
  &:nth-child(2).active ~ .indicator {
    transform: translateX(calc(calc(100vw / 5.6) * 1 + (6px * 4)));
  }
  &:nth-child(3).active ~ .indicator {
    transform: translateX(calc(calc(100vw / 5.6) * 2 + (6px * 7) + 1px));
  }
  &:nth-child(4).active ~ .indicator {
    transform: translateX(calc(calc(100vw / 5.6) * 3 + (6px * 11) + 2px));
  }

  @media screen and (min-width: 400px) {
    &:nth-child(1).active ~ .indicator {
      transform: translateX(calc(calc(100vw / 5.3) * 0));
    }
    &:nth-child(2).active ~ .indicator {
      transform: translateX(calc(calc(100vw / 5.3) * 1 + (6px * 4)));
    }
    &:nth-child(3).active ~ .indicator {
      transform: translateX(calc(calc(100vw / 5.3) * 2 + (6px * 7) + 1px));
    }
    &:nth-child(4).active ~ .indicator {
      transform: translateX(calc(calc(100vw / 5.3) * 3 + (6px * 11) + 2px));
    }
  }
`;

const Indicator = styled.li`
  position: absolute;
  width: 70px;
  /* width: calc(100vw / 5.5); */
  height: 70px;
  /* height: calc(100vh / 13); */
  top: -55%;
  border-radius: 50%;
  border: 6px solid black;
  background: lightcyan;
  transition: 0.3s;
  z-index: 0;

  @media screen and (min-height: 900px) {
    top: -45%;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: blue;
    background: transparent;
  }
  &:after {
    right: -22px;
    box-shadow: -1px -10px 0 0 black;
    border-top-left-radius: 20px;
  }
  &:before {
    left: -22px;
    box-shadow: 1px -10px 0 0 black;
    border-top-right-radius: 20px;
  }
`;

const IconContainer = styled.div`
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: 500;
  width: 100%;

  &:hover {
    text-decoration: none;
  }

  .icon {
    position: relative;
    display: block;
    line-height: 75px;
    text-align: center;
    transition: 0.5s;
    color: black;
    width: 33px;
    height: 33px;
    margin-top: 16px;
    margin-bottom: 30px;
  }
`;

const Text = styled.span`
  position: absolute;
  color: black;
  font-weight: 400;
  letter-spacing: 0.05em;
  transition: 0.5s;
  transform: translateY(20px);
  opacity: 0;
  z-index: 1;
`;

export { Navigation, ListWrap, List, Indicator, IconContainer, Text };
