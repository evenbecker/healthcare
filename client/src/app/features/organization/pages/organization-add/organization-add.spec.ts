import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAdd } from './organization-add';

describe('OrganizationAdd', () => {
  let component: OrganizationAdd;
  let fixture: ComponentFixture<OrganizationAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
