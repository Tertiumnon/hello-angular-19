import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () =>
      import("./pages/home/home.component").then((c) => c.HomeComponent),
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
