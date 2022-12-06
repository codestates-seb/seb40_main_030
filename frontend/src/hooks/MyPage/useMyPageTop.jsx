import { apiNeedToken, getConfig } from '../../apis/api';
import { useSetRecoilState } from 'recoil';
import { userInfoState } from '../../recoil/userInfoState';

const useMyPage = () => {
  const setUserInfo = useSetRecoilState(userInfoState);

  const getUserInfo = async () => {
    const { data } = await apiNeedToken.get(`/members/find`, getConfig());
    setUserInfo(data);
  };
  return { getUserInfo };
};

export default useMyPage;
