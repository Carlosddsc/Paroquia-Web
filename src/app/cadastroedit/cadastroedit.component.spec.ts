import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroeditComponent } from './cadastroedit.component';

describe('CadastroeditComponent', () => {
  let component: CadastroeditComponent;
  let fixture: ComponentFixture<CadastroeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroeditComponent]
    });
    fixture = TestBed.createComponent(CadastroeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
