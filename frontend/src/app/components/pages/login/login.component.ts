import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    'Email': new FormControl('', [Validators.required, Validators.email]),
    'Password': new FormControl('', Validators.required),
  })
  isSubmitted: boolean = false;

  constructor(private authService: AuthenticateService, private router: Router){
    this.authService.removeHeader(this.router.url)
  }


  onSubmit(){
    this.isSubmitted = true

    this.authService.login({email: this.loginForm.controls.Email.value,
      password: this.loginForm.controls.Password.value}).subscribe(() => {
        this.router.navigateByUrl('/home')
      })
  }

}
