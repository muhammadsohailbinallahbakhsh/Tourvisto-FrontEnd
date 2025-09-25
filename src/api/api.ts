import axios from 'axios';
import { useNavigate } from 'react-router';
import type {
  WeatherResponse,
  CreateWeatherResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/types';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TurVistoAPI_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/authmanagement/RefreshToken', {
          refreshToken: refreshToken,
        });

        const { token: newAccessToken, refreshToken: newRefreshToken } =
          response.data;

        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Refresh failed - redirect to login
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

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
  } catch (error: any) {
    console.error(
      'Error occurred while registering the user:',
      error?.response?.data?.errors
    );
    throw error;
  }
};

export const loginUser = async (user: SignUpRequest) => {
  try {
    let url = '/authmanagement/Login';
    return await axiosInstance.post<SignUpResponse>(url, user);
  } catch (error: any) {
    console.error(
      'Error occurred while logging in the user:',
      error?.response?.data?.errros
    );
    throw error;
  }
};
