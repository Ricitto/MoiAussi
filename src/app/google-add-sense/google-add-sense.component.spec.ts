import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAddSenseComponent } from './google-add-sense.component';

describe('GoogleAddSenseComponent', () => {
  let component: GoogleAddSenseComponent;
  let fixture: ComponentFixture<GoogleAddSenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAddSenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAddSenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
