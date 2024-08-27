import { Component } from '@angular/core';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  modalEstaAberto = false;

  abreModalRegistrar(){
    this.modalEstaAberto = true;
  }

  fechaModalRegistrar(){
    this.modalEstaAberto = false
  }
}
