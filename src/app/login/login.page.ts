import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  userTest = { username: 'administrador1', password: 'admin123' };
  
  passwordType: string = 'password'; 
  passwordIcon: string = 'eye-off';   
  
  
  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.formularioLogin = this.formBuilder.group({
      usuario: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      contrasena: new FormControl('', Validators.required),
    });
  }

  
  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';      
      this.passwordIcon = 'eye';        
    } else {
      this.passwordType = 'password';   
      this.passwordIcon = 'eye-off';   
    }
  }

  
  


  async guardar() {
    if (this.formularioLogin.valid) {
      const datosForm = this.formularioLogin.value;
      const datos = {
        usuario: datosForm.usuario,
        pass: datosForm.contrasena,
      };
      if (
        datos.usuario === this.userTest.username &&
        datos.pass === this.userTest.password
      ) {
        const navigationExtras: NavigationExtras = {
          state: {
            user: datos.usuario,
          },
        };
        this.router.navigate(['/home'], navigationExtras);
      } else {
        alert('Usuario y/o contraseña incorrectos');
      }
    }
  }


  ingresarComoInvitado() {
    
    this.router.navigate(['/home']);
  }
  

  ngOnInit() {}
}
