import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const data = searchParams.get('data');
    const error = searchParams.get('error');

    if (error) {
      console.error('Authentication error:', error);
      navigate('/auth/user?error=' + error);
      return;
    }

    if (data) {
      try {
        const authResponse = JSON.parse(decodeURIComponent(data));

        if (authResponse.success) {
          localStorage.setItem('accessToken', authResponse.token);
          localStorage.setItem('refreshToken', authResponse.refreshToken);
          localStorage.setItem('userEmail', authResponse.email);
          localStorage.setItem('userRole', authResponse.role);

          console.log('Authentication successful');
          navigate('/dashboard');
        } else {
          console.error('Authentication failed:', authResponse.errors);
          navigate('/auth/user?error=authentication_failed');
        }
      } catch (error) {
        console.error('Error parsing auth response:', error);
        navigate('/auth/user?error=invalid_response');
      }
    } else {
      navigate('/auth/user?error=no_data');
    }
  }, [searchParams, navigate]);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='text-center bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
          Completing sign in...
        </h2>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary-100 mx-auto'></div>
      </div>
    </div>
  );
};

export default AuthCallback;
