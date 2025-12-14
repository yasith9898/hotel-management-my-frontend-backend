# Deploying to Vercel

This guide explains how to deploy your MERN Stack application to Vercel.

## Prerequisites

1.  **GitHub Account**: You should have your project pushed to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
3.  **MongoDB Atlas**: Your database must be hosted on MongoDB Atlas (or another cloud provider), as localhost won't work.

## Deployment Steps

### 1. Push to GitHub
If you haven't already, commit your changes and push to GitHub:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Import Project in Vercel
1.  Go to your Vercel Dashboard.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository.
4.  In the "Configure Project" screen:
    *   **Framework Preset**: Select "Other" (since we are using a custom `vercel.json`).
    *   **Root Directory**: Keep it as `./` (root).

### 3. Configure Environment Variables
Expand the **"Environment Variables"** section and add the following:

| Key | Value | Description |
|-----|-------|-------------|
| `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB Atlas connection string. |
| `JWT_SECRET` | `your_secret_key` | Secret key for authentication tokens. |
| `NODE_ENV` | `production` | Set to production. |

*Note: You do not need to set `PORT`. Vercel handles this.*

### 4. Deploy
Click **"Deploy"**. Vercel will build your frontend and backend.

## Troubleshooting

*   **Build Failures**: Check the deployment logs in Vercel to see if it failed during `npm install` or the build command.
*   **404 on Refresh**: If you refresh a page like `/users` and get a 404, ensure the `vercel.json` routes are correctly handling the rewrite (we have configured this).
*   **Database Connection**: Ensure your MongoDB Atlas Network Access allows connections from anywhere (`0.0.0.0/0`) or specific Vercel IPs (allowing all is easiest for serverless).
*   **Blank Page**: If you see a blank page, it's likely due to static assets (JS/CSS) 404ing. We have updated `vercel.json` with specific rewrite rules to fix this by mapping `/assets/` to `/frontend/assets/`.

## Project Structure Notes for Vercel
*   **vercel.json**: This file tells Vercel to treat `backend/server.js` as a serverless function and build `frontend` as a static site.
*   **server.js**: Was modified to export the app for Vercel.
