import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';

import { tripTrendsChartData } from '@/mockData';

const chartConfig = {
  value: { label: 'Trip %', color: 'var(--primary)' },
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    return (
      <div
        style={{
          background: 'var(--foreground)', // dark background
          color: 'white',
          padding: '4px 10px',
          fontSize: '0.875rem',
          borderRadius: '6px',
          position: 'relative',
          transform: 'translate(-50%, -120%)',
          whiteSpace: 'nowrap',
        }}
      >
        {val}%
        <div
          style={{
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid var(--foreground)',
          }}
        />
      </div>
    );
  }
  return null;
};

export function TripTrendsChart() {
  return (
    <Card className='w-full lg:w-[500px]  p-6 rounded-2xl shadow-400 bg-white border-0'>
      <div className='mb-4'>
        <h2 className='p-18-semibold text-dark-100'>Trip Trends</h2>
        <div className='border-b border-gray-200 mt-2' />
      </div>

      <ChartContainer config={chartConfig} className='min-h-[300px] w-full'>
        <ResponsiveContainer width='100%' height={300}>
          <ComposedChart data={tripTrendsChartData}>
            <CartesianGrid
              strokeDasharray='4 4'
              horizontal
              vertical={false}
              stroke='#e5e7eb'
            />
            <XAxis
              dataKey='category'
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(val) => `${val}%`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Bar dataKey='value' radius={[6, 6, 0, 0]} barSize={36}>
              {tripTrendsChartData.map((entry, index) => {
                const isCulinary = entry.category === 'Culinary';
                return (
                  <Cell
                    key={`bar-${index}`}
                    fill={isCulinary ? 'var(--primary)' : 'var(--muted)'}
                  />
                );
              })}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
}

export default TripTrendsChart;
