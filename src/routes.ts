import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";
import Home from "./routes/Home";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/About",
    component: lazy(() => import("./routes/About")),
  },
  {
    path: "/Posts",
    component: lazy(() => import("./routes/Posts/Home")),
  },
  {
    path: "/Posts/:id",
    component: lazy(() => import("./routes/Posts/Posts")),
  },
];
