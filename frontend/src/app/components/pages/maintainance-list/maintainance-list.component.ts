import { Component } from '@angular/core';
import { MaintainanceService } from 'src/app/services/maintainance.service';
import { MaintainModel } from 'src/app/shared/maintain.model';
import { MaintainanceFleetModel } from 'src/app/shared/maintainanceFleet.model';

@Component({
  selector: 'app-maintainance-list',
  templateUrl: './maintainance-list.component.html',
  styleUrls: ['./maintainance-list.component.scss']
})
export class MaintainanceListComponent {
  maintainanceList!: MaintainModel[];
  maintainanceFleetList!: MaintainanceFleetModel[];

  constructor(private maintainanceService: MaintainanceService){
    this.maintainanceService.fetchMaintainanceList().subscribe((data) => {
      this.maintainanceList = data;
    })

    this.maintainanceService.fetchMaintainanceListFleet().subscribe((data) => {
      this.maintainanceFleetList = data;
    })
  }
}
