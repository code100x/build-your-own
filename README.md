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
- **Testing:** Use Mocha and Chai for backend testing.
- **Build and Dev:** Integrated with Turborepo for streamlined development.
