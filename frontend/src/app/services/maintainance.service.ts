import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sample_monitor_data } from '../shared/data.sample';
import { MaintainanceModel, MaintainModel } from '../shared/maintain.model';
import { MaintainanceFleetModel } from '../shared/maintainanceFleet.model';
import { DELETE_MAINTAINANCE_FLEET, FETCH_ALL_MAINTAINANCE_FLEET, FETCH_ALL_SCHEDULE_FLEET, FETCH_MAINTAINANCE_LIST, FETCH_ONE_MAINTAINANCE, FETCH_ONE_MAINTAINANCE_FLEET, FETCH_ONE_SCHEDULE_FLEET, POST_MAINTAINANCE_FLEET } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class MaintainanceService {

  constructor(private http: HttpClient) {}

  getAllMaintainanceList(): MaintainModel[]{
    return sample_monitor_data
  }

  fetchMaintainanceList(){
    return this.http.get<MaintainModel[]>(FETCH_ALL_MAINTAINANCE_FLEET)
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  fetchMaintainanceListFleet(){
    return this.http.get<MaintainanceFleetModel[]>(FETCH_MAINTAINANCE_LIST)
  }

  fetchOneMaintainanceFleet(fleet: string){
    return this.http.get<MaintainanceFleetModel>(`${FETCH_ONE_MAINTAINANCE_FLEET}/${fleet}`)
  }

  fetchAllScheduledFleet(){
    return this.http.get<MaintainanceFleetModel[]>(FETCH_ALL_SCHEDULE_FLEET)
  }

  fetchOneScheduledFleet(fleet: string){
    return this.http.get<MaintainanceFleetModel>(`${FETCH_ONE_SCHEDULE_FLEET}/${fleet}`)
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  fetchOneMaintainance(fleet: string){
    return this.http.get<MaintainanceModel>(`${FETCH_ONE_MAINTAINANCE}/${fleet}`)
  }

  addFleetToMaintainance(form: object){
    this.http.post(POST_MAINTAINANCE_FLEET, form).subscribe(() => {
      console.log('New Fleet for Maintainance...');
    });
  }

  removeFleetFromMaintainance(fleet: string){
    this.http.delete(`${DELETE_MAINTAINANCE_FLEET}/${fleet}`).subscribe(() => {
      console.log(`Fleet with id ${fleet}} has finished maintainance...`);
    });
  }
}
