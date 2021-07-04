import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInscritsComponent } from './liste-inscrits.component';

describe('ListeInscritsComponent', () => {
  let component: ListeInscritsComponent;
  let fixture: ComponentFixture<ListeInscritsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInscritsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInscritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
