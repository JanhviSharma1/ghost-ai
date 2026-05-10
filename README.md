# AI-Powered Collaborative System Architect
Ghost Arc is an AI-powered collaborative architecture planning platform for software teams. Users can describe systems in plain English, and a Gemini-powered AI agent autonomously generates real-time technical architecture diagrams on a multiplayer canvas. Teams can collaboratively refine the generated system design, then convert the final architecture into comprehensive downloadable technical specifications.

## Features
- AI-generated architecture diagrams from natural language prompts
- Real-time multiplayer collaboration with synchronized canvas editing
- Live AI node and edge generation using Gemini + Trigger.dev
- AI-powered technical specification generation
- Interactive React Flow-based architecture canvas
- Auto-saving collaborative workspaces
- Downloadable Markdown technical specifications
- Secure authentication and protected collaboration rooms
- Shareable architecture project URLs
- Custom node editing, resizing, and color customization

## Tech Stack
Frontend & Frameworks
### Next.js
- Next.js is a production-ready React framework that offers server-side rendering, static site generation, and powerful routing features. It streamlines the development of full-stack web applications by providing a comprehensive ecosystem for performance optimization, data fetching, and API development.

### React
- React is a popular JavaScript library for building declarative and component-based user interfaces. It excels at creating reusable UI components and efficient state management, making it the standard choice for building dynamic and interactive single-page applications.

### TypeScript
- TypeScript is a strongly typed superset of JavaScript that adds static type definitions to your code. It significantly improves developer productivity and code reliability by catching errors during development, enhancing IDE support, and facilitating maintainability in large-scale projects.

Real-Time Collaboration
### Liveblocks
- Liveblocks is a real-time collaboration infrastructure that enables developers to build multiplayer experiences. It provides robust APIs for presence, shared state, and text synchronization, allowing you to easily add collaborative features like cursors, whiteboard tools, and shared document editing to your apps.

Authentication
### Clerk
- Clerk is a specialized authentication and user management platform for React and Next.js. It offers drop-in pre-built components for sign-in, sign-up, and profile management, while handling complex requirements like session management, multi-factor authentication, and organization hierarchies out of the box.

AI & Background Workflows
### Trigger.dev
- Trigger.dev is an open-source platform for orchestrating long-running background jobs and workflows. It allows developers to define jobs directly in their code that respond to webhooks, schedules, or events, handling retries, delays, and state management without the need for complex infrastructure.

### Google Gemini
- Google Gemini powers the AI architecture generation engine and technical specification generation workflows. It autonomously analyzes user prompts, generates architecture structures, and produces detailed technical documentation.

Database & ORM
### Prisma ORM
- Prisma ORM is a next-generation ORM for Node.js and TypeScript that simplifies database interactions. By providing a type-safe client generated from your schema, it makes querying your database intuitive, readable, and highly efficient, effectively eliminating common SQL-related runtime errors.

### PostgreSQL
- PostgreSQL is an advanced, open-source object-relational database system widely recognized for its reliability, extensibility, and standard compliance. It provides the persistent storage layer for your application, supporting complex queries, transactional integrity, and large-scale data handling.

Styling & UI
### Tailwind CSS
- Tailwind CSS is a utility-first CSS framework that enables rapid custom UI development. By utilizing low-level utility classes directly in your markup, it removes the need to switch between CSS and HTML files, allowing for highly consistent and responsive design systems.

### shadcn/ui
- shadcn/ui is a collection of beautifully designed, accessible, and reusable UI components that you can copy and paste directly into your projects. Built on top of Radix UI and Tailwind CSS, it grants you full control over your component code, avoiding the bloat of traditional component libraries.

Developer Experience
### CodeRabbit
- CodeRabbit is an AI-powered code review assistant that automates pull request analysis. It provides line-by-line feedback, suggests code improvements, summarizes changes, and helps maintain high code quality by integrating seamlessly into your git-based development workflow.
