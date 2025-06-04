# XMA Agency Client Survey

A comprehensive survey application built with Next.js, React Hook Form, and Supabase to collect valuable client feedback and insights.

## Features

- 📋 Multi-step survey with 4 sections (Demographics, Business Journey, Goals, Buying Process)
- 🎨 Dark mode design with user-friendly card-based selections
- 📱 Fully responsive for mobile and desktop
- ✅ Form validation with Zod schema
- 🔒 Secure data storage with Supabase
- 🎯 Free marketing audit incentive

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **Forms**: React Hook Form with Zod validation
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd xma-survey
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Supabase Setup

1. Create a new Supabase project
2. Run the migration script in the Supabase SQL editor:
```sql
-- Copy and paste the contents of supabase/migration.sql
```

3. The migration creates:
   - `survey_responses` table with all required fields
   - Proper indexes for performance
   - Row Level Security policies
   - Automatic timestamp updates

### Development

Start the development server:
```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── app/
│   ├── api/survey/          # API endpoint for survey submission
│   ├── survey/              # Survey page
│   └── page.tsx             # Landing page
├── components/survey/       # Survey section components
├── lib/
│   ├── survey-schema.ts     # Zod validation schema
│   ├── survey-service.ts    # Supabase integration
│   ├── supabase.ts          # Supabase client
│   └── database.types.ts    # TypeScript types
└── supabase/
    └── migration.sql        # Database schema
```

## Survey Sections

1. **Section A: Demographics** - Age, gender, location, business structure, role
2. **Section B: Business Journey** - Before/after metrics, revenue, employees, churn
3. **Section C: Goals & Aspirations** - Primary goals, problems, growth targets
4. **Section D: Buying Process** - Decision factors, journey, recommendations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |

## Analytics & Insights

The survey data can be analyzed using Supabase's dashboard or connected to tools like:
- Grafana for visualization
- Metabase for business intelligence
- Export to CSV for Excel analysis

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential to XMA Agency.