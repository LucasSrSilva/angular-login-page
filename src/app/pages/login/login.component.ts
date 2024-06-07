import { Component } from '@angular/core';
import { LoginDefaultContainerComponent } from '../../components/login-default-container/login-default-container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputPrimarioComponent } from '../../components/input-primario/input-primario.component';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginDefaultContainerComponent,
    ReactiveFormsModule,
    InputPrimarioComponent
  ],
  providers: [LoginServiceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginServiceService,
    private toastService: ToastrService
  ){
    

    this.loginForm = new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  submit(){
      
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
          next: () => this.toastService.success("Login feito com sucesso!"),
          error: () => this.toastService.error("Erro inesperado!")
      
        })
  }
  navigate(){
    this.router.navigate(["registro"]);
  }
}


