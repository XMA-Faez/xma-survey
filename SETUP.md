# XMA Survey Setup Guide

## Quick Setup for Production

### 1. Environment Variables
Update your `.env.local` file with your actual Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
```

### 2. Supabase Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the migration script from `supabase/migration.sql`

The script will create:
- `survey_responses` table with all required fields
- Proper indexes for performance
- Row Level Security policies
- Triggers for automatic timestamps

### 3. Test the Application

1. Start the development server:
```bash
bun dev
```

2. Visit `http://localhost:3000`
3. Complete a test survey to verify Supabase integration

### 4. Deploy to Production

#### Option A: Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

#### Option B: Other Platforms
- Ensure environment variables are set
- Build and deploy: `bun run build && bun start`

## Features Ready for Production

✅ Complete 4-section survey form
✅ Dark mode responsive design
✅ Form validation with Zod
✅ Supabase integration for data storage
✅ Error handling and user feedback
✅ Build optimization and deployment ready

## Data Analysis

Once survey responses are collected, you can:

1. **View in Supabase Dashboard**: Real-time data viewing and basic analytics
2. **Export to CSV**: For Excel analysis and reporting
3. **Connect to BI Tools**: Grafana, Metabase, or Tableau for advanced analytics
4. **Custom Queries**: Use Supabase SQL editor for custom reports

## Security & Privacy

- Row Level Security (RLS) enabled
- Anonymous submissions allowed for surveys
- Authenticated access required for viewing responses
- No sensitive data logging or exposure

## Support

For technical issues:
1. Check build logs for deployment issues
2. Verify environment variables are correct
3. Test Supabase connection in development
4. Review browser console for client-side errors