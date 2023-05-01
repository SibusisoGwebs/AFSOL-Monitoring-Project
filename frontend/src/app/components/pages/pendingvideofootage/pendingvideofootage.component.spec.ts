import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingvideofootageComponent } from './pendingvideofootage.component';

describe('PendingvideofootageComponent', () => {
  let component: PendingvideofootageComponent;
  let fixture: ComponentFixture<PendingvideofootageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingvideofootageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingvideofootageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
