# FIONAMIAO Consulting - Advisory Website

A modern, responsive consulting website built with Next.js, TypeScript, and Tailwind CSS.

**Domain:** www.advisory.fionaconsult.de

## 🚀 Features

- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Modern Stack** - Next.js 14+, React 18, TypeScript
- **SEO Optimized** - Metadata configuration for better search rankings
- **Fast Performance** - Optimized for production with Next.js built-in tools
- **Contact Forms** - Client-side form handling for inquiries
- **User Authentication** - Join/Signup page with form validation

## 📄 Pages

- **Home** (/) - Welcome page with services overview
- **Insights** (/insights) - Detailed services and approach
- **Pricing** (/pricing) - Subscription plans with custom quotes
- **Contact** (/contact) - Inquiry form for potential clients
- **Join** (/join) - User account creation/signup

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## 📦 Project Structure

```
src/
├── app/
│   ├── (pages)/           # Route groups for main pages
│   │   ├── insights/
│   │   ├── pricing/
│   │   ├── contact/
│   │   └── join/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   └── PricingCard.tsx    # Pricing card component
└── lib/                   # Utility functions
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🔧 Environment Configuration

For domain configuration, update DNS settings to point `www.advisory.fionaconsult.de` to your hosting provider.

## 📝 Contact

**Email:** service@fionaconsult.de  
**Company:** FIONAMIAO CONSULTING
