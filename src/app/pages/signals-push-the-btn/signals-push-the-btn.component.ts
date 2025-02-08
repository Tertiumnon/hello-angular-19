import {
  Component,
  computed,
  ElementRef,
  signal,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-signals-push-the-btn",
  templateUrl: "./signals-push-the-btn.component.html",
  styleUrl: "./signals-push-the-btn.component.css",
})
export class SignalsPushTheBtnComponent {
  @ViewChild("exponentInput") exponentInput: ElementRef | undefined;
  exponent = signal(2);
  counter = signal(0);
  counterPow = computed(() => this.counter() ** this.exponent());
  counterLog = computed(() => Math.log(this.counter()));
  counterSqr = computed(() => Math.sqrt(this.counter()));

  onExponentChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    if (val === "" || Number(val) <= 0) {
      if (this.exponentInput) {
        this.exponentInput.nativeElement.value = this.exponent();
      }
    } else {
      this.exponent.set(Number(val));
    }
  }

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.update((c) => c - 1);
  }
}
