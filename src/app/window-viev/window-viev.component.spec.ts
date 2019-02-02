import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowVievComponent } from './window-viev.component';

describe('WindowVievComponent', () => {
  let component: WindowVievComponent;
  let fixture: ComponentFixture<WindowVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowVievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
