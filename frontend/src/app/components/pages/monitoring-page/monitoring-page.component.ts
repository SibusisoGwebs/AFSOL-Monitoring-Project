import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaintainanceService } from 'src/app/services/maintainance.service';
import { MonitoringService } from 'src/app/services/monitoring.service';
import { MaintainModel } from 'src/app/shared/maintain.model';

@Component({
  selector: 'app-monitoring-page',
  templateUrl: './monitoring-page.component.html',
  styleUrls: ['./monitoring-page.component.scss']
})
export class MonitoringPageComponent {
  maintainanceList!: any;
  page: string = 'monitoring'
  theList = [];

  constructor(private monitoringService: MonitoringService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.monitoringService.fetchOneMaintainanceFleet(params.searchTerm).subscribe((data) => {
          this.maintainanceList = data;
          console.log(data);
        });
      }else{
        this.monitoringService.fetchMaintainanceList().subscribe((data) => {
          this.maintainanceList = data;
          console.log(data);
        });
      }
    })
  }
}
