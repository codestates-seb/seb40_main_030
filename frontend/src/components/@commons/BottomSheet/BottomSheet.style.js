import styled from 'styled-components';
import { BOTTOM_SHEET_HEIGHT } from '../../../constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  // 추후 삭제 예정
  border: 1px solid red;
`;

const HeaderContainer = styled.div`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

const HandleBar = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;

export { Wrapper, HeaderContainer, HandleBar };
