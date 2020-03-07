import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarForOwnerListComponent } from './car-for-owner-list.component';

describe('CarForOwnerListComponent', () => {
  let component: CarForOwnerListComponent;
  let fixture: ComponentFixture<CarForOwnerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarForOwnerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarForOwnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
