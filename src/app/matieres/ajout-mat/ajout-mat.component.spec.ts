import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMatComponent } from './ajout-mat.component';

describe('AjoutMatComponent', () => {
  let component: AjoutMatComponent;
  let fixture: ComponentFixture<AjoutMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
