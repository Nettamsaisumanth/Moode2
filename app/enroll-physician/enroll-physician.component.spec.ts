import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPhysicianComponent } from './enroll-physician.component';

describe('EnrollPhysicianComponent', () => {
  let component: EnrollPhysicianComponent;
  let fixture: ComponentFixture<EnrollPhysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollPhysicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollPhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
