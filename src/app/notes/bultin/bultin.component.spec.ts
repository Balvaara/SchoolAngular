import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BultinComponent } from './bultin.component';

describe('BultinComponent', () => {
  let component: BultinComponent;
  let fixture: ComponentFixture<BultinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BultinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BultinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
