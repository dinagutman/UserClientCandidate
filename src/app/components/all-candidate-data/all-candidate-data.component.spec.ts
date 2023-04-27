import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCandidateDataComponent } from './all-candidate-data.component';

describe('AllCandidateDataComponent', () => {
  let component: AllCandidateDataComponent;
  let fixture: ComponentFixture<AllCandidateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCandidateDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCandidateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
