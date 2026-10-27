import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarEmprestimoComponent } from './cadastrar-emprestimo';

describe('CadastrarEmprestimoComponent', () => {
  let component: CadastrarEmprestimoComponent;
  let fixture: ComponentFixture<CadastrarEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarEmprestimoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarEmprestimoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
