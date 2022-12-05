import { apiNeedToken, getConfig } from '../../apis/api';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../recoil/userInfoState';

const useMyPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const getUserInfo = async () => {
    console.log('useMyPage -> token : ', localStorage.getItem('accesstoken'));
    const { data } = await apiNeedToken.get(`/members/find`, getConfig());
    // .then((res) => {
    //   console.log('getUserInfo -> res.data : ', res.data);
    // })
    // .catch((err) => {
    //   console.log('err : ', err);
    // });
    setUserInfo(data);
  };

  return { getUserInfo };
};

export default useMyPage;
