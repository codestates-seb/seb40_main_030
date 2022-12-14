import styled from 'styled-components';

export const MyProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const SignUpMidContainer = styled.div`
  padding: 40px 10px 0 10px;
  width: 100%;
  height: 100%;
`;
export const SignUpPhotoDiv = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  input {
    width: 24%;
  }
`;
export const SignUpPhotoDivInDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 100px;
`;

export const SignUpPhoto = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  font-size: 14px;
`;
export const FileLabel = styled.label`
  display: inline-block;
  padding: 2px 9px;
  color: white;
  font-size: 14px;
  line-height: normal;
  vertical-align: middle;
  background-color: #c8c8c8;
  cursor: pointer;
  border: 1px solid #d6d9dc;
  border-bottom-color: #e2e2e2;
  border-radius: 5px;
  margin-left: 111px;
  margin-bottom: 2px;
`;
export const PreviewImg = styled.img`
  margin: 0 0 0 110px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
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
`;
export const SignUpNickInputDiv = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 5px 5px 5px 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin: 10px 0 5px 0;
  justify-content: space-between;
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
  margin: 10px 0 5px 0;
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
  display: flex;
  width: 100%;
  height: 40px;
  padding: 5px 5px 5px 5px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  margin-bottom: 7px;
  justify-content: space-between;
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

export const MyProfileEditBtn = styled.div`
  text-align: center;
  padding: 15px 0 10px 0;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  background-color: #7b8c9f;
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

export const MyProfileRemoveBtn = styled.div`
  text-align: center;
  padding: 15px 0 10px 0;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: bold;
  color: white;
  background-color: #5584ac;
`;
