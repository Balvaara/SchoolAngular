import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEleveComponent } from './liste-eleve.component';

describe('ListeEleveComponent', () => {
  let component: ListeEleveComponent;
  let fixture: ComponentFixture<ListeEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
