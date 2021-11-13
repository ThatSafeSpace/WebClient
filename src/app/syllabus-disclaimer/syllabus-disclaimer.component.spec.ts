import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDisclaimerComponent } from './syllabus-disclaimer.component';

describe('SyllabusDisclaimerComponent', () => {
  let component: SyllabusDisclaimerComponent;
  let fixture: ComponentFixture<SyllabusDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
