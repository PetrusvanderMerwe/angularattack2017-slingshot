import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StargazeComponent } from './stargaze.component';

describe('StargazeComponent', () => {
  let component: StargazeComponent;
  let fixture: ComponentFixture<StargazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StargazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StargazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
