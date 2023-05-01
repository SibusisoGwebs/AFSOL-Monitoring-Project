import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFromClient } from '../shared/UserfromClient.model';
import { POST_USER_DETAILS } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  UserDetails(user: UserFromClient){
    return this.http.post<UserFromClient>(POST_USER_DETAILS, user)
  }
}
