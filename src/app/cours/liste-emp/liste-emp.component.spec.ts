import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmpComponent } from './liste-emp.component';

describe('ListeEmpComponent', () => {
  let component: ListeEmpComponent;
  let fixture: ComponentFixture<ListeEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
