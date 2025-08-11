import { routeTree } from "@/routeTree.gen";
import { ErrorBoundary } from "@highlight-run/react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { H } from "highlight.run";

const router = createRouter({
  routeTree,
});

const MINUTE = 1000 * 60;
const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      gcTime: 5 * MINUTE,
    },
  },
});

H.init(import.meta.env.VITE_HIGHLIGHT_PROJECT_ID, {
  environment: import.meta.env.MODE,
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
  },
});

export function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
