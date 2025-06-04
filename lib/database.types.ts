export interface Database {
  public: {
    Tables: {
      survey_responses: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          
          // Section A: Demographics
          age_range: string
          gender: string
          location: string
          business_structure: string
          role: string
          role_other?: string
          
          // Section B: Business Stats
          revenue_before_xma: string
          profit_margin_before: string
          employees_before: string
          churn_rate_before: string
          current_revenue: string
          current_profit_margin: string
          monthly_customers: string
          customer_lifetime_value: string
          industry: string
          industry_other?: string
          business_duration: string
          current_churn_rate: string
          
          // Section C: Goals
          primary_goal: string
          primary_goal_other?: string
          specific_problem: string
          revenue_goal_12_months: string
          success_3_years: string
          
          // Section D: Buying Process
          biggest_reason_chose_xma: string
          biggest_reason_other?: string
          trigger_event: string
          trigger_event_other?: string
          where_heard_about: string
          where_heard_other?: string
          social_platform?: string
          most_influential_content: string
          most_influential_other?: string
          decision_makers: string
          decision_makers_other?: string
          referrer_name?: string
          almost_prevented: string
          almost_prevented_other?: string
          referral_likelihood: string
          advice: string
        }
        Insert: Omit<Database['public']['Tables']['survey_responses']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['survey_responses']['Insert']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}