import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "push-the-btn",
    loadComponent: () =>
      import(
        "./pages/push-the-btn/push-the-btn.component"
      ).then((c) => c.PushTheBtnComponent),
  },
  {
    path: "signals/push-the-btn",
    loadComponent: () =>
      import(
        "./pages/signals-push-the-btn/signals-push-the-btn.component"
      ).then((c) => c.SignalsPushTheBtnComponent),
  },
  {
    path: "rxjs/push-the-btn",
    loadComponent: () =>
      import("./pages/rxjs-push-the-btn/rxjs-push-the-btn.component").then(
        (c) => c.RxjsPushTheBtnComponent,
      ),
  },
  {
    path: "rxjs/concat",
    loadComponent: () =>
      import("./pages/rxjs-concat/rxjs-concat.component").then(
        (c) => c.RxjsConcatComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
