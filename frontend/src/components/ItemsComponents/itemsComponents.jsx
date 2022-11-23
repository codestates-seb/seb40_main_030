import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import * as S from './ItemList';

const ItemCompo = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState([]);
    const { paymentId } = useParams();
    // 목데이터 를 가져옴 추후에 삭제
    useEffect(() => {
        axios.get('/api/itemlist')
        .then((data) => setData(data.data))
    }, [])

    //pay 페이지로 데이터 전달
    const navigate = useNavigate();
    const handleClick = (createdAt, modifiedAt, paymentId, battery, station ) => {
        navigate(`/pay/:${paymentId}`, { 
            state: {
                data : {
                    createdAt, modifiedAt, paymentId, battery, station
                }
            }
        });
    }

    return (
        <div>
            {data.map(({ paymentId, createdAt, modifiedAt, battery, station }) => {
                return (
                    <S.ItemLayout key={paymentId}>
                        <div>
                            <div>{paymentId}</div>
                            <div>{createdAt}</div>
                            <div>{modifiedAt}</div>
                            <div><S.ItemButton onClick={() => handleClick(createdAt, modifiedAt, paymentId, battery, station)}>예약하기</S.ItemButton></div>
                        </div>
                    </S.ItemLayout>
                )
            })}
        </div>
    );
};

export default ItemCompo
