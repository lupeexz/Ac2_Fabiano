import { TestBed } from '@angular/core/testing';
import { ListaEmprestimos } from './lista-emprestimos';

describe('ListaEmprestimos', () => {
  let service: ListaEmprestimos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEmprestimos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
