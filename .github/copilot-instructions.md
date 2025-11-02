# GitHub Copilot Instructions for Talk Timer

## Project Overview

Talk Timer is a simple, fullscreen-capable timer application designed for tracking talk durations with visual feedback. The timer changes colors (green → yellow → red) based on configurable time thresholds, making it ideal for lightning talks and presentations.

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
│   └── footer.tsx        # Footer with controls
├── lib/                   # Utility functions
│   └── utils.ts          # cn() utility for className merging
└── .github/              # GitHub configuration
```

## Code Style & Conventions

### TypeScript

- Use **strict mode** TypeScript
- Prefer type inference over explicit types where clear
- Use `interface` for component props
- Use descriptive variable and function names

### React Patterns

- Use **functional components** with hooks
- Mark client components with `'use client'` directive at the top of the file
- Use `useCallback` for memoized callbacks
- Use `useEffect` for side effects (timers, event listeners)
- Prefer named exports for components (except page.tsx which uses default export)

### Styling

- Use Tailwind CSS utility classes
- Use the `cn()` utility from `lib/utils.ts` for conditional className merging
- Follow the existing color scheme:
  - Green gradient for initial state
  - Yellow gradient for warning state
  - Red gradient for overtime state
- Use responsive design patterns when applicable

### Code Formatting

- **Indentation**: 2 spaces (no tabs)
- **Quotes**: Single quotes for strings
- **Semicolons**: No semicolons
- **Line width**: Keep lines reasonably short
- Run `npm run format` to auto-format code with Prettier

## Development Workflow

### Setup

```bash
npm install        # Install dependencies
npm run dev        # Start development server (http://localhost:3000)
```

### Quality Checks

```bash
npm run lint       # Run ESLint and Prettier checks
npm run format     # Auto-format code with Prettier
npm run build      # Build production bundle
npm start          # Start production server
```

### Before Committing

1. Ensure code passes linting: `npm run lint`
2. Verify build succeeds: `npm run build`
3. Test the application manually
4. Follow the contribution guidelines in CONTRIBUTING.md

## Key Features & Implementation Details

### Timer Logic

- Timer uses `setInterval` with 1-second increments
- State managed with React hooks (`useState`, `useEffect`)
- Time thresholds are configurable (default: 90s yellow, 120s red)

### Fullscreen Mode

- Toggle with the fullscreen button or keyboard shortcut (F key)
- Uses native Fullscreen API
- Tracks fullscreen state with `document.fullscreenElement`
- Keyboard shortcuts are disabled when user is typing in input fields

### UI Behavior

- Footer controls auto-hide after 3 seconds of inactivity
- Mouse movement resets the inactivity timer
- Document title updates with elapsed time when timer is running

## Component Guidelines

### shadcn/ui Components

- Located in `components/ui/`
- Built with Radix UI primitives
- Don't modify these files directly unless necessary
- Use `npx shadcn-ui@latest add <component>` to add new components

### Custom Components

- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks
- Props should be clearly typed with TypeScript interfaces
- Use descriptive prop names

## Testing Considerations

- Currently no automated tests exist
- Manual testing is required
- Test key user flows:
  - Starting/stopping/resetting timer
  - Fullscreen toggle (both button and keyboard)
  - Settings dialog (title and thresholds)
  - Color transitions at thresholds

## Common Tasks

### Adding a New Feature

1. Create or modify components in `components/`
2. Follow existing naming conventions (kebab-case for files)
3. Use TypeScript for type safety
4. Apply Tailwind CSS for styling
5. Test in development mode
6. Run lint and build checks

### Modifying Styling

- Edit Tailwind classes directly in components
- Use the `cn()` utility for conditional classes
- Reference `tailwind.config.ts` for theme configuration
- Check `components.json` for shadcn/ui configuration

### Adding Dependencies

- Use `npm install <package>` to add new dependencies
- Prefer well-maintained packages with TypeScript support
- Update package.json and package-lock.json

## Important Notes

- This is a client-side application (all components use 'use client')
- No server-side rendering or API routes currently
- No database or backend integration
- Optimized for modern browsers with Fullscreen API support

## Best Practices for AI Assistance

When working with Copilot:

- Provide context about which component you're working on
- Mention if you're adding a new feature or fixing a bug
- Specify if changes should be client-side only
- Reference existing patterns (e.g., "similar to the timer display component")
- Ask for TypeScript-first suggestions
- Request Tailwind CSS styling solutions
- Ensure suggestions maintain the existing code style (no semicolons, single quotes)
