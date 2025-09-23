import { useState, useEffect } from 'react';
import { data, useParams } from 'react-router';

import { useGetWeather } from '@/api/quries';
import {
  useCreateWeatherMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
} from '@/api/mutations';

import * as userSlice from '@/features/userSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { UserRole } from '@/types';
import { isValidUserRole } from '@/utils';
import icons from '@/constants/icons';
import { Logo } from '@/components';
import { NotFound } from '@/pages/errors';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const socialProviders = [
  { name: 'Google', icon: icons.googleIcon, key: 'google' },
  { name: 'Facebook', icon: icons.googleIcon, key: 'facebook' },
  { name: 'LinkedIn', icon: icons.googleIcon, key: 'linkedin' },
  { name: 'GitHub', icon: icons.googleIcon, key: 'github' },
  { name: 'Microsoft', icon: icons.googleIcon, key: 'microsoft' },
];

const demoCredentials = {
  user: { email: 'demo@user.com', password: 'user123' },
  admin: { email: 'demo@admin.com', password: 'admin123' },
};

const UserLogin = () => {
  //const weather = useGetWeather();
  //console.log('Weather Data:', weather.data);
  // const createWeatherMutation = useCreateWeatherMutation();

  // useEffect(() => {
  //   createWeatherMutation.mutate({
  //     date: '2025-09-21T08:32:58.0140076+05:00',
  //     temperature: 25,
  //     summary: 'Sunny',
  //   });
  // }, []);

  // if (createWeatherMutation.isError) {
  //   console.log('Error creating weather:', createWeatherMutation.error);
  // }

  // if (createWeatherMutation.isSuccess) {
  //   console.log('Successfully created weather:', createWeatherMutation.data);
  // }

  // if (createWeatherMutation.isPending) {
  //   console.log('Creating weather...');
  // }

  const registerUserMutation = useRegisterUserMutation();
  const loginUserMutation = useLoginUserMutation();

  const dispatch = useAppDispatch();
  const { userType } = useParams();
  const [showAll, setShowAll] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [demoMode, setDemoMode] = useState<'user' | 'admin' | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isInvalidUser = !userType || !isValidUserRole(userType);
  const role = userType as UserRole;

  useEffect(() => {
    if (demoMode === 'user') {
      setEmail(demoCredentials.user.email);
      setPassword(demoCredentials.user.password);
    } else if (demoMode === 'admin') {
      setEmail(demoCredentials.admin.email);
      setPassword(demoCredentials.admin.password);
    }
  }, [demoMode]);

  // useEffect(() => {
  //   if (user && !user.emailAddresses[0].verification?.status === 'verified') {
  //     navigate('/auth/verify-email');
  //   }
  // }, [user, navigate]);

  const handleSubmitClick = () => {
    if (isSignUp) {
      registerUserMutation.mutate({ email, password });
      if (registerUserMutation.isSuccess && registerUserMutation.data) {
        const { token, refreshToken } = registerUserMutation.data.data;
      }
    } else {
      loginUserMutation.mutate({ email, password });
      if (loginUserMutation.isSuccess && loginUserMutation.data) {
        const { token, refreshToken } = loginUserMutation.data.data;
      }
    }
  };

  if (isInvalidUser) return <NotFound />;

  const title = [UserRole.Admin, UserRole.DemoAdmin].includes(role)
    ? 'Admin Dashboard Login'
    : 'Start Your Travel Journey';

  const message = [UserRole.Admin, UserRole.DemoAdmin].includes(role)
    ? 'Sign in with Google to manage destinations, itineraries, and user activity with ease.'
    : 'Sign in with Google to explore AI-generated itineraries, trending destinations, and much more';

  return (
    <main
      className={`relative ${
        showAll ? 'min-h-screen' : 'h-screen'
      } w-full bg-auth bg-no-repeat bg-cover bg-center overflow-y-auto overflow-x-hidden`}
    >
      <div className='absolute inset-0 bg-light-200/60 z-10' />
      <div className='relative z-20 flex items-center justify-center min-h-screen px-4 py-6 sm:py-10'>
        <Card className='w-full max-w-[495px] bg-white shadow-xl/30 border border-light-100 rounded-[20px] px-5 sm:px-6 py-8 sm:py-10 shadow-600 text-center flex flex-col gap-4'>
          <CardHeader>
            <Logo wrapperClasses='flex-center gap-2' />
            <CardTitle className='p-28-semibold text-dark-100 mt-6 mb-2'>
              {title}
            </CardTitle>
            <CardDescription className='p-18-regular text-gray-100 leading-7'>
              {message}
            </CardDescription>
          </CardHeader>

          <CardContent className='flex flex-col gap-4 mt-4 sm:mt-6'>
            {socialProviders
              .filter((_, idx) => showAll || idx === 0)
              .map((provider) => (
                <Button
                  key={provider.key}
                  className='w-full flex-center gap-2 border border-light-100 rounded-[8px] shadow-100 py-4 sm:py-5 px-4 p-18-regular leading-6 cursor-pointer bg-primary-100 text-white'
                >
                  <img src={provider.icon} alt={`${provider.name} icon`} />
                  Continue with {provider.name}
                </Button>
              ))}

            {showAll && (
              <>
                <div className='relative flex items-center justify-center text-xs uppercase text-gray-100 before:absolute before:w-full before:h-px before:bg-border before:top-1/2 before:left-0'>
                  <span className='relative z-10 bg-white px-2'>OR</span>
                </div>

                <div className='grid gap-4 text-left'>
                  <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!!demoMode}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                      id='password'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={!!demoMode}
                    />
                  </div>
                  {!isSignUp && (
                    <div className='text-right'>
                      <Button variant='link' className='text-sm cursor-pointer'>
                        Forgot password?
                      </Button>
                    </div>
                  )}
                  <Button
                    className='w-full border border-light-100 rounded-[8px] shadow-100 py-4 sm:py-5 px-4 p-18-regular leading-6 cursor-pointer bg-primary-100 text-white'
                    onClick={handleSubmitClick}
                  >
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                  </Button>
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                  <Button
                    variant='outline'
                    onClick={() => setDemoMode('user')}
                    className='w-full rounded-[8px] shadow-100 py-4 sm:py-5 px-4 p-18-regular leading-6 cursor-pointer'
                  >
                    Demo User Login
                  </Button>
                  <Button
                    variant='outline'
                    onClick={() => setDemoMode('admin')}
                    className='w-full rounded-[8px] shadow-100 py-4 sm:py-5 px-4 p-18-regular leading-6 cursor-pointer'
                  >
                    Demo Admin Login
                  </Button>
                </div>
              </>
            )}

            <Button
              variant='ghost'
              className='mt-4 text-primary-100 cursor-pointer'
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Less Options' : 'Show More Options'}
            </Button>
          </CardContent>

          <CardFooter className='justify-center mt-2'>
            <span className='text-sm text-gray-100'>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <Button
                onClick={() => setIsSignUp((prev) => !prev)}
                className='text-primary-100 cursor-pointer'
                variant='ghost'
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Button>
            </span>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default UserLogin;
