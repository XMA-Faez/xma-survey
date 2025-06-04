import { NextRequest, NextResponse } from 'next/server';
import { surveySchema } from '@/lib/survey-schema';
import { saveSurveyResponse } from '@/lib/survey-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the survey data
    const validatedData = surveySchema.parse(body);
    
    // Save to Supabase
    const result = await saveSurveyResponse(validatedData);
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to save survey', details: result.error },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Survey submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Survey submission error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Invalid survey data', details: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}