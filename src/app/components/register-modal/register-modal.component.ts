import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent {
  @Input() estaAberto = false;
  @Output() fecha = new EventEmitter<void>();

  anoSelecionado!: number;
  mesSelecionado!: number;
  dias!: number[]

  atualizarDias() {
    if(!this.mesSelecionado && !this.anoSelecionado){
      this.dias = Array.from({ length: new Date(2024, 1, 0).getDate() }, (_, i) => i + 1);

    }
    this.dias = Array.from({ length: new Date(this.anoSelecionado, this.mesSelecionado, 0).getDate() }, (_, i) => i + 1);
  }
  
  meses = [
    {nome: 'Janeiro', value: 1},
    {nome: 'Fevereiro', value: 2},
    {nome: 'Março', value: 3},
    {nome: 'Abril', value: 4},
    {nome: 'Maio', value: 5},
    {nome: 'Junho', value: 6},
    {nome: 'Julho', value: 7},
    {nome: 'Agosto', value: 8},
    {nome: 'Stembro', value: 9},
    {nome: 'Outubro', value: 10},
    {nome: 'Novembro', value: 11},
    {nome: 'Dezembro', value: 12}
  ]
  
  anos: number[] = Array.from({length: 100}, (_,i) => new Date().getFullYear() - i)
  
  fechaModal() {
    this.fecha.emit();
  }
}
