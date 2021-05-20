import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifinoteComponent } from './verifinote.component';

describe('VerifinoteComponent', () => {
  let component: VerifinoteComponent;
  let fixture: ComponentFixture<VerifinoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifinoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifinoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
