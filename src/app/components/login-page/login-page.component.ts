import { Component } from '@angular/core';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RegisterModalComponent],
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
