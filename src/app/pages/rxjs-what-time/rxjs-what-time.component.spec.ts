import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWhatTimeComponent } from './rxjs-what-time.component';

describe('RxjsWhatTimeComponent', () => {
  let component: RxjsWhatTimeComponent;
  let fixture: ComponentFixture<RxjsWhatTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsWhatTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsWhatTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
