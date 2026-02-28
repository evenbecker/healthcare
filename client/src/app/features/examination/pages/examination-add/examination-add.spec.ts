import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationAdd } from './examination-add';

describe('ExaminationAdd', () => {
  let component: ExaminationAdd;
  let fixture: ComponentFixture<ExaminationAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(ExaminationAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
