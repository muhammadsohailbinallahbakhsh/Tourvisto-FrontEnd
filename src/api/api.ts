import axios from 'axios';
import type {
  WeatherResponse,
  CreateWeatherResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/types';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TurVistoAPI_BASE,
});

export const getWeather = async () => {
  let url = '/Weather';
  return (await axiosInstance.get<WeatherResponse>(url)).data;
};

export const createWeather = async (weather: WeatherResponse) => {
  let url = '/Weather';
  return await axiosInstance.post<CreateWeatherResponse>(url, weather);
};

export const registerUser = async (user: SignUpRequest) => {
  try {
    let url = '/authmanagement/Register';
    return await axiosInstance.post<SignUpResponse>(url, user);
  } catch (error) {
    console.error('Error occurred while registering the user:', error);
    throw error;
  }
};

export const loginUser = async (user: SignUpRequest) => {
  try {
    let url = '/authmanagement/Register';
    return await axiosInstance.post<SignUpResponse>(url, user);
  } catch (error) {
    console.error('Error occurred while logging in the user:', error);
    throw error;
  }
};
