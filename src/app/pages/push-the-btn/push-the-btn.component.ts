import { Component } from "@angular/core";

@Component({
  selector: "app-push-the-btn",
  imports: [],
  templateUrl: "./push-the-btn.component.html",
  styleUrl: "./push-the-btn.component.css",
})
export class PushTheBtnComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
}
