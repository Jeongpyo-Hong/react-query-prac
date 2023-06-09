// axios 요청 들어가는 모든 모듈

import axios from "axios";

// 조회
export const getTodo = async () => {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return res.data;
};

// 추가
export const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};
