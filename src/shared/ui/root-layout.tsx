import { Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { env } from "../env";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

const TanStackQueryDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : lazy(() =>
        import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        })),
      );

export function RootLayout() {
  return (
    <>
      <Helmet>
        <title>React Template</title>
        <meta
          name="description"
          content="Modern React template with TypeScript, Vite, TanStack Router and React Query"
        />
      </Helmet>
      <div className="min-h-screen">
        <main id="main-content">
          <Outlet />
          {env.DEV && (
            <Suspense>
              <TanStackRouterDevtools />
              <TanStackQueryDevtools />
            </Suspense>
          )}
        </main>
      </div>
    </>
  );
}
