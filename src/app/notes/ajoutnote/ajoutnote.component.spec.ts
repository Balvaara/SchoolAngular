import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutnoteComponent } from './ajoutnote.component';

describe('AjoutnoteComponent', () => {
  let component: AjoutnoteComponent;
  let fixture: ComponentFixture<AjoutnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
