import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SyllabusMenuComponent } from './syllabus-menu.component';

describe('SyllabusComponent', () => {
  let component: SyllabusMenuComponent;
  let fixture: ComponentFixture<SyllabusMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
