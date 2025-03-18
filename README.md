# Hilios AI - Website Clone

## Overview

This project is a clone of the Hilios AI website, built with React, TypeScript, and Vite. The website showcases a modern SaaS application for AI-powered customer support and knowledge management. The clone aims to replicate the UI/UX of the original Hilios AI website with a clean, responsive design.

## Features

- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop
- **Modern UI**: Built with Tailwind CSS and headless UI components
- **Animations**: Smooth animations and transitions using Framer Motion
- **Routing**: Multi-page application with React Router
- **Component Structure**: Well-organized component structure following best practices

## Pages

- **Home Page**: Main landing page featuring hero section, features, testimonials, and FAQ
- **Team Page**: About the team behind Hilios AI
- **Integration Page**: Information about integrations with other platforms
- **Contact Page**: Contact form and information
- **Blog Page**: Blog listing with articles
- **Blog Detail Page**: Individual blog article pages

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS for utility-first styling
- **Routing**: React Router v7
- **Animation**: Framer Motion
- **Icons**: Hero Icons and Lucide React
- **UI Components**: Headless UI
- **Code Quality**: ESLint and TypeScript for type checking

## Component Breakdown

### Layout Components

- **Header**: Navigation bar with responsive mobile menu
- **Footer**: Website footer with links and information
- **Hero**: Main landing section with animated tabs and video modal
- **Features**: Showcase of key product features
- **WhyChoose**: Section explaining the advantages of the product
- **Testimonials**: Customer testimonials section
- **FAQ**: Frequently asked questions with expandable answers
- **MoreFeatures**: Additional feature highlights
- **EnterpriseFeatures**: Features targeted at enterprise users
- **Contact**: Contact form component

### UI Components

- Various reusable UI components like buttons, cards, modals, etc.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd clone-hilios-v2
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```
npm run build
# or
yarn build
```

## Scripts

- `dev`: Start the development server
- `build`: Build the production-ready application
- `lint`: Run ESLint to check for code quality issues
- `preview`: Preview the production build locally

## Project Structure

```
├── public/            # Public assets
├── src/
│   ├── assets/        # Project assets (images, etc.)
│   ├── components/    # Reusable components
│   │   ├── layout/    # Layout components
│   │   ├── ui/        # UI components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   ├── index.css      # Global styles
├── index.html         # HTML template
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript configuration
```

## License

This project is intended for educational purposes only. The original design and concept belong to Hilios AI.

## Acknowledgements

- This project is a non-commercial clone of the Hilios AI website for educational purposes.
- Thanks to the creators of the libraries and tools used in this project.
