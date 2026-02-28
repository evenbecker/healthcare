import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerList } from './practitioner-list';

describe('PractitionerList', () => {
  let component: PractitionerList;
  let fixture: ComponentFixture<PractitionerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PractitionerList],
    }).compileComponents();

    fixture = TestBed.createComponent(PractitionerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
