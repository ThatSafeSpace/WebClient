import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFilterLanguageComponent } from './menu-filter-language.component';

describe('MenuFilterLanguageComponent', () => {
  let component: MenuFilterLanguageComponent;
  let fixture: ComponentFixture<MenuFilterLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFilterLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFilterLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
