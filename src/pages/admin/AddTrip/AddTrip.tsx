import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { CountrySelect } from '@/components';
import { PageHeader } from '../components';
import { Interests, BudgetEstimate, GroupType, TravelStyle } from '@/types';

const CreateTripForm = () => {
  const travelStyleOptions = Object.values(TravelStyle);
  const groupTypeOptions = Object.values(GroupType);
  const interestOptions = Object.values(Interests);
  const budgetEstimateOptions = Object.values(BudgetEstimate);

  const [groupType, setGroupType] = useState('');
  const [travelStyle, setTravelStyle] = useState('');
  const [interests, setInterests] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <main className='w-full flex flex-col  gap-6 items-start justify-start'>
      <PageHeader
        heading='Add new Trips'
        subHeading='View and generate AI travel plans'
        buttonCaption='Create a trip'
      />
      <Card className='w-full max-w-2xl mx-auto bg-white border border-white rounded-xl shadow-100 p-6 sm:p-8'>
        <div className='space-y-6'>
          <CountrySelect />
          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100' htmlFor='duration'>
              Duration
            </Label>
            <Input
              id='duration'
              className='py-5 px-4 border rounded-lg'
              placeholder='Enter number of days (e.g., 5, 12)'
              style={{
                background: 'var(--card)',
                fontSize: '16px',
                fontWeight: 400,
                color: '#7f7e83',
              }}
            />
          </div>
          {/* Group Type */}
          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100' htmlFor='groupType'>
              Group Type
            </Label>
            <Select value={groupType} onValueChange={setGroupType}>
              <SelectTrigger
                id='groupType'
                className='w-full py-5 px-4 rounded-lg bg-white border  cursor-pointer focus:border-ring p-16-regular text-gray-100'
                style={{ background: 'var(--card)' }}
              >
                <SelectValue placeholder='Select a group type' />
              </SelectTrigger>
              <SelectContent className='bg-white border-none'>
                {groupTypeOptions.map((g) => (
                  <SelectItem
                    key={g}
                    value={g}
                    className={`
                    ${
                      String(groupType) === String(g)
                        ? 'bg-primary-100 text-white hover:bg-primary-100 focus:bg-primary-100 hover:text-white focus:text-white'
                        : 'bg-white hover:bg-muted focus:bg-muted text-gray-100'
                    } justify-start cursor-pointer p-16-regular 
                    `}
                  >
                    {g}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Travel Style */}
          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100' htmlFor='groupType'>
              Travel Style
            </Label>
            <Select value={travelStyle} onValueChange={setTravelStyle}>
              <SelectTrigger
                id='groupType'
                className='w-full py-5 px-4 rounded-lg bg-white border  cursor-pointer focus:border-ring p-16-regular text-gray-100'
                style={{ background: 'var(--card)' }}
              >
                <SelectValue placeholder='Select a travel style' />
              </SelectTrigger>
              <SelectContent className='bg-white border-none'>
                {travelStyleOptions.map((t) => (
                  <SelectItem
                    key={t}
                    value={t}
                    className={`
                    ${
                      String(groupType) === String(t)
                        ? 'bg-primary-100 text-white hover:bg-primary-100 focus:bg-primary-100 hover:text-white focus:text-white'
                        : 'bg-white hover:bg-muted focus:bg-muted text-gray-100'
                    } justify-start cursor-pointer p-16-regular 
                    `}
                  >
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Interests */}
          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100' htmlFor='groupType'>
              Interests
            </Label>
            <Select value={interests} onValueChange={setInterests}>
              <SelectTrigger
                id='groupType'
                className='w-full py-5 px-4 rounded-lg bg-white border  cursor-pointer focus:border-ring p-16-regular text-gray-100'
                style={{ background: 'var(--card)' }}
              >
                <SelectValue placeholder='Select a an interest' />
              </SelectTrigger>
              <SelectContent className='bg-white border-none'>
                {interestOptions.map((i) => (
                  <SelectItem
                    key={i}
                    value={i}
                    className={`
                    ${
                      String(groupType) === String(i)
                        ? 'bg-primary-100 text-white hover:bg-primary-100 focus:bg-primary-100 hover:text-white focus:text-white'
                        : 'bg-white hover:bg-muted focus:bg-muted text-gray-100'
                    } justify-start cursor-pointer p-16-regular 
                    `}
                  >
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Budget Estimate */}
          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100' htmlFor='groupType'>
              Budget Estimate
            </Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger
                id='groupType'
                className='w-full py-5 px-4 rounded-lg bg-white border  cursor-pointer focus:border-ring p-16-regular text-gray-100'
                style={{ background: 'var(--card)' }}
              >
                <SelectValue placeholder='Select a budget estimate' />
              </SelectTrigger>
              <SelectContent className='bg-white border-none'>
                {budgetEstimateOptions.map((b) => (
                  <SelectItem
                    key={b}
                    value={b}
                    className={`
                    ${
                      String(groupType) === String(b)
                        ? 'bg-primary-100 text-white hover:bg-primary-100 focus:bg-primary-100 hover:text-white focus:text-white'
                        : 'bg-white hover:bg-muted focus:bg-muted text-gray-100'
                    } justify-start cursor-pointer p-16-regular 
                    `}
                  >
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Map Placeholder */}
          <div className='flex flex-col gap-2'>
            <Label className='p-14-regular text-gray-100'>
              Location on map
            </Label>
            <div className='w-full h-64 rounded-md border border-muted bg-[var(--muted)] flex items-center justify-center'>
              <span className='p-16-regular text-[var(--muted-foreground)]'>
                Map placeholder
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <Button className='w-full h-12 flex items-center justify-center  text-white cursor-pointer'>
            <MapPin className='mr-2 h-4 w-4' />
            <span className='p-16-semibold'>Generate a trip</span>
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default CreateTripForm;
