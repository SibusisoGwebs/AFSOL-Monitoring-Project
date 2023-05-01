import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetbookingComponent } from './fleetbooking.component';

describe('FleetbookingComponent', () => {
  let component: FleetbookingComponent;
  let fixture: ComponentFixture<FleetbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
