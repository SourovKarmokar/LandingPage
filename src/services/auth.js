import axios from "axios";

const API = axios.create({
  baseURL: "https://apitest.thewarriors.team/api",
});

// Token auto-attach
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// formdata helper
const toForm = (obj) => {
  const fd = new FormData();
  Object.entries(obj).forEach(([k, v]) => fd.append(k, v));
  return fd;
};

export const registerAPI    = (data) => API.post("/register",          toForm(data));
export const verifyOtpAPI   = (data) => API.post("/verify_otp",        toForm(data));
export const resendOtpAPI   = (data) => API.post("/resend_otp",        toForm(data));
export const loginAPI       = (data) => API.post("/login",             toForm(data));
export const logoutAPI      = ()     => API.post("/logout");
export const userDetailAPI  = ()     => API.get("/user-detail");