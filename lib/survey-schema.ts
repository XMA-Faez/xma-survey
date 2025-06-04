import { z } from 'zod';

export const surveySchema = z.object({
  // Section A: Demographics
  ageRange: z.enum(['25-34', '35-44', '45-54', '55-64', '65+']),
  gender: z.enum(['male', 'female', 'prefer-not-to-say']),
  location: z.enum(['dubai', 'other-uae', 'saudi', 'other-gcc', 'other-middle-east', 'international']),
  businessStructure: z.enum(['solo', 'partnership', 'small-team', 'medium', 'large']),
  role: z.string().min(1, 'Role is required'),
  roleOther: z.string().optional(),

  // Section B: Business Stats - Before & Current
  revenueBeforeXMA: z.enum(['under-100k', '100k-500k', '500k-1m', '1m-5m', '5m-10m', 'over-10m']),
  profitMarginBefore: z.enum(['less-10', '10-20', '20-30', '30-40', 'over-40']),
  employeesBefore: z.enum(['just-me', '2-5', '6-15', '16-30', '31-50', '50+']),
  
  currentRevenue: z.enum(['under-100k', '100k-500k', '500k-1m', '1m-5m', '5m-10m', 'over-10m']),
  currentProfitMargin: z.enum(['less-10', '10-20', '20-30', '30-40', 'over-40']),
  monthlyCustomers: z.enum(['1-10', '11-50', '51-100', '101-500', '500+']),
  customerLifetimeValue: z.enum(['under-500', '500-2000', '2000-5000', '5000-15000', 'over-15000']),
  
  industry: z.string().min(1, 'Industry is required'),
  industryOther: z.string().optional(),
  businessDuration: z.enum(['less-1', '1-3', '3-5', '5-10', 'over-10']),
  churnRateBefore: z.enum(['less-5', '5-10', '10-20', '20-30', 'over-30', 'not-sure']),
  currentChurnRate: z.enum(['less-5', '5-10', '10-20', '20-30', 'over-30', 'not-sure']),

  // Section C: Goals & Aspirations
  primaryGoal: z.string().min(1, 'Primary goal is required'),
  primaryGoalOther: z.string().optional(),
  specificProblem: z.string().min(10, 'Please provide more detail about the problem'),
  revenueGoal12Months: z.enum(['maintain', '25-growth', '50-growth', '100-growth', '200-plus-growth']),
  success3Years: z.string().min(10, 'Please describe your 3-year vision'),

  // Section D: Buying Process & Experience
  biggestReasonChoseXMA: z.string().min(1, 'Please select a reason'),
  biggestReasonOther: z.string().optional(),
  triggerEvent: z.string().min(1, 'Please select a trigger event'),
  triggerEventOther: z.string().optional(),
  
  whereHeardAbout: z.string().min(1, 'Please select where you heard about us'),
  whereHeardOther: z.string().optional(),
  socialPlatform: z.string().optional(),
  
  mostInfluentialContent: z.string().min(1, 'Please select the most influential content'),
  mostInfluentialOther: z.string().optional(),
  
  decisionMakers: z.string().min(1, 'Please select who was involved'),
  decisionMakersOther: z.string().optional(),
  
  referrerName: z.string().optional(),
  almostPrevented: z.string().min(1, 'Please select what almost prevented you'),
  almostPreventedOther: z.string().optional(),
  
  referralLikelihood: z.enum(['1-3', '4-6', '7-8', '9-10']),
  advice: z.string().min(10, 'Please provide advice for other business owners')
});

export type SurveyFormData = z.infer<typeof surveySchema>;