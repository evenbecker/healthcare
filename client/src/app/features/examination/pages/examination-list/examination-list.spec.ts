import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationList } from './examination-list';

describe('ExaminationList', () => {
  let component: ExaminationList;
  let fixture: ComponentFixture<ExaminationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationList],
    }).compileComponents();

    fixture = TestBed.createComponent(ExaminationList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
