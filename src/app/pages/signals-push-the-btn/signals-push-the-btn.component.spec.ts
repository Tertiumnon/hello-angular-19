import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsPushTheBtnComponent } from './signals-push-the-btn.component';

describe('SignalsPushTheBtnComponent', () => {
  let component: SignalsPushTheBtnComponent;
  let fixture: ComponentFixture<SignalsPushTheBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsPushTheBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsPushTheBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
