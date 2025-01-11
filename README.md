# Project Documentation

## Overview

This project is a highly customizable portfolio builder using **Next.js** and **Tailwind CSS**. It supports dynamic themes, allowing developers to contribute new themes easily. The application is containerized using **Docker** for streamlined development and deployment.

---

## Project Structure

```
├── docker
│   └── dockerfile             # Docker configuration
├── docker-compose.yaml        # Docker Compose file
├── next.config.ts             # Next.js configuration
├── public                     # Public assets
├── src
│   └── app
│       ├── components         # Shared components
│       ├── themes             # Theme-specific logic
│       ├── ThemeLoader.tsx    # Dynamic theme loader
│       ├── routes.ts          # Centralized route management
│       ├── layout.tsx         # Root layout
│       ├── page.tsx           # Root page for `/`
│       └── themesConfig.json  # Global theme configurations
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

---

## Features

1. **Dynamic Themes**:

   - Themes are stored in the `src/app/themes/` directory.
   - Each theme contains:
     - `Layout.tsx`: Theme-specific layout.
     - `style.css`: Theme-specific styles.
     - `config.json`: Configuration file for the theme.

2. **Centralized Routing**:

   - Routes are managed via `routes.ts` for consistency across themes.

3. **Containerized Environment**:
   - Docker is used for both development and production environments.

---

## Setting Up the Project

### Prerequisites

- Node.js v16+
- Docker & Docker Compose

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build the production app:
   ```bash
   npm run build
   npm run start
   ```

### Running with Docker

1. Build and run the container:
   ```bash
   docker-compose up --build
   ```
2. Access the app at `http://localhost`.

---

## Adding a New Theme

1. Create a new folder under `src/app/themes/` (e.g., `src/app/themes/theme2`).
2. Add the following files:

   - `Layout.tsx`: Define the layout and structure.
   - `style.css`: Add custom styles.
   - `config.json`: Define the theme metadata.

   Example `config.json`:

   ```json
   {
     "name": "Theme 2",
     "description": "A modern, minimalistic theme."
   }
   ```

3. Update `themesConfig.json`:

   ```json
   [
     {
       "name": "Theme 2",
       "path": "theme2"
     }
   ]
   ```

4. Add any additional pages specific to the theme in the `pages` directory within the theme folder.

---

## Deployment

1. Build the production image:

   ```bash
   docker build -t portfolio-builder .
   ```

2. Run the container:
   ```bash
   docker run -p 80:3000 portfolio-builder
   ```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your theme:
   ```bash
   git checkout -b add-my-theme
   ```
3. Add your theme and update the necessary files.
4. Submit a pull request with a description of your changes.

---

## Troubleshooting

### Common Issues

1. **404 Errors**:

   - Ensure all routes are correctly defined in `routes.ts`.

2. **Styles Not Loading**:
   - Verify the `style.css` path in your theme folder.

---

## Security

For any security-related issues, please contact the project maintainer at [hariupreti1995@gmail.com](mailto:hariupreti1995@gmail.com).

---

---

## Follow Us

Follow the project and maintainers on LinkedIn for updates and collaboration opportunities:
[LinkedIn Profile](https://www.linkedin.com/in/hari-upreti/)

For more information or questions, feel free to contact the project maintainer.
