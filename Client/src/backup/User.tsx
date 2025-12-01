import React, { useState, type ChangeEvent } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trash2, Key } from 'lucide-react';

const roles = ['Admin', 'Editor', 'Viewer'];

type EmailStatus = 'Verified' | 'Pending' | 'Rejected';

const UserProfilePage = () => {
  // Profile image upload
  const [avatarUrl, setAvatarUrl] = useState<string>(
    'https://via.placeholder.com/150'
  );
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  // Editable states
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingMetrics, setIsEditingMetrics] = useState(false);

  // Form values
  const [firstName, setFirstName] = useState('Cameron');
  const [lastName, setLastName] = useState('Williamson');
  const [email, setEmail] = useState('cameronwilliamson@hotmail.com');
  const [emailStatus, setEmailStatus] = useState<EmailStatus>('Verified');

  const [country, setCountry] = useState('United States');
  const [city, setCity] = useState('San Francisco');
  const [line1, setLine1] = useState('123 Market St');
  const [line2, setLine2] = useState('Suite 500');

  const [metrics, setMetrics] = useState({
    joined: 'Jan 1, 2023',
    itineraries: 12,
    destinations: 34,
    plans: 5,
    revenue: '$2,450',
  });

  return (
    <div className='flex w-full h-full'>
      {/* Sidebar */}
      <aside className='w-64 bg-white border-r border-[var(--border)] p-6 space-y-6'>
        <div className='flex flex-col items-center gap-4'>
          <Avatar className='w-24 h-24'>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
          <input
            type='file'
            id='avatar-upload'
            className='hidden'
            onChange={handleAvatarChange}
          />
          <label htmlFor='avatar-upload'>
            <Button variant='outline' size='sm'>
              Change Photo
            </Button>
          </label>
        </div>
        <div className='space-y-2'>
          <Button
            variant='ghost'
            className='w-full justify-start'
            onClick={() => {
              /* change pwd */
            }}
          >
            <Key className='mr-2 w-4 h-4' /> Change Password
          </Button>
          <Button variant='destructive' className='w-full justify-start'>
            <Trash2 className='mr-2 w-4 h-4' /> Delete User
          </Button>
        </div>
        <div>
          <h4 className='p-16-semibold'>Roles</h4>
          <div className='flex flex-wrap gap-2 mt-2'>
            {roles.map((role) => (
              <Badge key={role}>{role}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className='p-16-semibold'>Last Login</h4>
          <p className='p-14-regular text-gray-700'>4 minutes ago</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-8 space-y-8 bg-[var(--background)]'>
        {/* Personal Information */}
        <Card>
          <CardHeader className='flex justify-between items-center'>
            <h3 className='p-20-semibold'>Personal Information</h3>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setIsEditingPersonal(!isEditingPersonal)}
            >
              {isEditingPersonal ? 'Save' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-1'>
              <Label>First Name</Label>
              <Input
                value={firstName}
                readOnly={!isEditingPersonal}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <Label>Last Name</Label>
              <Input
                value={lastName}
                readOnly={!isEditingPersonal}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='col-span-full flex flex-col gap-1'>
              <Label>Email Address</Label>
              <div className='flex items-center gap-2'>
                <Input
                  value={email}
                  readOnly={!isEditingPersonal}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Badge
                  variant={
                    emailStatus === 'Verified'
                      ? 'secondary'
                      : emailStatus === 'Pending'
                      ? 'outline'
                      : 'destructive'
                  }
                >
                  {emailStatus}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address Information */}
        <Card>
          <CardHeader className='flex justify-between items-center'>
            <h3 className='p-20-semibold'>Address Information</h3>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setIsEditingAddress(!isEditingAddress)}
            >
              {isEditingAddress ? 'Save' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-1'>
              <Label>Country</Label>
              <Input
                value={country}
                readOnly={!isEditingAddress}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <Label>City</Label>
              <Input
                value={city}
                readOnly={!isEditingAddress}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className='col-span-full flex flex-col gap-1'>
              <Label>Address Line 1</Label>
              <Input
                value={line1}
                readOnly={!isEditingAddress}
                onChange={(e) => setLine1(e.target.value)}
              />
            </div>
            <div className='col-span-full flex flex-col gap-1'>
              <Label>Address Line 2</Label>
              <Input
                value={line2}
                readOnly={!isEditingAddress}
                onChange={(e) => setLine2(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Metrics Section */}
        <Card>
          <CardHeader className='flex justify-between items-center'>
            <h3 className='p-20-semibold'>Usage & Metrics</h3>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setIsEditingMetrics(!isEditingMetrics)}
            >
              {isEditingMetrics ? 'Save' : 'Edit'}
            </Button>
          </CardHeader>
          <CardContent className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className='flex flex-col'>
                <span className='p-14-medium uppercase text-gray-500'>
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                {isEditingMetrics ? (
                  <Input
                    value={String(value)}
                    onChange={(e) =>
                      setMetrics((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                  />
                ) : (
                  <span className='p-18-semibold text-dark-100'>{value}</span>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserProfilePage;
