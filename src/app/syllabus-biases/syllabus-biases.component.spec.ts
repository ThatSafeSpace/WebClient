import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusBiasesComponent } from './syllabus-biases.component';

describe('SyllabusBiasesComponent', () => {
  let component: SyllabusBiasesComponent;
  let fixture: ComponentFixture<SyllabusBiasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusBiasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusBiasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
