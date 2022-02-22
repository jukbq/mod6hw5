import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6hw2Component } from './mod6hw2.component';

describe('Mod6hw2Component', () => {
  let component: Mod6hw2Component;
  let fixture: ComponentFixture<Mod6hw2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod6hw2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod6hw2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
