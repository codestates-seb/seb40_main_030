import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '@kfonts/bm-dohyeon'; // 배민 도현체 설치후 import
// ⚠

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
`;
// export const SignUpTopContainer = styled.div`
//   display: flex;
//   background-color: #7b8c9f;
// `;
// export const HomeIcon = styled.div`
//   padding: 5px 0 5px 10px;
//   font-size: 30px;
// `;
// export const SignUpText = styled.div`
//   width: 100%;
//   padding: 13px 20px 0 0;
//   text-align: center;
//   font-family: 'bm-dohyeon';
// `;
export const SignUpMidContainer = styled.div`
  padding: 50px 10px 0 10px;
`;

export const SignUpPhotoDiv = styled.div`
  margin-bottom: 10px;
`;

export const SignUpPhoto = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;

  /* border: 1px solid black; */
`;
export const PreviewImg = styled.img`
  border: 1px solid black;
  /* display: inline-block; */
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SignUpEmailInputDiv = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 78%;
    height: 30px;
    border: 0 solid white;
  }
  button {
    height: 100%;
    color: white;
    background-color: #7b8c9f;
    border-radius: 3px;
  }
`;
export const SignUpEmailSuccessMsgDiv = styled.div`
  color: green;
  font-size: 12px;
`;
export const SignUpEmailFailMsgDiv = styled.div`
  color: red;
  font-size: 12px;
`;

export const SignUpPasswordInputDiv = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 78%;
    height: 30px;
    border: 0 solid white;
  }
`;
export const SignUpPasswordSuccessMsgDiv = styled.div`
  color: green;
  font-size: 12px;
`;
export const SignUpPasswordFailMsgDiv = styled.div`
  color: red;
  font-size: 12px;
`;
export const SignUpCheckPasswordInputDiv = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 78%;
    height: 30px;
    border: 0 solid white;
  }
`;
export const SignUpCheckPasswordSuccessMsgDiv = styled.div`
  color: green;
  font-size: 12px;
`;
export const SignUpCheckPasswordFailMsgDiv = styled.div`
  color: red;
  font-size: 12px;
`;
export const SignUpNickInputDiv = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin: 15px 0 7px 0;
  input {
    width: 78%;
    height: 30px;
    border: 0 solid white;
  }
  button {
    height: 100%;
    color: white;
    background-color: #7b8c9f;
    border-radius: 3px;
  }
`;
export const SignUpNickSuccessMsgDiv = styled.div`
  color: green;
  font-size: 12px;
`;
export const SignUpNickFailMsgDiv = styled.div`
  color: red;
  font-size: 12px;
`;
export const SignUpPhoneInputDiv = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin: 15px 0 7px 0;
  input {
    width: 78%;
    height: 30px;
    border: 0 solid white;
  }
`;
export const SignUpPhoneSuccessMsgDiv = styled.div`
  color: green;
  font-size: 12px;
`;
export const SignUpPhoneFailMsgDiv = styled.div`
  color: red;
  font-size: 12px;
`;

export const SignUpAddressContainer = styled.div`
  margin-top: 15px;
`;
export const SignUpAddressInputDiv = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 78%;
    height: 30px;
    border: 0 solid white;
  }
  button {
    height: 100%;
    color: white;
    background-color: #7b8c9f;
    border-radius: 3px;
  }
`;

export const SearchAddressBtn = styled.button`
  height: 100%;
  color: white;
  background-color: #7b8c9f;
  border-radius: 3px;
`;

export const SignUpAddressInputAddDiv = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  input {
    width: 78%;
    height: 30px;
    border: 0 solid white;
  }
`;

export const SignUpBottomContainer = styled.div`
  padding: 50px 10px 0 10px;
`;

export const SignUpSubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  margin-bottom: 35px;
  background-color: #5584ac;
`;
