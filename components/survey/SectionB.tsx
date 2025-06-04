'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { SurveyFormData } from '@/lib/survey-schema';

interface SectionBProps {
  register: UseFormRegister<SurveyFormData>;
  errors: FieldErrors<SurveyFormData>;
}

export default function SectionB({ register, errors }: SectionBProps) {
  const revenueOptions = [
    { value: 'under-100k', label: 'Under AED 100,000', icon: '💰' },
    { value: '100k-500k', label: 'AED 100,000 - 500,000', icon: '💰' },
    { value: '500k-1m', label: 'AED 500,000 - 1 million', icon: '💰💰' },
    { value: '1m-5m', label: 'AED 1-5 million', icon: '💰💰' },
    { value: '5m-10m', label: 'AED 5-10 million', icon: '💰💰💰' },
    { value: 'over-10m', label: 'Over AED 10 million', icon: '💰💰💰' }
  ];

  const profitMarginOptions = [
    { value: 'less-10', label: 'Less than 10%' },
    { value: '10-20', label: '10-20%' },
    { value: '20-30', label: '20-30%' },
    { value: '30-40', label: '30-40%' },
    { value: 'over-40', label: 'Over 40%' }
  ];

  const employeeOptions = [
    { value: 'just-me', label: 'Just me' },
    { value: '2-5', label: '2-5' },
    { value: '6-15', label: '6-15' },
    { value: '16-30', label: '16-30' },
    { value: '31-50', label: '31-50' },
    { value: '50+', label: '50+' }
  ];

  const churnOptions = [
    { value: 'less-5', label: 'Less than 5%', desc: 'Excellent retention' },
    { value: '5-10', label: '5-10%', desc: 'Good retention' },
    { value: '10-20', label: '10-20%', desc: 'Average retention' },
    { value: '20-30', label: '20-30%', desc: 'Needs improvement' },
    { value: 'over-30', label: 'Over 30%', desc: 'High churn' },
    { value: 'not-sure', label: 'Not sure', desc: 'Need help tracking' }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Section B: Your Business Journey</h2>
        <p className="text-gray-400">Help us understand your business transformation with XMA</p>
      </div>
      
      <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">📊 Before Working with XMA</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What was your annual revenue?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {revenueOptions.map(({ value, label, icon }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('revenueBeforeXMA')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                    <span className="block text-gray-200">
                      <span className="mr-2">{icon}</span>
                      {label}
                    </span>
                  </div>
                </label>
              ))}
            </div>
            {errors.revenueBeforeXMA && <p className="text-red-400 text-sm mt-2">{errors.revenueBeforeXMA.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What was your monthly profit margin?</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profitMarginOptions.map(({ value, label }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('profitMarginBefore')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                    <span className="block text-center text-gray-200 font-medium">{label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.profitMarginBefore && <p className="text-red-400 text-sm mt-2">{errors.profitMarginBefore.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">How many employees did you have?</h4>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {employeeOptions.map(({ value, label }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('employeesBefore')} className="sr-only peer" />
                  <div className="p-3 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                    <span className="block text-center text-gray-200 text-sm font-medium">{label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.employeesBefore && <p className="text-red-400 text-sm mt-2">{errors.employeesBefore.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What was your monthly customer churn rate?</h4>
            <p className="text-sm text-gray-400 mb-3">The percentage of customers who stopped doing business with you each month</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {churnOptions.map(({ value, label, desc }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('churnRateBefore')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                    <span className="block text-gray-200 font-medium">{label}</span>
                    <span className="block text-gray-400 text-sm">{desc}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.churnRateBefore && <p className="text-red-400 text-sm mt-2">{errors.churnRateBefore.message}</p>}
          </div>
        </div>
      </div>

      <div className="bg-green-900/20 border border-green-700 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-green-400 mb-4">🚀 Current Performance</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What is your current annual revenue?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {revenueOptions.map(({ value, label, icon }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('currentRevenue')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-green-500 peer-checked:border-green-500 peer-checked:bg-green-900/30">
                    <span className="block text-gray-200">
                      <span className="mr-2">{icon}</span>
                      {label}
                    </span>
                  </div>
                </label>
              ))}
            </div>
            {errors.currentRevenue && <p className="text-red-400 text-sm mt-2">{errors.currentRevenue.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What is your current monthly profit margin?</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {profitMarginOptions.map(({ value, label }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('currentProfitMargin')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-green-500 peer-checked:border-green-500 peer-checked:bg-green-900/30">
                    <span className="block text-center text-gray-200 font-medium">{label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.currentProfitMargin && <p className="text-red-400 text-sm mt-2">{errors.currentProfitMargin.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">How many customers do you serve monthly?</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['1-10', '11-50', '51-100', '101-500', '500+'].map((value) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('monthlyCustomers')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-green-500 peer-checked:border-green-500 peer-checked:bg-green-900/30">
                    <span className="block text-center text-gray-200 font-medium">{value}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.monthlyCustomers && <p className="text-red-400 text-sm mt-2">{errors.monthlyCustomers.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What is your average customer lifetime value?</h4>
            <p className="text-sm text-gray-400 mb-3">The total revenue you expect from a customer over their entire relationship with you</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { value: 'under-500', label: 'Under AED 500' },
                { value: '500-2000', label: 'AED 500-2,000' },
                { value: '2000-5000', label: 'AED 2,000-5,000' },
                { value: '5000-15000', label: 'AED 5,000-15,000' },
                { value: 'over-15000', label: 'Over AED 15,000' }
              ].map(({ value, label }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('customerLifetimeValue')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-green-500 peer-checked:border-green-500 peer-checked:bg-green-900/30">
                    <span className="block text-gray-200">{label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.customerLifetimeValue && <p className="text-red-400 text-sm mt-2">{errors.customerLifetimeValue.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What industry do you serve?</h4>
            <select {...register('industry')} className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:border-green-500 focus:outline-none transition-all">
              <option value="">Select your industry...</option>
              <option value="ecommerce-retail">E-commerce/Retail</option>
              <option value="professional-services">Professional Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="real-estate">Real Estate</option>
              <option value="hospitality-tourism">Hospitality/Tourism</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
            {errors.industry && <p className="text-red-400 text-sm mt-2">{errors.industry.message}</p>}
            
            <input
              type="text"
              placeholder="If other, please specify your industry"
              {...register('industryOther')}
              className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-green-500 focus:outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">How long have you been in business?</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { value: 'less-1', label: '< 1 year' },
                { value: '1-3', label: '1-3 years' },
                { value: '3-5', label: '3-5 years' },
                { value: '5-10', label: '5-10 years' },
                { value: 'over-10', label: '10+ years' }
              ].map(({ value, label }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('businessDuration')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-green-500 peer-checked:border-green-500 peer-checked:bg-green-900/30">
                    <span className="block text-center text-gray-200 font-medium">{label}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.businessDuration && <p className="text-red-400 text-sm mt-2">{errors.businessDuration.message}</p>}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-gray-100">What is your current monthly customer churn rate?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {churnOptions.map(({ value, label, desc }) => (
                <label key={value} className="relative">
                  <input type="radio" value={value} {...register('currentChurnRate')} className="sr-only peer" />
                  <div className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-green-500 peer-checked:border-green-500 peer-checked:bg-green-900/30">
                    <span className="block text-gray-200 font-medium">{label}</span>
                    <span className="block text-gray-400 text-sm">{desc}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.currentChurnRate && <p className="text-red-400 text-sm mt-2">{errors.currentChurnRate.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}