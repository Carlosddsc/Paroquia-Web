import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastradosComponent } from './cadastrados.component';

describe('CadastradosComponent', () => {
  let component: CadastradosComponent;
  let fixture: ComponentFixture<CadastradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastradosComponent]
    });
    fixture = TestBed.createComponent(CadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
