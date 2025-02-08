import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    title: "Home",
    loadComponent: () =>
      import("./pages/home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "push-the-button",
    title: "Push The Button",
    loadComponent: () =>
      import("./pages/push-the-btn/push-the-btn.component").then(
        (c) => c.PushTheBtnComponent,
      ),
  },
  {
    path: "what-time",
    title: "What Time",
    loadComponent: () =>
      import("./pages/what-time/what-time.component").then(
        (c) => c.WhatTimeComponent,
      ),
  },
  {
    path: "rxjs/push-the-button",
    title: "RxJS Push The Button",
    loadComponent: () =>
      import("./pages/rxjs-push-the-btn/rxjs-push-the-btn.component").then(
        (c) => c.RxjsPushTheBtnComponent,
      ),
  },
  {
    path: "rxjs/what-time",
    title: "RxJS What Time",
    loadComponent: () =>
      import("./pages/rxjs-what-time/rxjs-what-time.component").then(
        (c) => c.RxjsWhatTimeComponent,
      ),
  },
  {
    path: "rxjs/concat",
    title: "RxJS Concat",
    loadComponent: () =>
      import("./pages/rxjs-concat/rxjs-concat.component").then(
        (c) => c.RxjsConcatComponent,
      ),
  },
  {
    path: "rxjs/search",
    title: "RxJS Search",
    loadComponent: () =>
      import("./pages/rxjs-search/rxjs-search.component").then(
        (c) => c.RxjsSearchComponent,
      ),
  },
  {
    path: "signals/push-the-button",
    title: "Signals Push The Button",
    loadComponent: () =>
      import(
        "./pages/signals-push-the-btn/signals-push-the-btn.component"
      ).then((c) => c.SignalsPushTheBtnComponent),
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
