import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideofootageComponent } from './videofootage.component';

describe('VideofootageComponent', () => {
  let component: VideofootageComponent;
  let fixture: ComponentFixture<VideofootageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideofootageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideofootageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
