import { atom } from 'recoil';

// 우선 로그인했을때 오는 유저 정보들 , 유저 고유 id 를 나눠서 저장해봄. 추후 id만 저장해두고
// 회원정보 api에 요청할떄 id만 빼서 api/memberid로 서버로부터 데이터 받아올 예정
const userInfoState = atom({
  key: 'userInfoState',
  default: {
    email: '',
    password: '',
    nickname: '',
    phone: '',
    address: '',
    detailAddress: '',
    photoURL: '',
  },
  dangerouslyAllowMutability: true,
});
const isOverLapEmail = atom({
  key: 'isOverLapEmail',
  default: false,
});
const isOverLapNick = atom({
  key: 'isOverLapNick',
  default: false,
});
const recoilPostAddress = atom({
  key: 'recoilPostAddress',
  default: '',
});
const recoilIsPostCode = atom({
  key: 'recoilIsPostCode',
  default: false,
});
const recoilIsEdit = atom({
  key: 'recoilIsEdit',
  default: false,
});

export {
  userInfoState,
  recoilPostAddress,
  isOverLapEmail,
  isOverLapNick,
  recoilIsEdit,
  recoilIsPostCode,
};
