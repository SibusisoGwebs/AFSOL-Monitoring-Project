import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultTitleStrategy } from '@angular/router';
import { FETCH_ALL_HIST_MAINTAINANCE2, FETCH_ONE_HIST_MAINTAINANCE2, POST_MAINTAINANCE_HISTORY } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getGeolocation(){
    navigator.geolocation.watchPosition((position) => {
      const {latitude, longitude, accuracy, altitude, speed} = position.coords
      console.log(latitude)
    })
  }

  addToMaintainanceHistory(form: object){
    this.http.post(POST_MAINTAINANCE_HISTORY, form).subscribe(() => {
      console.log('Maintainance Added To History...');
    });
  }

  fetchAllScheduledFleet(){
    return this.http.get(FETCH_ALL_HIST_MAINTAINANCE2);
  }

  fetchOneScheduledFleet(ticket: string){
    return this.http.get(`${FETCH_ONE_HIST_MAINTAINANCE2}/${ticket}`);
  }
}
