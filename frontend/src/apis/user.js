import { apiClient } from './order';

//  모든 유저 정보
const getAllUsers = async () => {
  const response = await apiClient.get('/api/members');
  return response;
};

// 단일 유저 정보
const getUserById = async (memberId) => {
  const response = await apiClient.get(`/api/members/${memberId}`);

  return response;
};

// 유저 정보 등록
const createUser = async (userInfo) => {
  const response = await apiClient.post(`/api/members/`, userInfo);

  return response;
};

// 유저 정보 수정
const modifyUser = async (memberId, newInfo) => {
  const response = await apiClient.patch(`/api/members/${memberId}`, {
    newInfo,
  });

  return response;
};

const deleteUser = async (memberId) => {
  const response = await apiClient.delete(`/api/members/${memberId}`);

  return response;
};

export { getAllUsers, getUserById, createUser, modifyUser, deleteUser };
