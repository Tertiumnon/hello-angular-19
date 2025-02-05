import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushTheBtnComponent } from './push-the-btn.component';

describe('PushTheBtnComponent', () => {
  let component: PushTheBtnComponent;
  let fixture: ComponentFixture<PushTheBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushTheBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushTheBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
