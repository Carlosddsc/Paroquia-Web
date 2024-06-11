import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarEventosComponent } from './lancar-eventos.component';

describe('LancarEventosComponent', () => {
  let component: LancarEventosComponent;
  let fixture: ComponentFixture<LancarEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancarEventosComponent]
    });
    fixture = TestBed.createComponent(LancarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
