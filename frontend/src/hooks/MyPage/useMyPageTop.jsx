import { apiNeedToken, getConfig } from '../../apis/api';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../recoil/userInfoState';

const useMyPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const getUserInfo = async () => {
    const { data } = await apiNeedToken.get(`/members/find`, getConfig());
    setUserInfo(data);
  };
  return { getUserInfo };
};

export default useMyPage;
