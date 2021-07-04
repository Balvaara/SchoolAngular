import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutNivComponent } from './ajout-niv.component';

describe('AjoutNivComponent', () => {
  let component: AjoutNivComponent;
  let fixture: ComponentFixture<AjoutNivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutNivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutNivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
