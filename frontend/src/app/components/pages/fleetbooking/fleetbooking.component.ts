import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';
import { MaintainanceService } from 'src/app/services/maintainance.service';
import { SchedulingService } from 'src/app/services/scheduling.service';
import { MaintainanceModel } from 'src/app/shared/maintain.model';
import { MaintainanceFleetModel } from 'src/app/shared/maintainanceFleet.model';

@Component({
  selector: 'app-fleetbooking',
  templateUrl: './fleetbooking.component.html',
  styleUrls: ['./fleetbooking.component.scss']
})
export class FleetbookingComponent implements OnInit {
  count: any = {ValueOfCount: ''};
  maintainanceFleet!: MaintainanceFleetModel;
  scheduleForm: FormGroup = new FormGroup({
    'depot': new FormControl(''),
    'date': new FormControl(''),
    'id': new FormControl(''),
  });

  constructor(activatedRoute: ActivatedRoute, 
    private maintainance: MaintainanceService, 
    private scheduleService: SchedulingService, 
    private router: Router,
    private functionService: FunctionsService){
    activatedRoute.params.subscribe((params) => {
      if(params.fleetNumber){
        this.maintainance.fetchOneMaintainanceFleet(params.fleetNumber).subscribe((data) => {
          this.maintainanceFleet = data;
          this.scheduleForm.setValue({
            'depot': this.maintainanceFleet.fleet.depot,
            'date': null,
            'id': this.maintainanceFleet.id,
          })
        })
      }
      this.countValue()
    })
  }
  ngOnInit(){
  }

  countValue(){
    this.functionService.fetchcount().subscribe((counted) => {
      this.count = counted
    });
  }

  onSubmit(){
    // this.countValue();
    let capturedData = {
      ticket: this.count.ValueOfCount,
      depot: this.scheduleForm.value.depot,
      date: this.scheduleForm.value.date,
      maintainanceId: this.scheduleForm.value.id
    };

    let ticketData = {
      ticket: this.count.ValueOfCount,
      date: this.scheduleForm.value.date,
    };

    console.log(capturedData);
    this.scheduleService.SchedulingFleet(capturedData);
    this.functionService.ticketFunction(ticketData);
    this.scheduleForm.reset();
  }

}
