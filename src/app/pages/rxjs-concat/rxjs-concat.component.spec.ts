import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsConcatComponent } from './rxjs-concat.component';

describe('RxjsConcatComponent', () => {
  let component: RxjsConcatComponent;
  let fixture: ComponentFixture<RxjsConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsConcatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
