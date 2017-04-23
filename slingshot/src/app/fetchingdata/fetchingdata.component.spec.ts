import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchingdataComponent } from './fetchingdata.component';

describe('FetchingdataComponent', () => {
  let component: FetchingdataComponent;
  let fixture: ComponentFixture<FetchingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
