# Talk Timer ⚡

A simple, fullscreen-capable timer application designed for tracking talk durations with visual feedback. Perfect for lightning talks, presentations, and Toastmasters meetings!

Inspired by [Toastmasters Timer Zoom Backgrounds](https://www.toastmasters.org/resources/timer-zoom-backgrounds), this app provides clear visual cues to help speakers stay on time.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses [shadcn/ui](https://ui.shadcn.com/) for the UI components.

## Features

- **Visual Color Transitions**: Timer changes colors based on configurable time thresholds
  - 🟢 Green: Initial state (before warning threshold)
  - 🟡 Yellow: Warning state (approaching time limit)
  - 🔴 Red: Overtime state (exceeded time limit)
  
- **Progress Bar**: White progress bar at the top of the screen shows elapsed time relative to the red threshold

- **Fullscreen Mode**: Toggle fullscreen mode for a distraction-free timer experience
  - Click the fullscreen button (maximize/minimize icon) in the footer controls
  - Use the keyboard shortcut **F** to quickly toggle fullscreen mode
  - Works across different browsers and devices

- **Configurable Settings**: Customize your timer experience
  - Set a custom talk title
  - Configure yellow threshold (warning time in seconds)
  - Configure red threshold (overtime time in seconds)
  
- **Auto-hiding Controls**: Footer controls automatically hide after 3 seconds of inactivity, reappearing on mouse movement

- **Document Title Updates**: Browser tab title shows elapsed time when the timer is running

## Usage

1. **Starting the Timer**: Click the Play button (▶️) in the footer controls
2. **Pausing the Timer**: Click the Pause button (⏸) while the timer is running
3. **Resetting the Timer**: Click the Reset button (↻) to set the timer back to 00:00
4. **Configuring Settings**: Click the Settings button (⚙️) to:
   - Change the talk title
   - Set the yellow threshold (warning time in seconds, default: 90 seconds)
   - Set the red threshold (overtime time in seconds, default: 120 seconds)
5. **Fullscreen Mode**: 
   - Click the Fullscreen button (⛶) or press **F** key
   - Press **Esc** or **F** key again to exit fullscreen

### Keyboard Shortcuts

- **F**: Toggle fullscreen mode (disabled when typing in input fields)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dnafication/talk-timer.git
   cd talk-timer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the timer.

The page auto-updates as you edit files. This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: Radix UI Icons and Lucide React

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── talk-timer.tsx    # Main timer component
│   ├── timer-display.tsx # Timer display component
│   ├── footer.tsx        # Footer with controls
│   └── progress-bar.tsx  # Progress bar component
├── lib/                   # Utility functions
│   └── utils.ts          # cn() utility for className merging
└── .github/              # GitHub configuration
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Related Resources

- [Toastmasters Timer Zoom Backgrounds](https://www.toastmasters.org/resources/timer-zoom-backgrounds) - The inspiration for this application

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is open source and available under the [MIT License](LICENSE).
