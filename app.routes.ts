import { Routes } from '@angular/router';
import { CadastrarEmprestimoComponent } from './Cadastrar-Emprestimo/cadastrar-emprestimo';
import { ListaInscricoesComponent } from './lista-inscricoes/lista-inscricoes';
export const routes: Routes = [
    { path: 'cadastrar', component: CadastrarEmprestimoComponent },
    { path: 'lista', component: ListaInscricoesComponent }
];
