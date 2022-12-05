import { useEffect } from 'react';
import GenLogout from '../Login/GenLogout/GenLogout';
import styled from 'styled-components';
import * as S from './ShortInfo.style';
import { MyPageIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';
import useMyPage from '../../hooks/MyPage/useMyPageTop';
import { useRecoilState } from 'recoil';
import { userInfoState, recoilIsEdit } from '../../recoil/userInfoState';
import { ProfileImg } from '../../assets';

const Top = () => {
  const navigate = useNavigate();
  const { getUserInfo } = useMyPage();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isEdit, setIsEdit] = useRecoilState(recoilIsEdit);

  const handleErrorImg = (e) => {
    e.target.src = ProfileImg;
  };

  useEffect(() => {
    console.log(
      'Mypage/shortInfo -> token : ',
      localStorage.getItem('accesstoken'),
    );
    console.log('mypage/shortInfo -> recoil userInfoState : ', userInfo);
    getUserInfo();
    setIsEdit(false);
  }, []);
  const PhotoImgDiv = styled.img`
    display: block;
    margin: auto;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  `;
  return (
    <S.MyPageTopContainer>
      <S.ImgNickEmailDiv>
        <PhotoImgDiv
          src={`blob:${userInfo.photoURL}`}
          onError={handleErrorImg}
        />
        <S.NickNameDiv>{userInfo.nickname} 님</S.NickNameDiv>
        <S.EmailDiv>{userInfo.email}</S.EmailDiv>
      </S.ImgNickEmailDiv>

      <S.MyInfoAndLogoutContainer>
        <S.MyInfoAndLogoutDiv>
          <S.MyInfoDiv
            onClick={() => {
              navigate('/myprofile');
            }}
          >
            <MyPageIcon style={{ height: '11px' }} /> 내 정보
          </S.MyInfoDiv>
          <GenLogout />
        </S.MyInfoAndLogoutDiv>
      </S.MyInfoAndLogoutContainer>
    </S.MyPageTopContainer>
  );
};

export default Top;
