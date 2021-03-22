import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouUserComponent } from './ajou-user.component';

describe('AjouUserComponent', () => {
  let component: AjouUserComponent;
  let fixture: ComponentFixture<AjouUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
