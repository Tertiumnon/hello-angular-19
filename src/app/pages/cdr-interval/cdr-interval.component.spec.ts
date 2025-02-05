import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrIntervalComponent } from './cdr-interval.component';

describe('CdrIntervalComponent', () => {
  let component: CdrIntervalComponent;
  let fixture: ComponentFixture<CdrIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdrIntervalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdrIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
