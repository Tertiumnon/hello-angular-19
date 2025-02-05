import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPushTheBtnComponent } from './rxjs-push-the-btn.component';

describe('RxjsPushTheBtnComponent', () => {
  let component: RxjsPushTheBtnComponent;
  let fixture: ComponentFixture<RxjsPushTheBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsPushTheBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsPushTheBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
