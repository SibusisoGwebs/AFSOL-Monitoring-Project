import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedHistMainComponent } from './detailed-hist-main.component';

describe('DetailedHistMainComponent', () => {
  let component: DetailedHistMainComponent;
  let fixture: ComponentFixture<DetailedHistMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedHistMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedHistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
