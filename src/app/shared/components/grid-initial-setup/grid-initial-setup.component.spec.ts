import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInitialSetupComponent } from './grid-initial-setup.component';

describe('GridInitialSetupComponent', () => {
  let component: GridInitialSetupComponent;
  let fixture: ComponentFixture<GridInitialSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridInitialSetupComponent]
    });
    fixture = TestBed.createComponent(GridInitialSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
