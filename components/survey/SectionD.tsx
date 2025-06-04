'use client';

import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { SurveyFormData } from '@/lib/survey-schema';

interface SectionDProps {
  register: UseFormRegister<SurveyFormData>;
  errors: FieldErrors<SurveyFormData>;
  watch: UseFormWatch<SurveyFormData>;
}

export default function SectionD({ register, errors, watch }: SectionDProps) {
  const whereHeardAbout = watch('whereHeardAbout');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Section D: Your Buying Journey</h2>
        <p className="text-gray-400">Help us understand how you chose XMA and your experience</p>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What was the SINGLE biggest reason you chose XMA?</h3>
        <p className="text-sm text-gray-400 mb-4">What made us stand out from other agencies?</p>
        <div className="grid grid-cols-1 gap-3">
          {[
            { value: 'proven-track-record', label: '🏆 Proven track record', desc: 'Strong results and testimonials' },
            { value: 'competitive-pricing', label: '💰 Competitive pricing', desc: 'Best value for money' },
            { value: 'comprehensive-service', label: '🎯 Comprehensive service', desc: 'All-in-one solution' },
            { value: 'local-dubai-expertise', label: '🌆 Local Dubai expertise', desc: 'Understanding of the market' },
            { value: 'referral-from-trusted', label: '🤝 Referral from trusted source', desc: 'Someone recommended you' },
            { value: 'strong-portfolio', label: '📊 Strong portfolio', desc: 'Impressive case studies' },
            { value: 'personal-connection', label: '❤️ Personal connection', desc: 'Great team chemistry' },
            { value: 'other', label: '✨ Other', desc: 'Something else' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input 
                type="radio" 
                value={value} 
                {...register('biggestReasonChoseXMA')} 
                className="sr-only peer" 
              />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
                <span className="block text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.biggestReasonChoseXMA && <p className="text-red-400 text-sm mt-2">{errors.biggestReasonChoseXMA.message}</p>}
        
        <input
          type="text"
          placeholder="If other, please specify"
          {...register('biggestReasonOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What triggered your decision to hire a marketing agency?</h3>
        <p className="text-sm text-gray-400 mb-4">What was happening in your business at that time?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'sales-declining', label: '📉 Sales were declining', desc: 'Revenue was dropping' },
            { value: 'launched-new-product', label: '🚀 Launched new product', desc: 'Needed marketing support' },
            { value: 'competitor-outperforming', label: '🏃 Competitor outperforming', desc: 'Falling behind competition' },
            { value: 'needed-scale-quickly', label: '📈 Needed to scale quickly', desc: 'Rapid growth required' },
            { value: 'internal-not-working', label: '🔧 Internal not working', desc: 'In-house efforts failed' },
            { value: 'expanding-new-markets', label: '🌍 Expanding new markets', desc: 'Entering new territories' },
            { value: 'other', label: '💡 Other', desc: 'Different reason' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input 
                type="radio" 
                value={value} 
                {...register('triggerEvent')} 
                className="sr-only peer" 
              />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
                <span className="block text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.triggerEvent && <p className="text-red-400 text-sm mt-2">{errors.triggerEvent.message}</p>}
        
        <input
          type="text"
          placeholder="If other, please specify"
          {...register('triggerEventOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">Where did you first hear about XMA Agency?</h3>
        <select 
          {...register('whereHeardAbout')} 
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none transition-all"
        >
          <option value="">Select where you found us...</option>
          <option value="google-search">🔍 Google search</option>
          <option value="social-media">📱 Social media</option>
          <option value="referral-client-partner">🤝 Referral from client/partner</option>
          <option value="industry-event">🎤 Industry event/networking</option>
          <option value="linkedin">💼 LinkedIn</option>
          <option value="direct-outreach">📧 Direct outreach from XMA</option>
          <option value="other">✨ Other</option>
        </select>
        {errors.whereHeardAbout && <p className="text-red-400 text-sm mt-2">{errors.whereHeardAbout.message}</p>}
        
        {whereHeardAbout === 'social-media' && (
          <input
            type="text"
            placeholder="Which social media platform?"
            {...register('socialPlatform')}
            className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
          />
        )}
        
        <input
          type="text"
          placeholder="If other, please specify"
          {...register('whereHeardOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">Which content influenced your decision the most?</h3>
        <p className="text-sm text-gray-400 mb-4">What information helped you make your choice?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'case-study-testimonial', label: '📖 Case studies', desc: 'Client success stories' },
            { value: 'website-portfolio', label: '🌐 Website portfolio', desc: 'Our work showcase' },
            { value: 'social-media-content', label: '📱 Social media', desc: 'Posts and content' },
            { value: 'direct-presentation', label: '🎯 Direct presentation', desc: 'Personal proposal' },
            { value: 'client-referral-story', label: '💬 Client referral', desc: 'Recommendation story' },
            { value: 'industry-credentials', label: '🏅 Credentials', desc: 'Awards and certifications' },
            { value: 'other', label: '✨ Other', desc: 'Something else' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input 
                type="radio" 
                value={value} 
                {...register('mostInfluentialContent')} 
                className="sr-only peer" 
              />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
                <span className="block text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.mostInfluentialContent && <p className="text-red-400 text-sm mt-2">{errors.mostInfluentialContent.message}</p>}
        
        <input
          type="text"
          placeholder="If other, please specify"
          {...register('mostInfluentialOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>


      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">Who was involved in the decision?</h3>
        <select 
          {...register('decisionMakers')} 
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none transition-all"
        >
          <option value="">Select decision makers...</option>
          <option value="just-me">Just me</option>
          <option value="business-partner">Business partner</option>
          <option value="management-team">Management team</option>
          <option value="board-investors">Board/investors</option>
          <option value="family-members">Family members</option>
          <option value="other">Other</option>
        </select>
        {errors.decisionMakers && <p className="text-red-400 text-sm mt-2">{errors.decisionMakers.message}</p>}
        
        <input
          type="text"
          placeholder="If other, please specify"
          {...register('decisionMakersOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">Did someone refer you to XMA?</h3>
        <p className="text-sm text-gray-400 mb-4">We&apos;d love to thank them!</p>
        <input
          type="text"
          {...register('referrerName')}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
          placeholder="Enter referrer's name (optional)"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What almost prevented you from choosing us?</h3>
        <p className="text-sm text-gray-400 mb-4">Help us understand any concerns you had</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'budget-concerns', label: '💰 Budget concerns', desc: 'Cost considerations' },
            { value: 'timing-issues', label: '⏰ Timing issues', desc: 'Not the right time' },
            { value: 'uncertainty-roi', label: '📊 ROI uncertainty', desc: 'Unsure about returns' },
            { value: 'previous-bad-experience', label: '😔 Past experience', desc: 'Bad agency history' },
            { value: 'internal-capabilities', label: '🏠 Internal option', desc: 'Could do it in-house' },
            { value: 'nothing-easy', label: '✅ Nothing', desc: 'Easy decision' },
            { value: 'other', label: '💭 Other', desc: 'Different concern' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input 
                type="radio" 
                value={value} 
                {...register('almostPrevented')} 
                className="sr-only peer" 
              />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-gray-200 font-medium">{label}</span>
                <span className="block text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.almostPrevented && <p className="text-red-400 text-sm mt-2">{errors.almostPrevented.message}</p>}
        
        <input
          type="text"
          placeholder="If other, please specify"
          {...register('almostPreventedOther')}
          className="w-full mt-3 p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">How likely are you to recommend XMA?</h3>
        <p className="text-sm text-gray-400 mb-4">On a scale of 1-10</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: '1-3', label: '😞 1-3', desc: 'Not likely' },
            { value: '4-6', label: '😐 4-6', desc: 'Neutral' },
            { value: '7-8', label: '😊 7-8', desc: 'Likely' },
            { value: '9-10', label: '🤩 9-10', desc: 'Extremely likely' }
          ].map(({ value, label, desc }) => (
            <label key={value} className="relative">
              <input type="radio" value={value} {...register('referralLikelihood')} className="sr-only peer" />
              <div className="p-4 bg-gray-700 border-2 border-gray-600 rounded-lg cursor-pointer transition-all hover:border-blue-500 peer-checked:border-blue-500 peer-checked:bg-blue-900/30">
                <span className="block text-center text-gray-200 font-medium text-lg">{label}</span>
                <span className="block text-center text-gray-400 text-sm mt-1">{desc}</span>
              </div>
            </label>
          ))}
        </div>
        {errors.referralLikelihood && <p className="text-red-400 text-sm mt-2">{errors.referralLikelihood.message}</p>}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-100">What advice would you give to someone considering XMA?</h3>
        <p className="text-sm text-gray-400 mb-4">Your insights help future clients make informed decisions</p>
        <textarea
          {...register('advice')}
          rows={5}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all resize-none"
          placeholder="Share your experience and what others should know about working with XMA Agency..."
        />
        {errors.advice && <p className="text-red-400 text-sm mt-2">{errors.advice.message}</p>}
      </div>

      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-700 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-purple-400 mb-2">🎁 Almost Done!</h4>
        <p className="text-gray-300 text-sm">
          Thank you for taking the time to share your journey with us. Your feedback is invaluable 
          in helping us improve our services and better serve future clients like you!
        </p>
      </div>
    </div>
  );
}