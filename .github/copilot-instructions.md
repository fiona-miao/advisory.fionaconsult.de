# Advisory Website Project

A professional consulting website built with Next.js, TypeScript, and Tailwind CSS.

**Domain:** www.advisory.fionaconsult.de

## ✅ Completed Features
- [x] Project scaffolding with Next.js
- [x] Home page with company overview
- [x] Insights/Services page with service details
- [x] Pricing page with three subscription tiers
- [x] Contact/Inquiry form with validation
- [x] Join/Signup page with authentication form
- [x] Responsive design with Tailwind CSS
- [x] Header navigation component
- [x] Footer with contact information
- [x] Deployment configuration for Render.com

## 📝 Pages
- **Home** (/) - Company intro and CTA buttons
- **Insights** (/insights) - Services and advisory approach
- **Pricing** (/pricing) - Subscription plans
- **Contact** (/contact) - Inquiry form
- **Join** (/join) - Account creation

## 🛠️ Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## 📂 Project Structure
```
src/
├── app/
│   ├── (pages)/          # Route groups
│   │   ├── insights/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── contact/page.tsx
│   │   └── join/page.tsx
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PricingCard.tsx
└── lib/                  # Utilities (future)
```

## 🚀 Development
- `npm run dev` - Start development server (port 3000)
- `npm run build` - Production build
- `npm start` - Run production server
- `npm run lint` - Run linter

## 📋 Key Implementation Details
- **Forms**: Client-side handling with React hooks
- **Styling**: Tailwind CSS utility classes
- **Navigation**: Next.js Link component for client-side routing
- **Components**: Reusable Header, Footer, and PricingCard

## 🔄 Next Steps
1. Deploy to Render.com (see DEPLOYMENT.md)
2. Configure DNS for custom domain
3. Set up backend API for form submissions
4. Add database for user accounts
5. Implement email notifications

## 📚 Documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions
- See [README.md](./README.md) for project overview
- See [.env.example](./.env.example) for environment variables
