import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from "@angular/core";
import { BehaviorSubject, interval, Subscription } from "rxjs";
import { SsrService } from "../../services/ssr/ssr.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-rxjs-what-time",
  imports: [CommonModule],
  templateUrl: "./rxjs-what-time.component.html",
  styleUrl: "./rxjs-what-time.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsWhatTimeComponent {
  pageTime$ = new BehaviorSubject<number>(0);
  time$ = new BehaviorSubject<string>(this.getLocalTime());
  intervalSub: Subscription | undefined;
  cdr = inject(ChangeDetectorRef);
  ssrSvc = inject(SsrService);

  ngOnInit() {
    if (this.ssrSvc.isBrowser) {
      this.intervalSub = interval(1000).subscribe(() => {
        this.time$.next(this.getLocalTime());
        this.pageTime$.next(this.pageTime$.value + 1);
        this.cdr.detectChanges();
      });
    }
  }

  ngOnDestroy() {
    this.intervalSub?.unsubscribe();
  }

  getLocalTime() {
    return new Date().toLocaleTimeString();
  }
}
