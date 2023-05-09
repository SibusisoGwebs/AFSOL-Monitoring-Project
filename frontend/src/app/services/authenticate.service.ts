import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/user.model';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL } from '../shared/constant/urls';
import { ToastrService } from 'ngx-toastr';


const USER_KEY = 'User'
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  private authenticated: boolean = false;

  constructor(private router: Router, private http: HttpClient, private toastService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User>{
    return this.http.post<User>(LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastService.success(
            `Welcome ${user.name}`,
            'Login Successful'
          );
          this.isAuthenticated(user)
        },
        error: (errorRes) => {
          this.toastService.error(errorRes.error, 'Login Failed')
        }
      })
    );
  }

  private setUserToLocalStorage(user: User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson){
      return JSON.parse(userJson) as User;
    }else{
      return new User();
    }
  }

  getAuthenticated(){
    return this.authenticated
  }

  private isAuthenticated(user: User){
    if(user){
      this.authenticated = true;
    }
  }

  private unAuthenticated(): boolean{
    this.authenticated = false;
    return this.authenticated;
  }

  logOut(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    this.router.navigate(['']);

    // return this.unAuthenticated();
    // this.router.navigate(['']);
  }

  removeHeader(value: string){
    if(value){
      localStorage.removeItem(USER_KEY);
    }
  }
}
