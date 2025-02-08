import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from "@angular/core";

@Component({
  selector: "app-push-the-btn",
  imports: [],
  templateUrl: "./push-the-btn.component.html",
  styleUrl: "./push-the-btn.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushTheBtnComponent {
  counter = 0;
  cdr = inject(ChangeDetectorRef);

  increment() {
    this.counter++;
    this.cdr.detectChanges();
  }
}
