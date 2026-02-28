import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerEdit } from './practitioner-edit';

describe('PractitionerEdit', () => {
  let component: PractitionerEdit;
  let fixture: ComponentFixture<PractitionerEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PractitionerEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(PractitionerEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
