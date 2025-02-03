# Campaign Juggler

Campaign Juggler is a web application for managing email campaigns. This project is built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Himanshu151281/campaign-juggler.git
    cd campaign-juggler
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

## Running the Project

1. **Start the development server:**

    ```sh
    npm run dev
    ```

    This will start the development server on http://localhost:8080.

2. **Build the project:**

    ```sh
    npm run build
    ```

    This will create a production build of the project.

3. **Preview the production build:**

    ```sh
    npm run preview
    ```

    This will start a local server to preview the production build.

## Project Structure

```
campaign-juggler/
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── CampaignCard.tsx
│   │   ├── CampaignForm.tsx
│   │   ├── CampaignTable.tsx
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── ...
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   ├── index.css
│   ├── lib/
│   │   ├── storage.ts
│   │   ├── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   ├── vite-env.d.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to lint the codebase.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vite**: A fast build tool and development server.
- **Radix UI**: A set of accessible and customizable UI components.
- **React Hook Form**: A library for managing form state in React.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Lucide React**: A collection of simple and beautiful SVG icons.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React.
- **Sonner**: A library for creating toast notifications.