import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationEdit } from './organization-edit';

describe('OrganizationEdit', () => {
  let component: OrganizationEdit;
  let fixture: ComponentFixture<OrganizationEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
