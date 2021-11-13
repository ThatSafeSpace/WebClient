import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediathekComponent } from './mediathek.component';

describe('MediathekComponent', () => {
  let component: MediathekComponent;
  let fixture: ComponentFixture<MediathekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediathekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediathekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
