import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigRootComponent } from './config-root.component';

describe('ConfigRootComponent', () => {
  let component: ConfigRootComponent;
  let fixture: ComponentFixture<ConfigRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
