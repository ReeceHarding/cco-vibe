# CCO Vibe - Custom Software Development Agency

A modern web application for CCO Vibe, showcasing our custom software development services with a focus on AI-powered solutions, rapid delivery, and client ownership.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) to see the application.

## Project Structure

```
CCO-Vibe/
├── app/              # Next.js app directory
│   ├── about/        # About page
│   ├── services/     # Services page
│   └── page.tsx      # Homepage
├── components/       # Reusable components
│   └── ui/          # UI components
├── docs/            # Documentation
│   ├── frontend.md  # Frontend style guide ⭐
│   └── *.md         # Other documentation
├── lib/             # Utility functions
└── public/          # Static assets
    ├── images/      # Image assets
    └── videos/      # Video content
```

## Frontend Style Guide

We maintain a comprehensive style guide that documents all design patterns, components, and best practices used throughout the application.

**📖 View the style guide: [docs/frontend.md](docs/frontend.md)**

The style guide includes:
- Color system and typography
- Component library with code examples
- Animation and interaction patterns
- Responsive design guidelines
- Best practices for consistent UI

## Key Features

- **Modern Design**: Purple-centric theme with glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Next.js 15 and optimized for performance
- **Accessible**: Following WCAG guidelines
- **Type-Safe**: Written in TypeScript

## Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Language**: TypeScript
- **Package Manager**: npm

## Development Guidelines

1. **Follow the Style Guide**: Always refer to `docs/frontend.md` for design patterns
2. **Component First**: Build reusable components in `components/`
3. **Type Safety**: Use TypeScript for all new code
4. **Mobile First**: Design for mobile, then enhance for desktop
5. **Performance**: Keep bundle sizes small and use lazy loading

## Deployment

The application is configured to run on port 3002 by default. For production deployment, use:

```bash
npm run build
npm start
```

## Contributing

When contributing to this project:
1. Follow the patterns established in the style guide
2. Test on multiple screen sizes
3. Ensure accessibility standards are met
4. Keep performance in mind

## License

© 2024 CCO Vibe. All rights reserved.
