-- XMA Agency Client Survey Database Setup
-- Run this script in your Supabase SQL Editor
-- This will create the complete database structure needed for the survey application

-- Drop existing table if it exists (for clean setup)
DROP TABLE IF EXISTS survey_responses CASCADE;

-- Drop existing functions if they exist
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

-- Create the survey_responses table
CREATE TABLE survey_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  
  -- Section A: Demographics
  age_range TEXT NOT NULL CHECK (age_range IN ('25-34', '35-44', '45-54', '55-64', '65+')),
  gender TEXT NOT NULL CHECK (gender IN ('male', 'female', 'prefer-not-to-say')),
  location TEXT NOT NULL CHECK (location IN ('dubai', 'other-uae', 'saudi', 'other-gcc', 'other-middle-east', 'international')),
  business_structure TEXT NOT NULL CHECK (business_structure IN ('solo', 'partnership', 'small-team', 'medium', 'large')),
  role TEXT NOT NULL,
  role_other TEXT,
  
  -- Section B: Business Stats - Before XMA
  revenue_before_xma TEXT NOT NULL CHECK (revenue_before_xma IN ('under-100k', '100k-500k', '500k-1m', '1m-5m', '5m-10m', 'over-10m')),
  profit_margin_before TEXT NOT NULL CHECK (profit_margin_before IN ('less-10', '10-20', '20-30', '30-40', 'over-40')),
  employees_before TEXT NOT NULL CHECK (employees_before IN ('just-me', '2-5', '6-15', '16-30', '31-50', '50+')),
  churn_rate_before TEXT NOT NULL CHECK (churn_rate_before IN ('less-5', '5-10', '10-20', '20-30', 'over-30', 'not-sure')),
  
  -- Section B: Business Stats - Current
  current_revenue TEXT NOT NULL CHECK (current_revenue IN ('under-100k', '100k-500k', '500k-1m', '1m-5m', '5m-10m', 'over-10m')),
  current_profit_margin TEXT NOT NULL CHECK (current_profit_margin IN ('less-10', '10-20', '20-30', '30-40', 'over-40')),
  monthly_customers TEXT NOT NULL CHECK (monthly_customers IN ('1-10', '11-50', '51-100', '101-500', '500+')),
  customer_lifetime_value TEXT NOT NULL CHECK (customer_lifetime_value IN ('under-500', '500-2000', '2000-5000', '5000-15000', 'over-15000')),
  industry TEXT NOT NULL,
  industry_other TEXT,
  business_duration TEXT NOT NULL CHECK (business_duration IN ('less-1', '1-3', '3-5', '5-10', 'over-10')),
  current_churn_rate TEXT NOT NULL CHECK (current_churn_rate IN ('less-5', '5-10', '10-20', '20-30', 'over-30', 'not-sure')),
  
  -- Section C: Goals & Aspirations
  primary_goal TEXT NOT NULL,
  primary_goal_other TEXT,
  specific_problem TEXT NOT NULL CHECK (LENGTH(specific_problem) >= 10),
  revenue_goal_12_months TEXT NOT NULL CHECK (revenue_goal_12_months IN ('maintain', '25-growth', '50-growth', '100-growth', '200-plus-growth')),
  success_3_years TEXT NOT NULL CHECK (LENGTH(success_3_years) >= 10),
  
  -- Section D: Buying Process & Experience
  biggest_reason_chose_xma TEXT NOT NULL,
  biggest_reason_other TEXT,
  trigger_event TEXT NOT NULL,
  trigger_event_other TEXT,
  where_heard_about TEXT NOT NULL,
  where_heard_other TEXT,
  social_platform TEXT,
  most_influential_content TEXT NOT NULL,
  most_influential_other TEXT,
  decision_makers TEXT NOT NULL,
  decision_makers_other TEXT,
  referrer_name TEXT,
  almost_prevented TEXT NOT NULL,
  almost_prevented_other TEXT,
  referral_likelihood TEXT NOT NULL CHECK (referral_likelihood IN ('1-3', '4-6', '7-8', '9-10')),
  advice TEXT NOT NULL CHECK (LENGTH(advice) >= 10)
);

-- Create indexes for better performance
CREATE INDEX idx_survey_responses_created_at ON survey_responses(created_at DESC);
CREATE INDEX idx_survey_responses_referral_likelihood ON survey_responses(referral_likelihood);
CREATE INDEX idx_survey_responses_location ON survey_responses(location);
CREATE INDEX idx_survey_responses_business_structure ON survey_responses(business_structure);
CREATE INDEX idx_survey_responses_industry ON survey_responses(industry);
CREATE INDEX idx_survey_responses_revenue_before ON survey_responses(revenue_before_xma);
CREATE INDEX idx_survey_responses_current_revenue ON survey_responses(current_revenue);

-- Enable Row Level Security (RLS)
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous survey submissions" ON survey_responses;
DROP POLICY IF EXISTS "Allow authenticated users to read responses" ON survey_responses;
DROP POLICY IF EXISTS "Allow service role full access" ON survey_responses;

-- Create a policy to allow anonymous inserts (for survey submissions)
CREATE POLICY "Allow anonymous survey submissions" 
ON survey_responses 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to read all responses
CREATE POLICY "Allow authenticated users to read responses" 
ON survey_responses 
FOR SELECT 
TO authenticated
USING (true);

-- Create a policy to allow service role full access (for admin operations)
CREATE POLICY "Allow service role full access"
ON survey_responses
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create the trigger
CREATE TRIGGER update_survey_responses_updated_at 
    BEFORE UPDATE ON survey_responses 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create a view for analytics (optional)
CREATE OR REPLACE VIEW survey_analytics AS
SELECT 
    COUNT(*) as total_responses,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '7 days') as responses_last_7_days,
    COUNT(*) FILTER (WHERE created_at >= NOW() - INTERVAL '30 days') as responses_last_30_days,
    
    -- Referral likelihood distribution
    COUNT(*) FILTER (WHERE referral_likelihood = '9-10') as promoters,
    COUNT(*) FILTER (WHERE referral_likelihood = '7-8') as passives,
    COUNT(*) FILTER (WHERE referral_likelihood IN ('1-3', '4-6')) as detractors,
    
    -- Location distribution
    COUNT(*) FILTER (WHERE location = 'dubai') as dubai_clients,
    COUNT(*) FILTER (WHERE location = 'other-uae') as other_uae_clients,
    COUNT(*) FILTER (WHERE location = 'saudi') as saudi_clients,
    
    -- Business size distribution
    COUNT(*) FILTER (WHERE business_structure = 'solo') as solo_entrepreneurs,
    COUNT(*) FILTER (WHERE business_structure = 'small-team') as small_teams,
    COUNT(*) FILTER (WHERE business_structure = 'medium') as medium_businesses,
    COUNT(*) FILTER (WHERE business_structure = 'large') as large_enterprises,
    
    -- Revenue growth comparison
    COUNT(*) FILTER (WHERE current_revenue > revenue_before_xma) as revenue_increased,
    COUNT(*) FILTER (WHERE current_revenue = revenue_before_xma) as revenue_same,
    COUNT(*) FILTER (WHERE current_revenue < revenue_before_xma) as revenue_decreased
    
FROM survey_responses;

-- Grant permissions on the view
GRANT SELECT ON survey_analytics TO authenticated;
GRANT SELECT ON survey_analytics TO service_role;

-- Insert a test record to verify the setup works (optional - remove in production)
-- INSERT INTO survey_responses (
--     age_range, gender, location, business_structure, role,
--     revenue_before_xma, profit_margin_before, employees_before, churn_rate_before,
--     current_revenue, current_profit_margin, monthly_customers, customer_lifetime_value,
--     industry, business_duration, current_churn_rate,
--     primary_goal, specific_problem, revenue_goal_12_months, success_3_years,
--     biggest_reason_chose_xma, trigger_event, where_heard_about, most_influential_content,
--     decision_makers, almost_prevented, referral_likelihood, advice
-- ) VALUES (
--     '35-44', 'male', 'dubai', 'small-team', 'founder-owner',
--     '500k-1m', '20-30', '6-15', 'less-5',
--     '1m-5m', '30-40', '51-100', '5000-15000',
--     'technology', '3-5', 'less-5',
--     'generate-more-leads', 'We needed help with digital marketing and lead generation to scale our business.',
--     '100-growth', 'We want to be the leading tech company in the region with multiple offices and 100+ employees.',
--     'proven-track-record', 'needed-scale-quickly', 'referral-client-partner', 'case-study-testimonial',
--     'just-me', 'nothing-easy', '9-10', 'XMA Agency is excellent! They helped us grow significantly and I highly recommend them to any business.'
-- );

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'XMA Survey database setup completed successfully!';
    RAISE NOTICE 'Table created: survey_responses';
    RAISE NOTICE 'Indexes created for performance optimization';
    RAISE NOTICE 'Row Level Security policies configured';
    RAISE NOTICE 'Analytics view created: survey_analytics';
    RAISE NOTICE 'You can now start collecting survey responses!';
END $$;