# Contributing to Talk Timer

Thank you for considering contributing to Talk Timer! Your help is greatly appreciated.

## Getting Started

To get started with development, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone your fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/talk-timer.git
   ```
3. **Install dependencies**: Navigate to the project directory and install the dependencies. We use `npm` in this example, but you can use `yarn`, `pnpm`, or `bun` as well.
   ```bash
   cd talk-timer
   npm install
   ```
4. **Run the development server**: Start the development server to see your changes live.
   ```bash
   npm run dev
   ```

## Development Workflow

1. **Create a branch**: Create a new branch for your feature or bugfix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make changes**: Make your changes to the codebase.
3. **Test your changes**: Ensure that your changes work as expected and do not break existing functionality.
4. **Commit your changes**: Commit your changes with a clear and descriptive commit message.
   ```bash
   git commit -m "Add feature: description of your feature"
   ```
5. **Push your changes**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a pull request**: Create a pull request from your forked repository to the main repository.
7. **Review and merge**: Wait for your pull request to be reviewed and merged. Make any necessary changes if requested.

## Code Style

Please follow the existing code style and use the provided linters. Run the following command to check for linting errors:

```bash
npm run lint
```

## Check for Build and Start

Please check if the project builds and starts correctly before creating a pull request. Run the following command to build and start the project:

```bash
npm run build
npm start
```
