import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FleetServicesService } from 'src/app/services/fleet-services.service';
import { Fleet } from 'src/app/shared/fleet.model';

@Component({
  selector: 'app-fleet-page',
  templateUrl: './fleet-page.component.html',
  styleUrls: ['./fleet-page.component.scss']
})
export class FleetPageComponent {
  fleets!: Fleet[];
  page: string = 'fleet';

  constructor(private fleetServices: FleetServicesService, activatedRoute: ActivatedRoute){
    // activatedRoute.params.subscribe((params) => {
    //   if(params.searchTerm){
    //     this.fleets = this.fleetServices.getFleetBySearchTerm(params.searchTerm);
    //   }else this.fleets = fleetServices.getAllFleet(); 
    // });
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.fleetServices.fetchOneFleet(params.searchTerm).subscribe((data) => {
          this.fleets = [data];
        })
      }else{
        this.fleetServices.fetchAllFleet().subscribe((data) => {
          this.fleets = data;
        })
      }
    })
  }

}
