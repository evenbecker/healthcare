import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerAdd } from './practitioner-add';

describe('PractitionerAdd', () => {
  let component: PractitionerAdd;
  let fixture: ComponentFixture<PractitionerAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PractitionerAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(PractitionerAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
