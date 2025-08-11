import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

export interface RouterContext {
  breadcrumb?: {
    title: string;
  };
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
});
