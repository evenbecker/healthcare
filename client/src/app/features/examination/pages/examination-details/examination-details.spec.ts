import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationDetails } from './examination-details';

describe('ExaminationDetails', () => {
  let component: ExaminationDetails;
  let fixture: ComponentFixture<ExaminationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ExaminationDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
