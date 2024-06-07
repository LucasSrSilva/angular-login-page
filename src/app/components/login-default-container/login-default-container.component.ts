import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-default-container',
  standalone: true,
  imports: [],
  templateUrl: './login-default-container.component.html',
  styleUrl: './login-default-container.component.css'
})
export class LoginDefaultContainerComponent {
  @Input() titulo: string = "";
  @Input() textoBotaoPrimario: string = "";
  @Input() textoBotaoSecundario: string = "";
  @Input() disabledBotaoPrimario: boolean = true;

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }
}
