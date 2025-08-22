# Personal Portfolio Web Application

## Overview

This is a professional personal portfolio web application built for Abhishek Chauhan, a Cloud & DevOps Engineer. The application showcases his professional experience, technical skills, certifications, and provides a contact form for potential employers or clients. The portfolio features a modern, responsive design built with React and TailwindCSS, emphasizing clean aesthetics and smooth user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a single-page application (SPA) pattern using React with TypeScript. The frontend is structured as a portfolio showcase with multiple sections rendered on a single page, utilizing smooth scrolling navigation between sections. The component architecture is modular, with each portfolio section (Hero, About, Experience, Skills, Certifications, Contact) implemented as separate React components.

The UI framework leverages shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable design components. TailwindCSS handles all styling with a custom design system featuring CSS variables for consistent theming and color schemes.

### Backend Architecture  
The backend implements a REST API using Express.js with TypeScript, following a minimal server setup focused on handling contact form submissions. The server architecture uses middleware for request logging, JSON parsing, and error handling. Route handling is centralized in a dedicated routes file, separating API endpoints from server configuration.

Data validation is implemented using Zod schemas, ensuring type safety and proper validation of contact form submissions before processing.

### Data Storage Solutions
The application uses a hybrid storage approach. The primary storage is in-memory using a Map-based storage implementation for simplicity and development ease. However, the architecture is prepared for PostgreSQL integration with Drizzle ORM, as evidenced by the database schema definitions and Drizzle configuration files.

The database schema defines tables for users and contact messages, with proper typing and validation schemas generated using drizzle-zod for seamless integration between database models and API validation.

### Component Organization
The UI components are organized following the shadcn/ui pattern with a clear separation between reusable UI primitives (buttons, inputs, cards) and application-specific components (portfolio sections). The component structure includes:
- UI primitives in `/components/ui/` directory
- Application components in `/components/` directory  
- Pages in `/pages/` directory
- Shared utilities and configurations

### Build and Development Setup
The application uses Vite as the build tool for fast development and optimized production builds. The development environment includes hot module replacement, TypeScript checking, and error overlays. The build process generates optimized static assets with proper asset organization for deployment.

### Styling and Design System
TailwindCSS provides utility-first styling with a custom configuration extending the default theme. The design system includes custom CSS variables for colors, shadows, and spacing, enabling consistent theming throughout the application. The portfolio features a professional color scheme with primary blues, accent greens, and neutral grays.

## External Dependencies

### UI and Styling
- **React & TypeScript**: Core frontend framework with type safety
- **TailwindCSS**: Utility-first CSS framework for styling and responsive design
- **shadcn/ui**: Component library built on Radix UI primitives for accessible components
- **Radix UI**: Low-level UI primitives for building accessible design systems
- **Lucide React**: Icon library providing consistent iconography
- **React Icons**: Additional icon set for brand and social media icons

### Backend and API
- **Express.js**: Web framework for building REST API endpoints
- **Drizzle ORM**: Type-safe ORM for database operations and schema management
- **Zod**: Schema validation library for type-safe data validation
- **@neondatabase/serverless**: Database adapter for serverless PostgreSQL connections

### Development and Build Tools
- **Vite**: Fast build tool and development server with HMR support
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool with autoprefixer for vendor prefixes
- **tsx**: TypeScript execution engine for development server

### State Management and Data Fetching
- **TanStack Query**: Powerful data fetching and caching library for API requests
- **Wouter**: Lightweight client-side routing library for navigation

### Form Handling and Validation
- **React Hook Form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation schemas

### Database and Storage
- **PostgreSQL**: Primary database for production (via Neon serverless)
- **Drizzle Kit**: Database migration and schema management tool
- **connect-pg-simple**: PostgreSQL session store for potential session management