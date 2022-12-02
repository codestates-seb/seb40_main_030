import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import {
  recoilPostAddress,
  recoilIsPostCode,
} from '../../../recoil/userInfoState';
import { useRecoilState } from 'recoil';

const PostCode = (data) => {
  const navigate = useNavigate();
  const [inPostAddress, setInPostAddress] = useRecoilState(recoilPostAddress);
  const [isPostCode, setIsPostCode] = useRecoilState(recoilIsPostCode);

  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    // 도로명 눌렀을때
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
    // 지번 눌렀을때
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

    console.log('data :', data);
    console.log('fullAddress : ', fullAddress);

    setInPostAddress(fullAddress);
    if (
      localStorage.getItem('accesstoken') ||
      sessionStorage.getItem('accesstoken')
    ) {
      setIsPostCode(true);
      navigate('/myprofile');
    } else {
      navigate('/signup');
    }
  };
  return <DaumPostcode onComplete={complete} />;
};

export default PostCode;
