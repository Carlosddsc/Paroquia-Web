import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroComponent } from './cadastro.component';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule se estiver usando ngModel

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Importe o FormsModule aqui se estiver usando ngModel
      declarations: [CadastroComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
