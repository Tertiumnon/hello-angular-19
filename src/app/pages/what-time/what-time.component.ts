import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject
} from "@angular/core";
import { SsrService } from "../../services/ssr/ssr.service";

@Component({
  selector: 'app-what-time',
  imports: [],
  templateUrl: './what-time.component.html',
  styleUrl: './what-time.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatTimeComponent {
  pageTime = 0;
  intervalTimer: string | number | NodeJS.Timeout | undefined;
  time = this.getLocalTime();
  cdr = inject(ChangeDetectorRef);
  ssrSvc = inject(SsrService);

  ngOnInit() {
    if (this.ssrSvc.isBrowser) {
      this.intervalTimer = setInterval(() => {
        this.time = this.getLocalTime();
        this.pageTime += 1;
        this.cdr.detectChanges();
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.ssrSvc.isBrowser) {
      clearInterval(this.intervalTimer);
    }
  }

  getLocalTime() {
    return new Date().toLocaleTimeString();
  }
}
