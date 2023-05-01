import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMaintainComponent } from './history-maintain.component';

describe('HistoryMaintainComponent', () => {
  let component: HistoryMaintainComponent;
  let fixture: ComponentFixture<HistoryMaintainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryMaintainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
