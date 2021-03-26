import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPyementComponent } from './ajout-pyement.component';

describe('AjoutPyementComponent', () => {
  let component: AjoutPyementComponent;
  let fixture: ComponentFixture<AjoutPyementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPyementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPyementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
