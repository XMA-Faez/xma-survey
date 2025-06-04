# Supabase Database Setup

## Quick Setup Instructions

### Step 1: Access Supabase SQL Editor
1. Go to your Supabase project dashboard
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"

### Step 2: Run the Setup Script
1. Copy the entire contents of `setup-database.sql`
2. Paste it into the SQL Editor
3. Click "Run" button

### Step 3: Verify Setup
The script will:
- ✅ Create the `survey_responses` table with all required fields
- ✅ Add proper indexes for performance
- ✅ Set up Row Level Security (RLS) policies
- ✅ Create triggers for automatic timestamps
- ✅ Create an analytics view for insights
- ✅ Display success messages

## What the Script Creates

### Main Table: `survey_responses`
- **31+ fields** covering all survey sections
- **UUID primary key** with auto-generation
- **Automatic timestamps** (created_at, updated_at)
- **Data validation** with CHECK constraints
- **Proper field types** and constraints

### Security Features
- **Row Level Security (RLS)** enabled
- **Anonymous inserts** allowed for survey submissions
- **Authenticated reads** for viewing responses
- **Service role access** for admin operations

### Performance Optimizations
- **8 indexes** on frequently queried fields
- **Optimized for analytics** and reporting
- **Fast lookups** by date, location, revenue, etc.

### Analytics View
- **survey_analytics** view for quick insights
- **Response counts** by time periods
- **NPS calculation** (promoters, passives, detractors)
- **Demographics breakdown**
- **Revenue growth tracking**

## Testing the Setup

After running the script, you can test it by:

1. **Check table exists**:
```sql
SELECT COUNT(*) FROM survey_responses;
```

2. **View analytics**:
```sql
SELECT * FROM survey_analytics;
```

3. **Test a sample insert** (uncomment the test record in the script)

## Troubleshooting

If you encounter issues:

1. **Permission errors**: Ensure you're running as database owner
2. **Constraint violations**: Check that enum values match the application
3. **RLS issues**: Verify policies are created correctly

## Next Steps

1. ✅ Update your `.env.local` with real Supabase credentials
2. ✅ Test the survey application
3. ✅ Deploy to production
4. ✅ Monitor responses in Supabase dashboard

The database is now ready to collect and analyze XMA Agency client survey responses!