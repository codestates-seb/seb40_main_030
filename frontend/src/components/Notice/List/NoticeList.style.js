import styled from 'styled-components';

/* main-01 : #5584AC
  font-01 : #7b8c9f */
export const NoticeListDiv = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  background-color: white;
  border-radius: 5px;
  border-bottom: 2px solid #d6d9dc;
  margin-bottom: 10px;
  padding: 10px 5px 5px 5px;
`;
export const StatusDiv = styled.div`
  margin-right: 20px;
  padding-top: 10px;
  text-align: center;
  width: 40%;
  border-right: 1px dashed #d6d9dc;
`;
export const StatusText = styled.div`
  font-size: 14px;
`;
export const StatusImgDiv = styled.img`
  display: block;
  margin: auto;
  background-color: white;
  width: 70%;
  height: 70%;
  object-fit: contain;
`;

export const ContentDiv = styled.div`
  width: 100%;
  text-align: center;
`;

export const TitleDiv = styled.div`
  height: 30%;
  text-align: center;
  font-size: 16px;
  color: black;
  margin: 0 0 5px 0;
`;
export const TextDiv = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  height: 40%;
  color: black;
`;
export const DateDiv = styled.div`
  padding-top: 3px;
  color: #7b8c9f;
  font-size: 12px;
`;
