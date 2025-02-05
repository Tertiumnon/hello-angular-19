import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsConcatMapComponent } from './rxjs-concat-map.component';

describe('RxjsConcatMapComponent', () => {
  let component: RxjsConcatMapComponent;
  let fixture: ComponentFixture<RxjsConcatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsConcatMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
