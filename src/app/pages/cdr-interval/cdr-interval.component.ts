import { isPlatformBrowser } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  PLATFORM_ID,
  inject,
} from "@angular/core";

@Component({
  selector: "app-cdr-interval",
  imports: [],
  templateUrl: "./cdr-interval.component.html",
  styleUrl: "./cdr-interval.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdrIntervalComponent {
  num = 1;
  cdr = inject(ChangeDetectorRef);
  isBrowser: boolean;
  platformId = inject(PLATFORM_ID);
  intervalTimer: string | number | NodeJS.Timeout | undefined;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.intervalTimer = setInterval(() => {
        this.num = this.num + 1;
        this.cdr.markForCheck();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      clearInterval(this.intervalTimer);
    }
  }
}
