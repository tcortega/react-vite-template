import { routeTree } from "@/routeTree.gen";
import { env } from "@/shared/env";
import { ErrorBoundary } from "@highlight-run/react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { H } from "highlight.run";
import { HelmetProvider } from "react-helmet-async";

const router = createRouter({
  routeTree,
});

const MINUTE = 1000 * 60;
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (env.VITE_HIGHLIGHT_PROJECT_ID) {
        H.consumeError(error as Error);
      }
    },
  }),
  defaultOptions: {
    queries: {
      gcTime: 5 * MINUTE,
    },
    mutations: {
      onError: (error) => {
        if (env.VITE_HIGHLIGHT_PROJECT_ID) {
          H.consumeError(error as Error);
        }
      },
    },
  },
});

if (env.VITE_HIGHLIGHT_PROJECT_ID) {
  H.init(env.VITE_HIGHLIGHT_PROJECT_ID, {
    environment: env.MODE,
    networkRecording: {
      enabled: true,
      recordHeadersAndBody: true,
    },
  });
}

export function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
