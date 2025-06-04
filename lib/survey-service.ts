import { supabase } from './supabase'
import { SurveyFormData } from './survey-schema'
import { Database } from './database.types'

type SurveyInsert = Database['public']['Tables']['survey_responses']['Insert']

export async function saveSurveyResponse(data: SurveyFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Transform the form data to match database schema
    const surveyData: SurveyInsert = {
      // Section A
      age_range: data.ageRange,
      gender: data.gender,
      location: data.location,
      business_structure: data.businessStructure,
      role: data.role,
      role_other: data.roleOther || undefined,
      
      // Section B
      revenue_before_xma: data.revenueBeforeXMA,
      profit_margin_before: data.profitMarginBefore,
      employees_before: data.employeesBefore,
      churn_rate_before: data.churnRateBefore,
      current_revenue: data.currentRevenue,
      current_profit_margin: data.currentProfitMargin,
      monthly_customers: data.monthlyCustomers,
      customer_lifetime_value: data.customerLifetimeValue,
      industry: data.industry,
      industry_other: data.industryOther || undefined,
      business_duration: data.businessDuration,
      current_churn_rate: data.currentChurnRate,
      
      // Section C
      primary_goal: data.primaryGoal,
      primary_goal_other: data.primaryGoalOther || undefined,
      specific_problem: data.specificProblem,
      revenue_goal_12_months: data.revenueGoal12Months,
      success_3_years: data.success3Years,
      
      // Section D
      biggest_reason_chose_xma: data.biggestReasonChoseXMA,
      biggest_reason_other: data.biggestReasonOther || undefined,
      trigger_event: data.triggerEvent,
      trigger_event_other: data.triggerEventOther || undefined,
      where_heard_about: data.whereHeardAbout,
      where_heard_other: data.whereHeardOther || undefined,
      social_platform: data.socialPlatform || undefined,
      most_influential_content: data.mostInfluentialContent,
      most_influential_other: data.mostInfluentialOther || undefined,
      decision_makers: data.decisionMakers,
      decision_makers_other: data.decisionMakersOther || undefined,
      referrer_name: data.referrerName || undefined,
      almost_prevented: data.almostPrevented,
      almost_prevented_other: data.almostPreventedOther || undefined,
      referral_likelihood: data.referralLikelihood,
      advice: data.advice
    }

    const { error } = await supabase
      .from('survey_responses')
      .insert([surveyData])

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Survey save error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}