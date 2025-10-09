import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TurVistoAPI_BASE_URL,
});

export const setupAxiosInterceptors = (
  getToken: () => Promise<string | null>
) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      // Try to get token from localStorage (your JWT)
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = localStorage.getItem('refreshToken');
          const response = await axiosInstance.post(
            '/authmanagement/RefreshToken',
            {
              token: localStorage.getItem('accessToken'),
              refreshToken: refreshToken,
            }
          );

          const { token: newAccessToken, refreshToken: newRefreshToken } =
            response.data;

          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/auth/user';
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};

// Existing functions...
export const getWeather = async () => {
  let url = '/Weather';
  return (await axiosInstance.get(url)).data;
};

export const createWeather = async (weather: any) => {
  let url = '/Weather';
  return await axiosInstance.post(url, weather);
};

export const registerUser = async (user: {
  email: string;
  password: string;
}) => {
  try {
    let url = '/authmanagement/Register';
    return await axiosInstance.post(url, user);
  } catch (error: any) {
    console.error(
      'Error occurred while registering the user:',
      error?.response?.data?.errors
    );
    throw error;
  }
};

export const loginUser = async (user: { email: string; password: string }) => {
  try {
    let url = '/authmanagement/Login';
    return await axiosInstance.post(url, user);
  } catch (error: any) {
    console.error(
      'Error occurred while logging in the user:',
      error?.response?.data?.errors
    );
    throw error;
  }
};

export const clerkCallback = async (userId: string) => {
  try {
    let url = '/clerkauth/Callback';
    return await axiosInstance.post(url, { userId });
  } catch (error: any) {
    console.error('Error in Clerk callback:', error);
    throw error;
  }
};

export default axiosInstance;
