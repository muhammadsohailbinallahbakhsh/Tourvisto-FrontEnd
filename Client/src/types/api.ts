type WeatherResponse = {
  date: string; // ISO date string from .NET DateTime
  temperature: number;
  summary: string;
};

type CreateWeatherResponse = {
  message: string;
  data: WeatherResponse;
};

type SignUpRequest = {
  email: string;
  password: string;
  userName?: string;
};

type SignUpResponse = {
  token: string;
  refreshToken: string;
  succcess: boolean;
  errors: string[];
};

export type {
  WeatherResponse,
  CreateWeatherResponse,
  SignUpRequest,
  SignUpResponse,
};
