import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartableComponent } from './startable.component';

describe('StartableComponent', () => {
  let component: StartableComponent;
  let fixture: ComponentFixture<StartableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
