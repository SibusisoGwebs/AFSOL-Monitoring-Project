import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosevideofootageComponent } from './closevideofootage.component';

describe('ClosevideofootageComponent', () => {
  let component: ClosevideofootageComponent;
  let fixture: ComponentFixture<ClosevideofootageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosevideofootageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosevideofootageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
