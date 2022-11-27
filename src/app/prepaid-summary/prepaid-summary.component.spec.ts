import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidSummaryComponent } from './prepaid-summary.component';

describe('PrepaidSummaryComponent', () => {
  let component: PrepaidSummaryComponent;
  let fixture: ComponentFixture<PrepaidSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepaidSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
