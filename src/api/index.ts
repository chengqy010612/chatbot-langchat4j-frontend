import axios from "axios";

export const chatListService = async () => {
  return await axios.get("/api/xiaozhi/chatList");
};

// 获取用户信息方法 

