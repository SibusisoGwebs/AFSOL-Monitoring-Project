import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserFromClient } from 'src/app/shared/UserfromClient.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  UserForm: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'passwords': new FormControl('', Validators.required),
    'confirmPasswords': new FormControl('', [Validators.required, Validators.email]),
    'isAdmin': new FormControl('', Validators.required)
  })
  // Userdetails: UserFromClient = {
  //   name: this.UserForm.controls.name.value,
  //   email: this.UserForm.controls.email.value,
  //   passwords: this.UserForm.controls.password.value,
  //   confirmPasswords: this.UserForm.controls.confirmPasswords.value,
  //   isAdmin: !!this.UserForm.controls.isAdmin.value
  // }

  constructor(private router: Router, private userServices: UserService){}

  onSubmit(){
    if(this.UserForm.controls.passwords.value === this.UserForm.controls.confirmPasswords.value){
      let adminTrue: boolean;
        if(this.UserForm.controls.isAdmin.value === 'false'){
          adminTrue = false
        }else{
          adminTrue = true
        }
      
      this.userServices.UserDetails({
        name: this.UserForm.controls.name.value,
        email: this.UserForm.controls.email.value,
        passwords: this.UserForm.controls.passwords.value,
        confirmPasswords: this.UserForm.controls.confirmPasswords.value,
        isAdmin: adminTrue
      }).subscribe(() => {
        this.UserForm.reset();
        this.router.navigateByUrl('/home');
        console.log(!!this.UserForm.controls.isAdmin.value);
        console.log("false")
      });
    }else{
      console.log('Password Does Not Match');
    }
  }

}
