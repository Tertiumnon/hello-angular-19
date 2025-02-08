import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./rxjs-push-the-btn.component.html",
  styleUrl: "./rxjs-push-the-btn.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsPushTheBtnComponent {
  exponent = new FormControl(2);
  counter$ = new BehaviorSubject<number>(0);
  counterPow$ = new BehaviorSubject<number>(this.counter$.value ** 2);
  cdr = inject(ChangeDetectorRef);
  counterSub = this.counter$.subscribe(this.onCounterChange.bind(this));
  exponentSub = this.exponent.valueChanges.subscribe(this.onExponentChange.bind(this));

  ngOnDestroy() {
    this.counterSub.unsubscribe();
    this.exponentSub.unsubscribe();
  }

  onCounterChange() {
    this.counterPow$.next(this.counter$.value ** Number(this.exponent.value));
  }

  onExponentChange() {
    this.onCounterChange();
  }

  decrement() {
    if (this.counter$.value - 1 <= 0) return;
    this.counter$.next(this.counter$.value - 1);
    this.cdr.detectChanges();
  }

  increment() {
    this.counter$.next(this.counter$.value + 1);
    this.cdr.detectChanges();
  }
}
