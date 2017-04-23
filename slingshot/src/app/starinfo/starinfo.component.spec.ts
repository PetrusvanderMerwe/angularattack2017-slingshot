import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarinfoComponent } from './starinfo.component';

describe('StarinfoComponent', () => {
  let component: StarinfoComponent;
  let fixture: ComponentFixture<StarinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
