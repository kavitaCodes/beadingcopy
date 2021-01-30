import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternDetailComponent } from './pattern-detail.component';

describe('PatternDetailComponent', () => {
  let component: PatternDetailComponent;
  let fixture: ComponentFixture<PatternDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
