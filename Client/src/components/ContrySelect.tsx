import { useMemo, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { countries } from 'countries-list';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

const CountrySelect = ({ isPaymentPage }: { isPaymentPage?: boolean }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('HR');
  const [isOpen, setIsOpen] = useState(false);

  const countryList = useMemo(() => {
    return Object.keys(countries)
      .map((code) => ({
        code: code,
        name: countries[code as keyof typeof countries].name,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const getCountryDisplay = useMemo(
    () => (countryCode: string) => {
      const country = countryList.find((c) => c.code === countryCode);
      if (!country) return null;

      return (
        <div className='flex items-center gap-2'>
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{
              width: '24px',
              height: '18px',
            }}
          />
          <span>{country.name}</span>
        </div>
      );
    },
    [countryList]
  );

  return (
    <div className='flex flex-col gap-2'>
      <Label className='p-14-regular text-gray-100' htmlFor='country'>
        Country
      </Label>
      <Select
        value={selectedCountry}
        onValueChange={setSelectedCountry}
        onOpenChange={setIsOpen}
      >
        <SelectTrigger
          id='country'
          className={`w-full  ${
            isPaymentPage ? 'py-6' : 'py-5'
          } px-4 rounded-lg bg-white border  cursor-pointer focus:border-ring p-16-regular text-gray-100`}
          style={{ background: 'var(--card)' }}
        >
          <SelectValue placeholder='Select a country'>
            {selectedCountry && getCountryDisplay(selectedCountry)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className='bg-white border-none'>
          {isOpen && countryList.length === 0 ? (
            <div className='flex items-center justify-center p-4'>
              <Loader2 className='h-4 w-4 animate-spin mr-2' />
              <span>Loading countries...</span>
            </div>
          ) : (
            countryList.map((country) => (
              <SelectItem
                key={country.code}
                value={country.code}
                className={`
                ${
                  String(selectedCountry) === String(country.code)
                    ? 'bg-primary-100 text-white hover:bg-primary-100 focus:bg-primary-100 hover:text-white focus:text-white'
                    : 'bg-white hover:bg-muted focus:bg-muted text-gray-100'
                } justify-start cursor-pointer p-16-regular 
                `}
              >
                <div className='flex items-center gap-2'>
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: '24px',
                      height: '18px',
                    }}
                  />
                  <span>{country.name}</span>
                </div>
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountrySelect;
