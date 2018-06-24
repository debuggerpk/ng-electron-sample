import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftListItemComponent } from './list-item.component';

describe('ShiftListItemComponent', () => {
  let component: ShiftListItemComponent;
  let fixture: ComponentFixture<ShiftListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
