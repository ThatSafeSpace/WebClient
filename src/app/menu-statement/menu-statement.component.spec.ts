import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStatementComponent } from './menu-statement.component';

describe('MenuStatementComponent', () => {
  let component: MenuStatementComponent;
  let fixture: ComponentFixture<MenuStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
