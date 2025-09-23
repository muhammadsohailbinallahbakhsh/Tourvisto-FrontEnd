import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';

import { userGrowthChartData } from '@/mockData';

const chartConfig = {
  users: { label: 'Users', color: '#3b82f6' },
  growth: { label: 'Growth', color: '#2563eb' },
};

export function UserGrowthChart() {
  return (
    <Card className='min-w-0 w-full lg:w-[500px]  p-6 rounded-2xl shadow-400 bg-white border-0'>
      <div className='mb-4'>
        <h2 className='p-18-semibold text-dark-100'>User Growth</h2>
        <div className='border-b border-gray-200 mt-2'></div>
      </div>

      <ChartContainer config={chartConfig} className='min-h-[300px] w-full'>
        <ResponsiveContainer width='100%' height={300}>
          <ComposedChart data={userGrowthChartData}>
            <CartesianGrid
              strokeDasharray='4 4'
              horizontal
              vertical={false}
              stroke='#e5e7eb'
            />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
            />
            <YAxis
              tickFormatter={(val) => `${val / 1000}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              domain={[0, 3200]}
            />
            <Tooltip cursor={false} />

            {/* Bars divided into shaded color bands with raised dividers */}
            <Bar
              dataKey='users'
              fill='url(#barGradientWithDividers)'
              radius={[6, 6, 0, 0]}
              barSize={36}
            />

            {/* Transparent wave below line */}
            <Area
              dataKey='growth'
              type='monotone'
              stroke='#2563eb'
              fill='url(#waveGradient)'
              strokeWidth={0}
              dot={false}
            />

            {/* Line chart on top */}
            <Line
              dataKey='growth'
              type='monotone'
              stroke='#2563eb'
              strokeWidth={3}
              dot={{
                stroke: 'white',
                strokeWidth: 3,
                fill: '#2563eb',
                r: 6,
              }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id='waveGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#2563eb' stopOpacity={0.3} />
                <stop offset='95%' stopColor='#2563eb' stopOpacity={0.05} />
              </linearGradient>

              {/* Gradient with vivid horizontal dividers inside the bars */}
              <linearGradient
                id='barGradientWithDividers'
                x1='0'
                y1='1'
                x2='0'
                y2='0'
              >
                <stop offset='0%' stopColor='#e3f1ff' />
                <stop offset='19%' stopColor='#cde9ff' />
                <stop offset='20%' stopColor='#3b82f6' />
                <stop offset='39%' stopColor='#aacfff' />
                <stop offset='40%' stopColor='#3b82f6' />
                <stop offset='59%' stopColor='#7fb6ff' />
                <stop offset='60%' stopColor='#3b82f6' />
                <stop offset='79%' stopColor='#5ba6ff' />
                <stop offset='80%' stopColor='#3b82f6' />
                <stop offset='100%' stopColor='#256ff1' />
              </linearGradient>
            </defs>
          </ComposedChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
}

export default UserGrowthChart;
