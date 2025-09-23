// hooks/useAuth.js
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleAuthSuccess = (response) => {
    const { token, refreshToken } = response.data;

    // Store tokens
    localStorage.setItem('accessToken', token);
    localStorage.setItem('refreshToken', refreshToken);

    // Set default Authorization header for future requests
    // (if you're using axios)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Redirect to dashboard
    navigate('/dashboard');

    // Invalidate and refetch user data
    queryClient.invalidateQueries(['user']);
  };

  const handleAuthError = (error) => {
    console.error('Authentication failed:', error);
    // Show error message to user
  };

  const registerMutation = useMutation({
    mutationFn: (userData) => registerUser(userData),
    onSuccess: handleAuthSuccess,
    onError: handleAuthError,
  });

  const loginMutation = useMutation({
    mutationFn: (userData) => loginUser(userData),
    onSuccess: handleAuthSuccess,
    onError: handleAuthError,
  });

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    delete axios.defaults.headers.common['Authorization'];
    navigate('/login');
    queryClient.clear();
  };

  return {
    register: registerMutation.mutate,
    login: loginMutation.mutate,
    logout,
    isLoading: registerMutation.isPending || loginMutation.isPending,
  };
};
