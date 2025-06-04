-- Create the survey_responses table
CREATE TABLE survey_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Section A: Demographics
  age_range TEXT NOT NULL,
  gender TEXT NOT NULL,
  location TEXT NOT NULL,
  business_structure TEXT NOT NULL,
  role TEXT NOT NULL,
  role_other TEXT,
  
  -- Section B: Business Stats - Before XMA
  revenue_before_xma TEXT NOT NULL,
  profit_margin_before TEXT NOT NULL,
  employees_before TEXT NOT NULL,
  churn_rate_before TEXT NOT NULL,
  
  -- Section B: Business Stats - Current
  current_revenue TEXT NOT NULL,
  current_profit_margin TEXT NOT NULL,
  monthly_customers TEXT NOT NULL,
  customer_lifetime_value TEXT NOT NULL,
  industry TEXT NOT NULL,
  industry_other TEXT,
  business_duration TEXT NOT NULL,
  current_churn_rate TEXT NOT NULL,
  
  -- Section C: Goals & Aspirations
  primary_goal TEXT NOT NULL,
  primary_goal_other TEXT,
  specific_problem TEXT NOT NULL,
  revenue_goal_12_months TEXT NOT NULL,
  success_3_years TEXT NOT NULL,
  
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
  referral_likelihood TEXT NOT NULL,
  advice TEXT NOT NULL
);

-- Create an index on created_at for faster queries
CREATE INDEX idx_survey_responses_created_at ON survey_responses(created_at);

-- Create an index on referral_likelihood for analytics
CREATE INDEX idx_survey_responses_referral_likelihood ON survey_responses(referral_likelihood);

-- Enable Row Level Security (RLS)
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous inserts (for survey submissions)
CREATE POLICY "Allow anonymous survey submissions" 
ON survey_responses 
FOR INSERT 
WITH CHECK (true);

-- Create a policy to allow authenticated users to read all responses
CREATE POLICY "Allow authenticated users to read responses" 
ON survey_responses 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_survey_responses_updated_at 
    BEFORE UPDATE ON survey_responses 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();