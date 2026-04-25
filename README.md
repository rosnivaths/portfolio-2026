# ROS Sopheak Portfolio

This is a high-performance, single-page personal portfolio for ROS Sopheak, designed with React and Tailwind CSS.

## Features
- **Modern UI:** "Digital-Modern" dark theme with glassmorphism and smooth scroll animations.
- **Client-Side Only:** No server-side dependencies.
- **Responsive:** Flawless layout across mobile, tablet, and desktop devices.
- **PWA Integration:** Installable on mobile phones with offline mode support (aiming for ≥80 Lighthouse score).
- **PDF Export:** Allows users to download the resume as `ROSSopheak_Final.pdf`.

## Technology Stack
- React
- Tailwind CSS
- Vite
- Vite PWA Plugin
- html2pdf.js

## Project Setup & Running Locally

Since this project was generated without a local Node.js environment, here are instructions on how to install dependencies and run the project once you clone it onto a machine with Node.js installed.

1. **Install Node.js:** Make sure you have Node.js (version 18+) installed.
2. **Install Dependencies:** Run the following command in the project directory:
   ```bash
   npm install
   ```
3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
4. **Build for Production:**
   ```bash
   npm run build
   ```

## PWA Documentation

This project utilizes `vite-plugin-pwa` to turn the application into a Progressive Web App (PWA).
- **Service Worker:** A service worker is automatically generated to cache assets for offline mode.
- **Manifest:** A `manifest.json` is generated using the config in `vite.config.js` to ensure the application is installable on mobile devices.
- **Icons:** Ensure that the icons (`pwa-192x192.png`, `pwa-512x512.png`, `apple-touch-icon.png`, `masked-icon.svg`, and `favicon.ico`) are present in the `public/` directory for full installability. *Note: You will need to add these image files to your `public/` directory for the manifest to be valid and the PWA to be fully installable.*

## Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.
The workflow configuration can be found at `.github/workflows/deploy.yml`. When you push to the `main` or `master` branch, the GitHub Action will automatically build the React application and deploy the `dist` folder to GitHub Pages.

### Setting up GitHub Pages
1. Go to your repository **Settings**.
2. Navigate to the **Pages** section.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The provided action will handle the rest on your next push.
