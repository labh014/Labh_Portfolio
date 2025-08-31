# Vercel Deployment Guide

This project is configured for frontend-only deployment on Vercel.

## Prerequisites

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Make sure you have a Vercel account at [vercel.com](https://vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. Navigate to the project root:
   ```bash
   cd ResumeVision
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Follow the prompts to:
   - Link to your Vercel account
   - Set up the project
   - Deploy

### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and create a new project
3. Import your GitHub repository
4. Vercel will automatically detect the configuration and deploy

## Configuration

The project uses the following Vercel configuration:

- **Build Command**: `npm run build` (runs `vite build`)
- **Output Directory**: `dist/public`
- **Static Assets**: Served from `/attached_assets`

## Build Process

1. Vercel will install dependencies from `client/package.json`
2. Run the build script which executes `vite build`
3. Serve the static files from `dist/public`
4. Handle routing for the SPA (Single Page Application)

## Custom Domain

After deployment, you can add a custom domain in your Vercel dashboard.

## Environment Variables

If you need to add environment variables later, you can do so in the Vercel dashboard under Project Settings > Environment Variables.
