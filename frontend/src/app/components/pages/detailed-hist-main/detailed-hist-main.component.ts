import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryMaintainainceService } from 'src/app/services/history-maintainaince.service';
import { HistMaintainance } from 'src/app/shared/maintain.model';

@Component({
  selector: 'app-detailed-hist-main',
  templateUrl: './detailed-hist-main.component.html',
  styleUrls: ['./detailed-hist-main.component.scss']
})
export class DetailedHistMainComponent {
  maintainedFleet!: HistMaintainance

  constructor(atctivatedRoute: ActivatedRoute, private histMaintainanceServices: HistoryMaintainainceService){
    atctivatedRoute.params.subscribe((params) => {
      if(params.ticket){
        this.histMaintainanceServices.fetchAFleet(params.ticket).subscribe((data) => {
          this.maintainedFleet = data[0];
        })
      }
    })
  }
}
