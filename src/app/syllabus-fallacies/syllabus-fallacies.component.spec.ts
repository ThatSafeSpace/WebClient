import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusFallaciesComponent } from './syllabus-fallacies.component';

describe('SyllabusFallaciesComponent', () => {
  let component: SyllabusFallaciesComponent;
  let fixture: ComponentFixture<SyllabusFallaciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusFallaciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusFallaciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
