import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import {
  recoilPostAddress,
  recoilIsPostCode,
} from '../../../recoil/userInfoState';
import { nowState } from '../../../recoil/nowState';
import { useRecoilState } from 'recoil';

const PostCode = (data) => {
  const navigate = useNavigate();
  const [inPostAddress, setInPostAddress] = useRecoilState(recoilPostAddress);
  const [isPostCode, setIsPostCode] = useRecoilState(recoilIsPostCode);
  const [now, setNow] = useRecoilState(nowState);

  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.userSelectedType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
    }
    if (data.userSelectedType === 'J') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
    }

    setInPostAddress(fullAddress);
    if (now === 'MyProfile') {
      if (
        localStorage.getItem('accesstoken') ||
        sessionStorage.getItem('accesstoken')
      ) {
        setIsPostCode(true);
        navigate('/myprofile');
      }
    } else if (
      now === 'SignUp' &&
      !localStorage.getItem('accesstoken') &&
      !sessionStorage.getItem('accesstoken')
    ) {
      navigate('/signup');
    } else if (now !== 'MyProfile' && now !== 'SignUp') {
      navigate('*');
    }
  };
  return <DaumPostcode onComplete={complete} />;
};

export default PostCode;
