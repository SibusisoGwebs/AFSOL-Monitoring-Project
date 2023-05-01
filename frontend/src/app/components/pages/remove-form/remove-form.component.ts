import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MaintainanceService } from 'src/app/services/maintainance.service';
import { SchedulingService } from 'src/app/services/scheduling.service';
import { SharedService } from 'src/app/services/shared.service';
import { TechnicianService } from 'src/app/services/technician.service';
import { MaintainanceModel, MaintainModel } from 'src/app/shared/maintain.model';

@Component({
  selector: 'app-remove-form',
  templateUrl: './remove-form.component.html',
  styleUrls: ['./remove-form.component.scss']
})
export class RemoveFormComponent implements OnInit {
  maitainFleet!: any;
  removeForm = new FormGroup({
    'techname': new FormControl('', Validators.required),
    'fleetFleetNumber': new FormControl('', Validators.required),
    'resolution': new FormControl('', Validators.required),
    'ticket': new FormControl('', Validators.required)
  });
  showButton!: boolean;
  location!: any;
  latitude!: number;
  longitude!: number;

  constructor(private maintainService: MaintainanceService,
    activatedRoute: ActivatedRoute,
    private techService: TechnicianService,
    private scheduleService: SchedulingService,
    private sharedService: SharedService){
    activatedRoute.params.subscribe((params) => {
      this.location = this.getGeolocation()
      console.log(this.location)
      this.showButton = false
      if(params.fleetNumber){
        this.maintainService.fetchOneScheduledFleet(params.fleetNumber).subscribe((data => {
          this.maitainFleet = data;
          this.removeForm.setValue({
            'techname': null,
            'fleetFleetNumber': this.maitainFleet.fleetFleetNumber,
            'resolution': null,
            'ticket': this.maitainFleet.schedule.ticket
          })
        }))
      }
    })
  }

  ngOnInit(): void {
  }

  getGeolocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude + " " + position.coords.longitude);
    })
  }

  onSubmit(){
    console.log(this.removeForm.value);
    this.scheduleService.removeSchedule(this.maitainFleet.schedule.ticket)
    this.maintainService.removeFleetFromMaintainance(this.maitainFleet.fleetFleetNumber);
    this.removeForm.reset();
  }

  onClicking(){
    this.showButton = true;
    let historyData = {
      name: this.maitainFleet.name,
      status: this.maitainFleet.status,
      priority: this.maitainFleet.priority,
      description: this.maitainFleet.description,
      datecheck: this.maitainFleet.datecheck,
      comment: this.maitainFleet.comment,
      technicianTicket: this.maitainFleet.schedule.ticket,
    }
    this.techService.addCompleteMaintainance(this.removeForm.value);
    this.sharedService.addToMaintainanceHistory(historyData);
  }
}
