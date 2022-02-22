import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod6hw1Component } from './mod6hw1.component';

describe('Mod6hw1Component', () => {
  let component: Mod6hw1Component;
  let fixture: ComponentFixture<Mod6hw1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod6hw1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod6hw1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
