import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { Observable, Subscription, fromEvent, map, startWith } from "rxjs";
import { SsrService } from "../../services/ssr/ssr.service";

@Component({
  selector: "app-rxjs-search",
  imports: [],
  templateUrl: "./rxjs-search.component.html",
  styleUrl: "./rxjs-search.component.css",
})
export class RxjsSearchComponent {
  @ViewChild("searchInp") searchInp: ElementRef | undefined;
  ssrSvc = inject(SsrService);
  searchText$: Observable<string> | undefined;
  searchTextSub: Subscription | undefined;

  ngOnInit() {
    if (this.ssrSvc.isBrowser) {
      this.initSearchText();
    }
  }

  ngOnDestroy() {
    this.searchTextSub?.unsubscribe();
  }

  initSearchText() {
    if (!this.searchInp) return;
    this.searchText$ = fromEvent<KeyboardEvent>(
      this.searchInp.nativeElement,
      "keyup",
    ).pipe(
      map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
      startWith(""),
    );
    this.searchTextSub = this.searchText$.subscribe(console.log);
  }
}
