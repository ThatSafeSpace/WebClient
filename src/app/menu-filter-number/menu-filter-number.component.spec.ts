import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFilterNumberComponent } from './menu-filter-number.component';

describe('MenuFilterNumberComponent', () => {
  let component: MenuFilterNumberComponent;
  let fixture: ComponentFixture<MenuFilterNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFilterNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFilterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
