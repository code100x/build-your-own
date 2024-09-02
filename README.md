# Build Your Own X

## Overview

The goal of this project is to create a robust platform where users can build various "Build Your Own X" projects using multiple programming languages.

## Key Features

1. **Documentation Templates**

   - Provide detailed, language-specific documentation templates for each "Build Your Own X" project.
   - Support multiple languages such as Python, JavaScript, Go, Ruby, and more.

2. **Private Git Repositories**

   - Host projects in private Git repositories to ensure secure and isolated environments.
   - Repositories named with unique project and user identifiers (e.g., `project-<project-id>-user-<user-id>`).

3. **User Workflow**

   - Users clone their assigned repositories to start working on projects.
   - Make incremental commits as they progress, following the documentation steps.
   - Push changes to the remote repository regularly to track progress.

4. **Automated Testing & Real-time Feedback**
   - Run automated tests after every commit to validate progress.
   - Provide real-time feedback using WebSockets or polling to indicate pass/fail status of each step.
   - Use visual indicators for easy tracking of progress and status.

## Architecture

### 1. Monorepo Structure with Turborepo

- **Monorepo Tooling:** Use **Turborepo** to manage the monorepo, which will host both frontend and backend projects. This setup will facilitate shared configurations, faster build times, and easier dependency management.

### 2. Frontend: React Application

- **Framework:** React with Vite
- **State Management:** Zustand and React Query for data fetching and state management.
- **UI Library:** Tailwind CSS + ShadCN for styling components.
- **Routing:** React Router for routing needs.
- **Testing:** Jest and React Testing Library for unit and integration tests.
- **Build and Dev:** Use Turborepo to run build and development tasks efficiently.

### 3. Backend: Express Application

- **Framework:** Express.js for handling HTTP requests and routing.
- **Database:** Prisma ORM for database interactions (PostgreSQL as the database).
- **Authentication:** Passport.js with Google and Github OAuth for authentication.
- **Middleware:** Include common middleware for logging, error handling, and security.
- **Testing:** Use Jest for backend testing.
- **Build and Dev:** Integrated with Turborepo for streamlined development.

## Setup and Configuration

### 1. TypeScript Configuration

- **Request:** Add TypeScript configurations to both frontend and backend projects to enable strong typing and better developer experience.
  - Configure TypeScript in the root of the monorepo for shared settings.
  - Specific `tsconfig.json` files for React and Express apps for tailored configurations.

### 2. ESLint and Prettier Configuration

- **Request:** Add Eslint and Prettier as a common package to enable strong linting and better developer experience.
  - Specific eslint and prettier config files for React and Express apps for tailored configurations .

### 3. Tailwind CSS Configuration

- **Request:** Set up Tailwind CSS configuration as a separate package to maintain a consistent design system across projects.
  - Centralize `tailwind.config.js` in a shared package within the monorepo.
  - Ensure that both frontend apps and UI components can import and utilize the same Tailwind setup.

### 4. ShadCN UI Library

- **Request:** Create a separate package for ShadCN UI components to promote reuse and consistency.
  - Develop shared React components with ShadCN, stored in a `ui` package.
  - Ensure these components are easily importable into any React application within the monorepo.

### 5. Database Setup

- **Request:** Configure a separate package for database interactions using Prisma.
  - Define the database schema and migrations within a dedicated `db` package.
  - Centralize Prisma configurations to streamline database setup and ensure consistent database access across different services.