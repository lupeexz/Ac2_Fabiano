import { Component } from '@angular/core';
import { InscricaoService } from '../inscricao';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrar-emprestimo',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './Cadastrar-Emprestimo.html',
  styleUrl: './cadastrar-emprestimo.css'
})
export class CadastrarEmprestimoComponent {
  
  id: string = '';
  nome: string = '';
  tituloLivro: string = '';
  datasSelecionadas: string = ''; 
  datasDisponiveis: string[] = ['21/11/2026', '14/11/2026', '07/11/2026'];

  constructor(private emprestimoService: InscricaoService) {}

  cadastrar() {
    if (this.nome && this.tituloLivro && this.datasSelecionadas) {
      this.emprestimoService.adicionar(this.nome, this.tituloLivro, this.datasSelecionadas);
      alert('Empréstimo realizado!');
      this.nome = '';
      this.tituloLivro = '';
      this.datasSelecionadas = '';
    } else {
      alert('Preencha todos os campos!');
    }
  }
}
