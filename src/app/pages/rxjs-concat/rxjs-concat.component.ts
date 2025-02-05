import { Component } from "@angular/core";
import { concat, Observable, of } from "rxjs";

@Component({
  selector: "app-rxjs-concat",
  imports: [],
  templateUrl: "./rxjs-concat.component.html",
  styleUrl: "./rxjs-concat.component.css",
})
export class RxjsConcatComponent {
  result$: Observable<string> = new Observable<string>();

  run() {
    const series1$ = of('a', 'b');
    const series2$ = of('x', 'y'); 
    const result$ = concat(series1$, series2$);
    result$.subscribe(console.log);
  }
}
