# Deployment Guide - FIONAMIAO Advisory Website

## Overview

This guide explains how to deploy the FIONAMIAO Consulting advisory website to Render.com.

**Domain:** www.advisory.fionaconsult.de

## Prerequisites

- Git repository pushed to GitHub
- Render.com account
- Domain registered with DNS provider

## Deployment Steps

### 1. Connect to Render

1. Go to [render.com](https://render.com)
2. Sign in or create an account
3. Click "New"
4. Select "Web Service"
5. Connect your GitHub repository containing this project

### 2. Configure the Service

The `render.yaml` file contains the configuration. Make sure these settings are correct:

```yaml
buildCommand: npm install && npm run build
startCommand: npm start
```

### 3. Set Environment Variables

In the Render dashboard:
- `NODE_ENV` = `production`
- `NEXT_PUBLIC_DOMAIN` = `www.advisory.fionaconsult.de`

### 4. Configure Custom Domain

1. In Render dashboard, go to your Web Service
2. Settings → Custom Domain
3. Add domain: `www.advisory.fionaconsult.de`
4. Copy the CNAME record provided

### 5. Update DNS Settings

With your domain provider:

1. Add a CNAME record:
   - **Name/Host:** www
   - **Value:** [CNAME from Render]
   - **TTL:** 3600 (or default)

2. Optional - Add A record for root domain:
   - **Name:** @ or (leave blank)
   - **Type:** A
   - **Value:** [IP from Render if using root domain]

### 6. Deploy

1. Push changes to GitHub:
```bash
git add .
git commit -m "Deploy to Render"
git push origin main
```

2. Render automatically deploys on push to main branch

3. Monitor deployment in Render dashboard

## Testing

After deployment, test the website:

- Visit https://www.advisory.fionaconsult.de
- Test all pages (Insights, Pricing, Contact, Join)
- Submit test inquiry form
- Check console for any errors

## Troubleshooting

### Build Failures
- Check build logs in Render dashboard
- Verify `package.json` has correct scripts
- Ensure all dependencies are listed

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Verify CNAME record is correct
- Check DNS settings with `nslookup`

### Form Not Working
- Check browser console for errors
- Verify email configuration (currently logs to console)

## Future Enhancements

To handle form submissions to email:
- Set up backend API with Node.js/Express
- Configure email service (SendGrid, Mailgun, etc.)
- Update form handler to call backend

## Redeploy

To redeploy after making changes:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Render automatically redeploys on push.

## Support

For issues and questions:
- Email: service@fionaconsult.de
- Check Render documentation: https://render.com/docs
