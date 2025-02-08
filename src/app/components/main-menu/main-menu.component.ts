import { Component, signal } from "@angular/core";
import { Route, RouterLink, RouterLinkActive } from "@angular/router";
import { routes } from "../../app.routes";

@Component({
  selector: "app-main-menu",
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./main-menu.component.html",
  styleUrl: "./main-menu.component.css",
})
export class MainMenuComponent {
  itemS = signal<Route[]>(routes.filter((r) => r.path !== "**"));
}
