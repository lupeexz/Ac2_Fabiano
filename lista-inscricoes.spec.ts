import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaInscricoesComponent } from './lista-inscricoes';

describe('ListaInscricoesComponent', () => {
  let component: ListaInscricoesComponent;
  let fixture: ComponentFixture<ListaInscricoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInscricoesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaInscricoesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
