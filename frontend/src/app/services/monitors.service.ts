import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADD_MONITORS, CLEAR_MONITORS, FETCH_ONE_MONITORS } from '../shared/constant/urls';
import { MonitorModel } from '../shared/monitor.model';

@Injectable({
  providedIn: 'root'
})
export class MonitorsService {

  constructor(private http: HttpClient) { }

  addMonitor(form: object){
    this.http.post(ADD_MONITORS, form).subscribe(() => {
      console.log('Fleet was Added...');
    })
  }

  clearAllMonitors(){
    this.http.delete(CLEAR_MONITORS).subscribe(() => {
      console.log(`All Cleared was deleted...`);
    });
  }

  fetchOne(value: any){
    return this.http.get<MonitorModel[]>(`${FETCH_ONE_MONITORS}/${value}`);
  }
}
