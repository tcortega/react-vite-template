# React Template

A modern, production-ready React template with TypeScript, Vite, TanStack Router, and React Query.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Router** - Type-safe routing with file-based routes
- **TanStack Query** - Server state management
- **Tailwind CSS** - Utility-first CSS
- **Zod** - Schema validation
- **React Helmet Async** - Document head management
- **Highlight** - Error monitoring (optional)
- **Bun** - Package manager and runtime

## Features

- File-based routing with automatic code splitting
- Type-safe environment variables with Zod validation
- Error boundaries and loading states at route level
- Development-only devtools for Router and React Query
- Git hooks with Husky and lint-staged
- ESLint with type-aware rules
- Prettier formatting
- EditorConfig for consistent coding styles
- VSCode settings for optimal development experience

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- Bun >= 1.2.0

### Installation

```bash
# Install dependencies
bun install

# Initialize git hooks
bun run prepare
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: Highlight.io project ID for error monitoring
VITE_HIGHLIGHT_PROJECT_ID=your_project_id
```

## Development

```bash
# Start dev server
bun run dev

# Type checking
bun run build

# Linting
bun run lint

# Preview production build
bun run preview
```

## Project Structure

```
src/
├── app/                 # Application entry and setup
│   ├── app.tsx         # Main app component with providers
│   └── main.tsx        # Entry point
├── features/           # Feature modules
│   └── home/          # Example feature
├── routes/            # File-based routes
│   ├── __root.tsx     # Root layout
│   └── index.tsx      # Home route
├── shared/            # Shared utilities
│   ├── api/          # API client (to be implemented)
│   ├── env.ts        # Environment validation
│   ├── hooks/        # Custom hooks
│   └── ui/           # Shared UI components
└── routeTree.gen.ts   # Auto-generated route tree
```

## Adding a New Feature

Use the feature generator script:

```bash
bun run new:feature
```

This will create a new feature module with the standard structure:

- `components/` - Feature-specific components
- `pages/` - Page components
- `hooks/` - Feature-specific hooks (optional)
- `api/` - Feature API calls (optional)

## Route Management

Routes are automatically generated from the `src/routes` directory using TanStack Router's file-based routing.

### Creating a New Route

1. Add a new file in `src/routes/`:

   ```typescript
   // src/routes/about.tsx
   import { createFileRoute } from "@tanstack/react-router";

   export const Route = createFileRoute("/about")({
     component: AboutPage,
   });
   ```

2. The route will be automatically available at `/about`

### Route-level Error Handling

Each route can define its own error, loading, and not-found components:

```typescript
export const Route = createFileRoute("/example")({
  component: ExamplePage,
  errorComponent: CustomErrorComponent,
  pendingComponent: CustomLoadingComponent,
  notFoundComponent: CustomNotFoundComponent,
});
```

## State Management

### Server State

Use TanStack Query for server state:

```typescript
import { useQuery } from "@tanstack/react-query";

function useUserData(userId: string) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  });
}
```

### Client State

For complex client state, consider using:

- React Context for cross-cutting concerns
- Component state for local UI state
- URL state via TanStack Router for shareable state

## Styling

This template uses Tailwind CSS v4 with the Vite plugin for optimal performance.

### Using Tailwind

```tsx
<div className="flex items-center justify-center p-4">
  <h1 className="text-2xl font-bold text-gray-900">Hello World</h1>
</div>
```

## Testing

Testing setup is not included but recommended libraries:

- Vitest for unit testing
- React Testing Library for component testing
- Playwright for E2E testing

## Deployment

### Build for Production

```bash
bun run build
```

The build output will be in the `dist/` directory.

### Environment-specific Builds

Use different `.env` files for different environments:

- `.env.development`
- `.env.production`
- `.env.staging`

## Contributing

1. Ensure your editor supports EditorConfig
2. Install recommended VSCode extensions
3. Follow the existing code style
4. Run linting before committing: `bun run lint`
5. Commits will automatically run lint-staged via Husky

## License

MIT
