import { Component } from '@angular/core';
import { MaintainanceService } from 'src/app/services/maintainance.service';
import { SchedulingService } from 'src/app/services/scheduling.service';
import { MaintainanceFleetModel } from 'src/app/shared/maintainanceFleet.model';

@Component({
  selector: 'app-allschedules',
  templateUrl: './allschedules.component.html',
  styleUrls: ['./allschedules.component.scss']
})
export class AllschedulesComponent {
  allScheduledFleet!: MaintainanceFleetModel[];
  allSchedules!: any;
  allSchedulesDates!: any;

  constructor(private maintainanceService: MaintainanceService, private scheduleService: SchedulingService){
    this.maintainanceService.fetchAllScheduledFleet().subscribe((data) => {
      this.allScheduledFleet = data;
    });

    this.scheduleService.fetchAllSchedules().subscribe((data) => {
      this.allSchedules = data;
      const unique = new Set();

      

      this.allSchedulesDates = this.allSchedules.filter((el: {
        id: number,
        ticket: string,
        depot: string,
        date: string,
        createdAt: string,
        maintainanceId: number
      }) => {
        const notUnique = unique.has(el.date);
        unique.add(el.date);
        return !notUnique
      })
      console.log(this.allSchedulesDates);
    })
  }
}
