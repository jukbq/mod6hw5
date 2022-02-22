import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6hw3Component } from './mod6hw3.component';

describe('Mod6hw3Component', () => {
  let component: Mod6hw3Component;
  let fixture: ComponentFixture<Mod6hw3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod6hw3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod6hw3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
