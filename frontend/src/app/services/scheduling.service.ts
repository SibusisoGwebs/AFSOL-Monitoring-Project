import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DELETE_SCHEDULED_FLEET, FETCH_ALL_SCHEDULED_FLEETS, POST_SCHEDULED_FLEET } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http: HttpClient) { }

  SchedulingFleet(form: object){
    this.http.post(POST_SCHEDULED_FLEET, form).subscribe(() => {
      console.log('New Fleet Scheduled...');
    });
  }

  removeSchedule(ticket: string){
    this.http.delete(`${DELETE_SCHEDULED_FLEET}/${ticket}`).subscribe(() => {
      console.log(`Schedule with ticket ${ticket}} is Completed...`);
    });
  }

  fetchAllSchedules(){
    return this.http.get(FETCH_ALL_SCHEDULED_FLEETS)
  }
}
