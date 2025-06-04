'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { SurveyFormData } from '@/lib/survey-schema';

interface SectionCProps {
  register: UseFormRegister<SurveyFormData>;
  errors: FieldErrors<SurveyFormData>;
}

export default function SectionC({ register, errors }: SectionCProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Section C: Your Goals & Aspirations</h2>
        <p className="text-gray-400">Let&apos;s talk about your vision and what you want to achieve</p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What was your PRIMARY goal when hiring XMA?</h3>
        <p className="text-sm text-gray-400 mb-4">Select the main objective that drove your decision</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'increase-brand-awareness', label: '📢 Increase brand awareness', desc: 'Get more people to know about us' },
            { value: 'generate-more-leads', label: '🎯 Generate more leads', desc: 'Attract potential customers' },
            { value: 'improve-conversion-rates', label: '📈 Improve conversion rates', desc: 'Turn more visitors into customers' },
            { value: 'launch-new-products', label: '🚀 Launch new products/services', desc: 'Successfully introduce new offerings' },
            { value: 'enter-new-markets', label: '🌍 Enter new markets', desc: 'Expand to new regions or segments' },
            { value: 'improve-customer-retention', label: '🤝 Improve customer retention', desc: 'Keep customers coming back' },
            { value: 'other', label: '✨ Other', desc: 'Something else' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input 
                type="radio" 
                value={value} 
                {...register('primaryGoal')} 
                className="sr-only peer" 
              />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
                <span className="block text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.primaryGoal && <p className="text-red-400 text-sm mt-2">{errors.primaryGoal.message}</p>}
        
        <input
          type="text"
          placeholder="If other, please specify your goal"
          {...register('primaryGoalOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What specific problem were you trying to solve?</h3>
        <p className="text-sm text-gray-400 mb-4">Please describe the challenges you were facing in detail</p>
        <textarea
          {...register('specificProblem')}
          rows={5}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all resize-none"
          placeholder="Example: Our website traffic was declining, and we weren't converting visitors into customers. We tried social media marketing but couldn't achieve consistent results..."
        />
        {errors.specificProblem && <p className="text-red-400 text-sm mt-2">{errors.specificProblem.message}</p>}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What revenue goal are you targeting for the next 12 months?</h3>
        <p className="text-sm text-gray-400 mb-4">Help us understand your growth ambitions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'maintain', label: '📊 Maintain current levels', desc: 'Focus on stability' },
            { value: '25-growth', label: '📈 25% growth', desc: 'Steady expansion' },
            { value: '50-growth', label: '🚀 50% growth', desc: 'Significant growth' },
            { value: '100-growth', label: '🔥 100% growth', desc: 'Double the business' },
            { value: '200-plus-growth', label: '⚡ 200%+ growth', desc: 'Exponential growth' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input type="radio" value={value} {...register('revenueGoal12Months')} className="sr-only peer" />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
                <span className="block text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.revenueGoal12Months && <p className="text-red-400 text-sm mt-2">{errors.revenueGoal12Months.message}</p>}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What does success look like for your business in 3 years?</h3>
        <p className="text-sm text-gray-400 mb-4">Paint a picture of your ideal future state</p>
        <textarea
          {...register('success3Years')}
          rows={5}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all resize-none"
          placeholder="Example: We want to be the leading provider in our region with 3 office locations, a team of 50+ people, and annual revenue exceeding AED 20 million..."
        />
        {errors.success3Years && <p className="text-red-400 text-sm mt-2">{errors.success3Years.message}</p>}
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-blue-400 mb-2">💡 Pro Tip</h4>
        <p className="text-gray-300 text-sm">
          The more detailed your answers, the better we can tailor our strategies to help you achieve your goals. 
          Think big and be specific about what you want to accomplish!
        </p>
      </div>
    </div>
  );
}