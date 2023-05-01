import { Injectable } from '@angular/core';
import { Fleet } from '../shared/fleet.model';
import { sample_data } from '../shared/data.sample';
import { HttpClient } from '@angular/common/http';
import { DELETE_ONE_FLEET, FETCH_ALL_FLEET, FETCH_ONE_FLEET, POST_FLEET } from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class FleetServicesService {

  constructor(private http: HttpClient) { }

  getAllFleet(): Fleet[]{
    return sample_data;
  }

  getFleetBySearchTerm(searchTerm: string){
    return this.getAllFleet().filter(fleet => fleet.fleetNumber.includes(searchTerm));
  }

  getFleetById(fleetNumber: string){
    return this.getAllFleet().find(fleet => fleet.fleetNumber == fleetNumber) ?? new Fleet();
  }

  addFleet(form: object){
    this.http.post(POST_FLEET, form).subscribe(() => {
      console.log('Fleet was Added...');
    })
  }

  fetchAllFleet(){
    return this.http.get<Fleet[]>(FETCH_ALL_FLEET);
  }

  fetchOneFleet(fleetNumber: string){
    return this.http.get<Fleet>(`${FETCH_ONE_FLEET}/${fleetNumber}`);
  }

  removeFleet(fleetNUmber: string){
    this.http.delete(`${DELETE_ONE_FLEET}/${fleetNUmber}}`).subscribe(() => {
      console.log(`Fleet ${fleetNUmber}} was deleted...`);
    });
  }
}
