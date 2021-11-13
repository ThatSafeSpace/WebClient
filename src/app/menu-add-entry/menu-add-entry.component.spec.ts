import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddEntryComponent } from './menu-add-entry.component';

describe('MenuAddEntryComponent', () => {
  let component: MenuAddEntryComponent;
  let fixture: ComponentFixture<MenuAddEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAddEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
