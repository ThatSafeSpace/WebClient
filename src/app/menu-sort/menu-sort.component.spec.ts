import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSortComponent } from './menu-sort.component';

describe('MenuSortComponent', () => {
  let component: MenuSortComponent;
  let fixture: ComponentFixture<MenuSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
