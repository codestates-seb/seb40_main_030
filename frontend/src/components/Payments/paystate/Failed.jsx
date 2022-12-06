import { Kakao_fail_Icon } from '@/assets';
import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import * as S from './Paystate.styled'

const PayStateFailed = () => {
    const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

    return <S.StateLayout matches={matches} >
        <S.StateTitle>보배 빌림</S.StateTitle>
        <S.StateDetail>결제가 취소되었습니다</S.StateDetail>
        <S.StateIcon src={Kakao_fail_Icon} />
    </S.StateLayout>
}

export default PayStateFailed