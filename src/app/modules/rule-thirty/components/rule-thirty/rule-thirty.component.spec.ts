import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleThirtyComponent } from './rule-thirty.component';

describe('RuleThirtyComponent', () => {
  let component: RuleThirtyComponent;
  let fixture: ComponentFixture<RuleThirtyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleThirtyComponent]
    });
    fixture = TestBed.createComponent(RuleThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
