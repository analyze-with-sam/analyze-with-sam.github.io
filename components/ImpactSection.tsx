
import React, { useContext, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import Section from './Section';
import { IMPACT_DATA, SKILL_CATEGORY_ICONS } from '../constants';
import { ThemeContext } from '../App';
import { ThemeContextType, ImpactDataItem } from '../types';
import Card from './Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ImpactSectionProps {
  id: string;
  title: string;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({ id, title }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeContext not found');
  const { currentPalette, themeMode } = context;

  const ImpactIcon = SKILL_CATEGORY_ICONS["Quantified Impact"];

  const tailwindColors: Record<string, Record<number, string>> = {
    indigo: { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81' },
    pink: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843' },
    sky: { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e' },
    green: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d' },
    teal: { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a' },
    lime: { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314' },
    orange: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12' },
    red: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d' },
    amber: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f' },
    blue: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
    cyan: { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63' },
    purple: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87' },
    yellow: { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12' },
    fuchsia: { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75' },
    gray: { 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#11182c'}
  };
  
  const primaryColorValue = tailwindColors[currentPalette.primary]?.[themeMode === 'dark' ? 400 : 600] || tailwindColors.indigo[600];
  const secondaryColorValue = tailwindColors[currentPalette.secondary]?.[themeMode === 'dark' ? 500 : 500] || tailwindColors.pink[500];
  const gridColor = themeMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const labelColor = themeMode === 'dark' ? tailwindColors.gray[300] : tailwindColors.gray[700];

  const chartData = useMemo<ChartData<'bar', number[], string>>(() => ({
    labels: IMPACT_DATA.map(item => item.label),
    datasets: [
      {
        label: 'Impact Value',
        data: IMPACT_DATA.map(item => item.value),
        backgroundColor: IMPACT_DATA.map((_, index) => index % 2 === 0 ? primaryColorValue : secondaryColorValue),
        borderColor: IMPACT_DATA.map((_, index) => index % 2 === 0 ? primaryColorValue : secondaryColorValue),
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 30,
      },
    ],
  }), [IMPACT_DATA, primaryColorValue, secondaryColorValue]);

  const options = useMemo<ChartOptions<'bar'>>(() => ({
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const, // Horizontal bar chart
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: gridColor,
          borderColor: gridColor,
        },
        ticks: {
          color: labelColor,
          font: { size: 12, family: 'Nunito Sans' },
          callback: function(value, index, values) {
            // Find the corresponding data item to get the unit
            const dataItem = IMPACT_DATA[index];
             // Check if IMPACT_DATA[index] is valid before trying to get unit
            const currentDataItem = IMPACT_DATA.find(item => item.value === Number(value)) || IMPACT_DATA[index]; // A bit of a hack to find the item for y-axis labels if values map directly
            const unit = currentDataItem?.unit || '';
            return `${value}${unit}`;
          }
        },
        title: {
          display: true,
          text: 'Improvement / Value',
          color: labelColor,
          font: { size: 14, weight: '600', family: 'Poppins' },
        }
      },
      y: {
        grid: {
          display: false, // Cleaner look for y-axis
        },
        ticks: {
          color: labelColor,
          font: { size: 12, family: 'Nunito Sans' },
        },
      },
    },
    plugins: {
      legend: {
        display: false, // No need for legend with a single dataset
      },
      tooltip: {
        backgroundColor: themeMode === 'dark' ? tailwindColors.gray[700] : 'white',
        titleColor: themeMode === 'dark' ? tailwindColors.gray[100] : tailwindColors.gray[800],
        bodyColor: themeMode === 'dark' ? tailwindColors.gray[200] : tailwindColors.gray[700],
        borderColor: themeMode === 'dark' ? tailwindColors.gray[600] : tailwindColors.gray[300],
        borderWidth: 1,
        padding: 10,
        cornerRadius: 4,
        boxPadding: 3,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.x !== null) {
              const dataItem = IMPACT_DATA[context.dataIndex];
              label += `${context.parsed.x}${dataItem.unit || ''}`;
            }
            return label;
          },
          afterBody: function(tooltipItems) {
            const dataIndex = tooltipItems[0]?.dataIndex;
            if (dataIndex !== undefined && IMPACT_DATA[dataIndex]?.description) {
              return '\n' + IMPACT_DATA[dataIndex].description;
            }
            return '';
          }
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
  }), [themeMode, currentPalette, gridColor, labelColor, IMPACT_DATA]);

  return (
    <Section id={id} title={title} className="bg-gray-50 dark:bg-gray-800/50">
      <Card className="p-4 md:p-6">
        <div className="mb-6 text-center">
           {ImpactIcon && <ImpactIcon className={`w-10 h-10 mx-auto mb-3 text-${currentPalette.primary}-600 dark:text-${currentPalette.primary}-400`} />}
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a visual representation of key results and improvements I've contributed to throughout my career. These metrics highlight my focus on driving efficiency, enhancing customer experiences, and delivering tangible business value.
          </p>
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Bar options={options} data={chartData} />
        </div>
      </Card>
    </Section>
  );
};

export default ImpactSection;
