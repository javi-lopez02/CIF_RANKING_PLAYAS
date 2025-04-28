import axios from './axios'
import {User, UserLogin} from '../types'

export const RegisterRequest = (user: User) => {
  return axios.post(`/auth/register`, user);
};

export const LoginRequest = (user: UserLogin) => {
  return axios.post(`/auth/login`, user);
};

export const LogoutRequest = () => {
  return axios.post(`/auth/logout`)
}

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);