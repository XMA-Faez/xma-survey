'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { SurveyFormData } from '@/lib/survey-schema';

interface SectionAProps {
  register: UseFormRegister<SurveyFormData>;
  errors: FieldErrors<SurveyFormData>;
}

export default function SectionA({ register, errors }: SectionAProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Section A: About You</h2>
        <p className="text-gray-400">Let&apos;s start with some basic information about you and your business</p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What is your age range?</h3>
        <p className="text-sm text-gray-400 mb-4">This helps us understand our client demographics</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['25-34', '35-44', '45-54', '55-64', '65+'].map((age) => (
            <label key={age} className="relative">
              <input
                type="radio"
                value={age}
                {...register('ageRange')}
                className="sr-only peer"
              />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-center text-gray-200 font-medium">{age}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.ageRange && <p className="text-red-400 text-sm mt-2">{errors.ageRange.message}</p>}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">How do you identify?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <label className="relative">
            <input type="radio" value="male" {...register('gender')} className="sr-only peer" />
            <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
              <span className="block text-center text-gray-200 font-medium">Male</span>
            </div>
          </label>
          <label className="relative">
            <input type="radio" value="female" {...register('gender')} className="sr-only peer" />
            <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
              <span className="block text-center text-gray-200 font-medium">Female</span>
            </div>
          </label>
          <label className="relative">
            <input type="radio" value="prefer-not-to-say" {...register('gender')} className="sr-only peer" />
            <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
              <span className="block text-center text-gray-200 font-medium">Prefer not to say</span>
            </div>
          </label>
        </div>
        {errors.gender && <p className="text-red-400 text-sm mt-2">{errors.gender.message}</p>}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">Where is your business primarily located?</h3>
        <p className="text-sm text-gray-400 mb-4">This helps us understand regional trends</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'dubai', label: '🇦🇪 Dubai, UAE' },
            { value: 'other-uae', label: '🇦🇪 Other UAE Emirates' },
            { value: 'saudi', label: '🇸🇦 Saudi Arabia' },
            { value: 'other-gcc', label: '🌍 Other GCC Countries' },
            { value: 'other-middle-east', label: '🌍 Other Middle East' },
            { value: 'international', label: '🌐 International' }
          ].map(({ value, label }) => (
            <label key={value} className="relative">
              <input type="radio" value={value} {...register('location')} className="sr-only peer" />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.location && <p className="text-red-400 text-sm mt-2">{errors.location.message}</p>}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">How would you describe your business structure?</h3>
        <p className="text-sm text-gray-400 mb-4">Select the option that best describes your current setup</p>
        <div className="grid grid-cols-1 gap-3">
          {[
            { value: 'solo', label: '👤 Solo entrepreneur', desc: 'Just me running the show' },
            { value: 'partnership', label: '👥 Partnership', desc: '2-3 partners working together' },
            { value: 'small-team', label: '👨‍👩‍👧‍👦 Small team', desc: 'Under 10 employees' },
            { value: 'medium', label: '🏢 Medium business', desc: '10-50 employees' },
            { value: 'large', label: '🏛️ Large enterprise', desc: '50+ employees' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input type="radio" value={value} {...register('businessStructure')} className="sr-only peer" />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
                <span className="block text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.businessStructure && <p className="text-red-400 text-sm mt-2">{errors.businessStructure.message}</p>}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What is your role in the business?</h3>
        <p className="text-sm text-gray-400 mb-4">Select your primary role</p>
        <select 
          {...register('role')} 
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none transition-all"
        >
          <option value="">Choose your role...</option>
          <option value="founder-owner">Founder/Owner</option>
          <option value="ceo-md">CEO/Managing Director</option>
          <option value="marketing-director">Marketing Director</option>
          <option value="operations-manager">Operations Manager</option>
          <option value="other">Other</option>
        </select>
        {errors.role && <p className="text-red-400 text-sm mt-2">{errors.role.message}</p>}
        
        <input
          type="text"
          placeholder="If other, please specify your role"
          {...register('roleOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>
    </div>
  );
}