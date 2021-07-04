import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCoursComponent } from './menu-cours.component';

describe('MenuCoursComponent', () => {
  let component: MenuCoursComponent;
  let fixture: ComponentFixture<MenuCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
