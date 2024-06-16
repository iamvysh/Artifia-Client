import axiosInstance from "./axiosConfig";

export const login = (loginData) => {
  return axiosInstance().post("/user/login", { ...loginData });
};
export const register = (userCredentials) => {
  return axiosInstance().post("/user/register", { ...userCredentials });
};