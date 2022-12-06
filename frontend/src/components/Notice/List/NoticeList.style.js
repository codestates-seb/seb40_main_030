import styled from 'styled-components';

/* main-01 : #5584AC
  font-01 : #7b8c9f */
export const NoticeListDiv = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  background-color: white;
  border-radius: 7px;
  border-bottom: 2px solid #d6d9dc;
  margin-bottom: 10px;
  padding: 0 5px 0 5px;
  border: 1px solid black;
`;
export const StatusDiv = styled.div`
  margin-right: 20px;
  padding-top: 25px;
  text-align: center;
  width: 40%;
  height: 100%;
  border-right: 2px dashed #d6d9dc;
`;
export const StatusText = styled.div`
  font-size: 12px;
`;
export const StatusImgDiv = styled.img`
  display: block;
  margin: auto;
  background-color: white;
  width: 60%;
  height: 60%;
  object-fit: contain;
`;

export const ContentDiv = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 5px 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: black;
  margin: 0 0 5px 0;
`;
export const TextDiv = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  color: black;
`;
export const DateDiv = styled.div`
  padding-top: 3px;
  color: #7b8c9f;
  font-size: 12px;
`;
