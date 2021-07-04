import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMatComponent } from './list-mat.component';

describe('ListMatComponent', () => {
  let component: ListMatComponent;
  let fixture: ComponentFixture<ListMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
