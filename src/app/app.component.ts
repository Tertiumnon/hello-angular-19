import { Component, inject, signal } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { routes } from "./app.routes";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  headerS = signal("");
  router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const route = routes.find((r) => `/${r.path}` === event.url);
        const title = typeof route?.title === "string" ? route.title : "";
        this.headerS.set(title);
      }
    });
  }
}
