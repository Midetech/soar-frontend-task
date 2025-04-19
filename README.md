# Soar Frontend Task

A modern web application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.1
- **Language**: TypeScript
- **Runtime**: Node.js
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 4
- **State Management**: SWR
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI
- **Charts**: Chart.js
- **Animation**: Framer Motion

## 📁 Project Structure

```
src/
├── app/           # Next.js app router pages and layouts
├── components/    # Reusable UI components
├── constants/     # Application constants and configuration
├── interfaces/    # TypeScript interfaces and types
├── lib/          # Utility functions and helpers
└── services/     # API services and data fetching logic
```

## 🛠️ Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

## ⚙️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone [https://github.com/Midetech/soar-frontend-task.git]
   cd soar-frontend-task
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Development

- The project uses Turbopack for faster development builds
- ESLint is configured for code quality
- TypeScript is strictly enforced
- Tailwind CSS is used for styling with PostCSS

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🔧 Key Dependencies

- **UI Components**:

  - Radix UI primitives
  - Lucide React icons
  - Class Variance Authority for component variants

- **Data Management**:

  - SWR for data fetching
  - Axios for HTTP requests

- **Form Handling**:

  - React Hook Form
  - Zod for schema validation

- **Charts & Visualization**:
  - Chart.js
  - React Chart.js 2

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Tailwind Merge for class name management
- TW Animate CSS for animations

## 🔒 Type Safety

- TypeScript for type checking
- Zod for runtime type validation
- Strict TypeScript configuration

## 📝 Assumptions

1. Modern browser support (ES6+)
2. Node.js environment for development
3. API endpoints are available and properly configured
4. Environment variables are properly set up for API keys and configurations

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

[Add your license information here]

## 🚨 Troubleshooting

### Build Issues

If you encounter build errors related to Radix UI components, ensure you're using the correct versions:

1. React and React DOM should be version 18.2.0
2. Type definitions (@types/react and @types/react-dom) should match React version
3. Run `npm install` or `yarn install` after version changes

### Common Issues

1. **Radix UI Compatibility**: The project uses React 18.2.0 for better compatibility with Radix UI components. Using React 19 may cause build errors.

2. **TypeScript Errors**: If you encounter TypeScript errors, ensure all type definitions are properly installed and match the React version.

3. **Build Failures**: If the build fails, try:
   - Clearing the `.next` directory
   - Running `npm install` or `yarn install` again
   - Checking for version mismatches in package.json
