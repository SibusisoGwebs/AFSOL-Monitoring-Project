import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { truncate } from 'fs/promises';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { FleetServicesService } from 'src/app/services/fleet-services.service';
import { MonitoringService } from 'src/app/services/monitoring.service';
import { MonitorsService } from 'src/app/services/monitors.service';
import { Fleet } from 'src/app/shared/fleet.model';
import { MonitorModel } from 'src/app/shared/monitor.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-fleet-page',
  templateUrl: './fleet-page.component.html',
  styleUrls: ['./fleet-page.component.scss']
})
export class FleetPageComponent {
  fleets!: Fleet[];
  page: string = 'fleet';
  monitor!: any;
  user!: User;
  ismessege!: boolean;

  constructor(private fleetServices: FleetServicesService, activatedRoute: ActivatedRoute,
    private monitorsService: MonitorsService, private authService: AuthenticateService){
    activatedRoute.params.subscribe((params) => {
      this.authService.userObservable.subscribe(newuser => {
        this.user = newuser;
        this.monitorsService.fetchOne(params.name).subscribe(monitor => {
          this.monitor = monitor;
          if(params.name === this.monitor.name){
            this.ismessege = true;
          }
          if(params.searchTerm){
            this.fleetServices.fetchOneFleet(params.searchTerm).subscribe((data) => {
              this.fleets = [data];
            })
          }else{
            this.fleetServices.fetchAllFleet(this.monitor.depot).subscribe((data) => {
              this.fleets = data;
            })
          }
        })
      })
      // if(params.searchTerm){
      //   this.fleetServices.fetchOneFleet(params.searchTerm).subscribe((data) => {
      //     this.fleets = [data];
      //   })
      // }else{
      //   this.fleetServices.fetchAllFleet(this.monitor.depot).subscribe((data) => {
      //     this.fleets = data;
      //   })
      // }
    })
  }

}
