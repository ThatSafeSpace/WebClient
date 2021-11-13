import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusRazorsComponent } from './syllabus-razors.component';

describe('SyllabusRazorsComponent', () => {
  let component: SyllabusRazorsComponent;
  let fixture: ComponentFixture<SyllabusRazorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusRazorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusRazorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
