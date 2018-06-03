import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftHomeComponent } from './home.component';

describe('ShiftHomeComponent', () => {
  let component: ShiftHomeComponent;
  let fixture: ComponentFixture<ShiftHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftHomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
