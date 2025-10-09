import { useMutation } from '@tanstack/react-query';
import { createWeather, registerUser, loginUser, clerkCallback } from './api';

export function useCreateWeatherMutation() {
  return useMutation({
    mutationFn: (data: any) => createWeather(data),
    onSuccess: () => {
      console.log('successfully created weather');
    },
  });
}

export function useRegisterUserMutation() {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      registerUser(data),
    onSuccess: (response) => {
      const { token, refreshToken } = response.data;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      window.location.href = '/dashboard';
    },
  });
}

export function useLoginUserMutation() {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => loginUser(data),
    onSuccess: (response) => {
      const { token, refreshToken } = response.data;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      window.location.href = '/dashboard';
    },
  });
}

export function useClerkCallbackMutation() {
  return useMutation({
    mutationFn: (userId: string) => clerkCallback(userId),
    onSuccess: (response) => {
      const { token, refreshToken } = response.data;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', refreshToken);
      window.location.href = '/dashboard';
    },
    onError: (error) => {
      console.error('Clerk callback failed:', error);
    },
  });
}
