import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { User } from 'src/app/shared/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user!: User;
  loggedIn!: boolean;
  status: string = environment.Status;
  currentRoute!: string;

  constructor(public authService: AuthenticateService, private router: Router){
    authService.userObservable.subscribe((newUser) => {
      this.user = newUser;
      if(this.user){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    })
  }
}
