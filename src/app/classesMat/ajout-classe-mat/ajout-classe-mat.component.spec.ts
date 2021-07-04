import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutClasseMatComponent } from './ajout-classe-mat.component';

describe('AjoutClasseMatComponent', () => {
  let component: AjoutClasseMatComponent;
  let fixture: ComponentFixture<AjoutClasseMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutClasseMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutClasseMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
