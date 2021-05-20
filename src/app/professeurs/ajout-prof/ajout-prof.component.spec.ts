import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProfComponent } from './ajout-prof.component';

describe('AjoutProfComponent', () => {
  let component: AjoutProfComponent;
  let fixture: ComponentFixture<AjoutProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
