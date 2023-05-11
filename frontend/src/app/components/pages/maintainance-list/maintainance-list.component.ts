import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { MaintainanceService } from 'src/app/services/maintainance.service';
import { MonitorsService } from 'src/app/services/monitors.service';
import { MaintainModel } from 'src/app/shared/maintain.model';
import { MaintainanceFleetModel } from 'src/app/shared/maintainanceFleet.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-maintainance-list',
  templateUrl: './maintainance-list.component.html',
  styleUrls: ['./maintainance-list.component.scss']
})
export class MaintainanceListComponent {
  maintainanceList!: MaintainModel[];
  maintainanceFleetList!: MaintainanceFleetModel[];
  monitor!: any;
  user!: string;
  isMonitor!: boolean;

  constructor(private maintainanceService: MaintainanceService, private authService: AuthenticateService,
    private activedRoute: ActivatedRoute, private monitorsService: MonitorsService){
    this.maintainanceService.fetchMaintainanceList().subscribe((data) => {
      this.maintainanceList = data;
    })

    this.activedRoute.params.subscribe(params => {
      this.user = params.name
      this.monitorsService.fetchOne(params.name).subscribe(data => {
        this.monitor = data;
        if(params.name === this.monitor.name){
          this.isMonitor = true
          this.maintainanceService.fetchMaintainanceListFleet(this.monitor.depot).subscribe((data) => {
            this.maintainanceFleetList = data;
          })
        }
      })
    })
  }
}
