import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryMaintainainceService } from 'src/app/services/history-maintainaince.service';
import { HistMaintainance } from 'src/app/shared/maintain.model';

@Component({
  selector: 'app-history-maintain',
  templateUrl: './history-maintain.component.html',
  styleUrls: ['./history-maintain.component.scss']
})
export class HistoryMaintainComponent {
  histMaintainance!: HistMaintainance[];

  constructor(private historyMaintainance: HistoryMaintainainceService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.historyMaintainance.fetchAFleet(params.searchTerm).subscribe((data) => {
          this.histMaintainance = data
        })
      }else{
        this.historyMaintainance.fetchAll().subscribe((data) => {
          this.histMaintainance = data
        })
      }
    })

  }

}
