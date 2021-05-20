import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNivComponent } from './list-niv.component';

describe('ListNivComponent', () => {
  let component: ListNivComponent;
  let fixture: ComponentFixture<ListNivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
