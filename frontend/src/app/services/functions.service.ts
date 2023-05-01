import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FETCH_MAINTAINANCE_COUNT, GENERATE_VIDEOFOOTAGE_TICKET, POST_FLEET_TICKET, POST_VIDEOFOOTAGE_TICKET } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private http: HttpClient) { }

  fetchcount(){
    return this.http.get(FETCH_MAINTAINANCE_COUNT)

  }

  ticketFunction(form: object){
    this.http.post(POST_FLEET_TICKET, form).subscribe(() => {
      console.log('New Ticket In...');
    });
  }

  fetchVideofootageTicket(){
    return this.http.get(GENERATE_VIDEOFOOTAGE_TICKET)

  }

  PostVideofootageTicket(form: object){
    this.http.post(POST_VIDEOFOOTAGE_TICKET, form).subscribe(() => {
      console.log('New Video Ticket In...');
    })
  }


}
