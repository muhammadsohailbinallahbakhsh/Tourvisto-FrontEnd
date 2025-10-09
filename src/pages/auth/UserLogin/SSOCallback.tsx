import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useUser } from '@clerk/clerk-react';
import { useClerkCallbackMutation } from '@/api/mutations';

const SSOCallback = () => {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const clerkCallbackMutation = useClerkCallbackMutation();
  const [hasProcessed, setHasProcessed] = useState(false);

  useEffect(() => {
    const sendToBackend = async () => {
      if (!isLoaded) {
        console.log('Clerk is still loading...');
        return;
      }

      if (!user?.id) {
        console.log('No user found, redirecting to login...');
        navigate('/auth/user');
        return;
      }

      if (hasProcessed) {
        console.log('Already processed, skipping...');
        return;
      }

      setHasProcessed(true);

      try {
        console.log('Sending user ID to backend:', user.id);
        await clerkCallbackMutation.mutateAsync(user.id);
      } catch (error) {
        console.error('Failed to authenticate with backend:', error);
        setHasProcessed(false);
        setTimeout(() => {
          navigate('/auth/user');
        }, 2000);
      }
    };

    sendToBackend();
  }, [isLoaded, user, hasProcessed, clerkCallbackMutation, navigate]);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='text-center bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
          {clerkCallbackMutation.isPending
            ? 'Authenticating...'
            : 'Completing sign in...'}
        </h2>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary-100 mx-auto'></div>
        {clerkCallbackMutation.isError && (
          <p className='mt-4 text-red-500 text-sm'>
            Authentication failed. Redirecting to login...
          </p>
        )}
      </div>
    </div>
  );
};

export default SSOCallback;
