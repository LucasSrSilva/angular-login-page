import { Component } from '@angular/core';
import { LoginDefaultContainerComponent } from '../../components/login-default-container/login-default-container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { ToastrService } from 'ngx-toastr';

interface RegistroForm {
  nome: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    LoginDefaultContainerComponent,
    ReactiveFormsModule,
    InputPrimarioComponent
  ],
  providers: [LoginServiceService],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroForm: FormGroup<RegistroForm>;

  constructor(
    private router: Router,
    private registroService: LoginServiceService,
    private toastService: ToastrService
  ){
    

    this.registroForm = new FormGroup({
        nome: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  submit(){
      
        this.registroService.login(this.registroForm.value.email, this.registroForm.value.password).subscribe({
          next: () => this.toastService.success("Registro feito com sucesso!"),
          error: () => this.toastService.error("Erro inesperado!")
      
        })
  }
  navigate(){
    this.router.navigate(["login"]);
  }
}


