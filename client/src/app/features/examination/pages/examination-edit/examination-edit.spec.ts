import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationEdit } from './examination-edit';

describe('ExaminationEdit', () => {
  let component: ExaminationEdit;
  let fixture: ComponentFixture<ExaminationEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(ExaminationEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
