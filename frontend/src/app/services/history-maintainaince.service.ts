import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistMaintainance } from '../shared/maintain.model';
import { FETCH_ALL_HIST_MAINTAINANCE, FETCH_ONE_HIST_MAINTAINANCE, HIST_MAINTAINANCE_FLEET_TECH} from '../shared/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class HistoryMaintainainceService {

  constructor(private http: HttpClient) { }

  fetchAll(){
    return this.http.get<HistMaintainance[]>(FETCH_ALL_HIST_MAINTAINANCE);
  }

  fetchAFleet(searchTerm: string){
    return this.http.get<HistMaintainance[]>(`${FETCH_ONE_HIST_MAINTAINANCE}/${searchTerm}`)
  }

  fetchAllIncludeTech(){
    return this.http.get<HistMaintainance[]>(HIST_MAINTAINANCE_FLEET_TECH);
  }
}
