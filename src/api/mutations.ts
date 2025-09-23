import { useMutation } from '@tanstack/react-query';
import { createWeather, registerUser, loginUser } from './api';
import type {
  CreateWeatherResponse,
  SignUpRequest,
  WeatherResponse,
} from '@/types';

export function useCreateWeatherMutation() {
  return useMutation({
    mutationFn: (data: WeatherResponse) => createWeather(data),
    onMutate: () => {
      console.log('Mutate on creating weather');
    },
    onError: () => {
      console.log('Error occured while creating the weather');
    },
    onSuccess: () => {
      console.log('successfully created weather');
    },
  });
}

export function useRegisterUserMutation() {
  return useMutation({
    mutationFn: (data: SignUpRequest) => registerUser(data),
    onMutate: () => {
      console.log('Mutate on registering user');
    },
    onError: (error) => {
      console.log('Error occured while registering the user:', error);
    },
    onSuccess: () => {
      console.log('successfully registered user');
    },
  });
}

export function useLoginUserMutation() {
  return useMutation({
    mutationFn: (data: SignUpRequest) => loginUser(data),
    onMutate: () => {
      console.log('Mutate on logging in user');
    },
    onError: () => {
      console.log('Error occured while logging in the user');
    },
    onSuccess: () => {
      console.log('successfully logged in user');
    },
  });
}
