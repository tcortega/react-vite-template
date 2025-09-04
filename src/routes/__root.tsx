import { DefaultErrorComponent } from "@/shared/ui/error-boundary";
import { NotFoundComponent } from "@/shared/ui/not-found";
import { PendingComponent } from "@/shared/ui/pending";
import { RootLayout } from "@/shared/ui/root-layout";
import { createRootRouteWithContext } from "@tanstack/react-router";

export interface RouterContext {
  breadcrumb?: {
    title: string;
  };
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  errorComponent: DefaultErrorComponent,
  notFoundComponent: NotFoundComponent,
  pendingComponent: PendingComponent,
});
