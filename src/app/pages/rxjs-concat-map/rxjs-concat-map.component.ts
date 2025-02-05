import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-concat-map',
  imports: [],
  templateUrl: './rxjs-concat-map.component.html',
  styleUrl: './rxjs-concat-map.component.css'
})
export class RxjsConcatMapComponent {
  httpClient$ = inject(HttpClient);

  ngOnInit() {
    // this.form.valueChanges
    // .pipe(
    //     concatMap(formValue => this.httpClient$.put(`/api/course/${courseId}`, 
    //                                          formValue))
    // )
    // .subscribe(
    //    saveResult =>  ... handle successful save ...,
    //     err => ... handle save error ...      
    // );
  }

  run() {}
}
