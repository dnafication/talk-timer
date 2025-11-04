# Contributing to Talk Timer

Thank you for considering contributing to Talk Timer! Your help is greatly appreciated. This guide will help you get started with contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Testing Your Changes](#testing-your-changes)
- [Submitting Your Contribution](#submitting-your-contribution)

## Getting Started

To get started with development, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/your-username/talk-timer.git
   cd talk-timer
   ```

3. **Install dependencies**: Install the project dependencies. We use `npm` in this example, but you can use `yarn`, `pnpm`, or `bun` as well.
   ```bash
   npm install
   ```

4. **Run the development server**: Start the development server to see your changes live.
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Development Workflow

1. **Create a branch**: Create a new branch for your feature or bugfix.
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. **Make changes**: Make your changes to the codebase. Follow the [Code Style](#code-style) guidelines.

3. **Test your changes**: Ensure that your changes work as expected and do not break existing functionality. See [Testing Your Changes](#testing-your-changes) for details.

4. **Format your code**: Run the formatter to ensure consistent code style.
   ```bash
   npm run format
   ```

5. **Commit your changes**: Commit your changes with a clear and descriptive commit message.
   ```bash
   git add .
   git commit -m "Add feature: description of your feature"
   # or
   git commit -m "Fix: description of the bug fix"
   ```

6. **Push your changes**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a pull request**: Create a pull request from your forked repository to the main repository. Provide a clear description of your changes and any relevant context.

8. **Review and merge**: Wait for your pull request to be reviewed and merged. Make any necessary changes if requested by maintainers.

## Code Style

This project follows specific code style guidelines to maintain consistency:

### TypeScript

- **Strict mode enabled**: The project uses TypeScript with strict compiler options
- Use type inference where possible
- Use `interface` for component props
- Use descriptive variable and function names

### React Patterns

- Use **functional components** with hooks
- Mark client components with `'use client'` directive at the top of the file
- Use `useCallback` for memoized callbacks
- Use `useEffect` for side effects (timers, event listeners)

### Formatting

- **Indentation**: 2 spaces (no tabs)
- **Quotes**: Single quotes for strings
- **Semicolons**: No semicolons
- **Line width**: Keep lines reasonably short

### Styling

- Use **Tailwind CSS** utility classes
- Use the `cn()` utility from `lib/utils.ts` for conditional className merging
- Follow the existing color scheme (green → yellow → red gradients)

### Linting and Formatting

Please follow the existing code style and use the provided linters. Run the following commands before committing:

```bash
# Check for linting and formatting errors
npm run lint

# Auto-format code
npm run format
```

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **UI Library**: React 18
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Radix UI Icons and Lucide React
- **Build Tool**: Next.js built-in bundler

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components (button, input, dialog, label)
│   ├── talk-timer.tsx    # Main timer component
│   ├── timer-display.tsx # Timer display component
│   ├── footer.tsx        # Footer with controls
│   └── progress-bar.tsx  # Progress bar component
├── lib/                   # Utility functions
│   └── utils.ts          # cn() utility for className merging
└── .github/              # GitHub configuration
```

### Key Components

- **TalkTimer** (`components/talk-timer.tsx`): Main component that manages timer state and logic
- **TimerDisplay** (`components/timer-display.tsx`): Displays the timer and talk title
- **Footer** (`components/footer.tsx`): Contains control buttons and settings dialog
- **ProgressBar** (`components/progress-bar.tsx`): Shows progress at the top of the screen

## Testing Your Changes

Before creating a pull request, please ensure:

1. **The project builds successfully**:
   ```bash
   npm run build
   ```

2. **There are no linting errors**:
   ```bash
   npm run lint
   ```

3. **The application runs correctly**:
   ```bash
   npm run dev
   ```
   Then manually test the following:
   - Starting/stopping/resetting the timer
   - Fullscreen toggle (both button and keyboard shortcut)
   - Settings dialog (title and thresholds)
   - Color transitions at the configured thresholds
   - Progress bar functionality
   - Auto-hiding footer controls

4. **Your changes don't break existing functionality**: Test the entire application to ensure your changes don't negatively impact other features.

## Submitting Your Contribution

When submitting a pull request:

1. **Provide a clear title**: Use a descriptive title that summarizes your changes
2. **Write a detailed description**: Explain what changes you made and why
3. **Reference related issues**: If your PR addresses an issue, reference it (e.g., "Fixes #123")
4. **Include screenshots**: If your changes affect the UI, include before/after screenshots
5. **Be responsive**: Be prepared to respond to feedback and make requested changes

## Questions?

If you have any questions or need help, feel free to:
- Open an issue for discussion
- Comment on an existing issue
- Reach out to the maintainers

Thank you for contributing to Talk Timer! 🎉
