import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { FleetServicesService } from 'src/app/services/fleet-services.service';
import { MaintainanceService } from 'src/app/services/maintainance.service';
import { Fleet } from 'src/app/shared/fleet.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.scss']
})
export class RecordPageComponent implements OnInit {
  user!: User;
  fleet!: Fleet;
  monitorForm = new FormGroup({
    'name': new FormControl(''),
    'fleetFleetNumber': new FormControl(''),
    'status': new FormControl(''),
    'priority': new FormControl(''),
    'description': new FormControl(''),
    // 'depot': new FormControl(''),
    // 'datecheck': new FormControl(''),
    'comment': new FormControl(''),
  })

  constructor(private fleetService: FleetServicesService,
    activatedRoute: ActivatedRoute,
    private maintainService: MaintainanceService,
    private router: Router,
    private authService: AuthenticateService){
    activatedRoute.params.subscribe((params) => {
      if(params.fleetNumber){
        this.fleetService.fetchOneFleet(params.fleetNumber).subscribe((data) => {
          this.fleet = data;
          authService.userObservable.subscribe((newUser) => {
            this.user = newUser;
          });
          console.log(this.fleet);
          // this.fleetService.fetchAllFleet();
          this.monitorForm.setValue({
            'fleetFleetNumber': this.fleet.fleetNumber,
            'name': this.user.name,
            'status': null,
            'priority': null,
            'description': null,
            'comment': null
          });
        });
      }
    })
  }

  ngOnInit(): void {}

  onSubmit(){
    this.maintainService.addFleetToMaintainance(this.monitorForm.value);
    console.log(this.monitorForm.value);
    this.monitorForm.reset();
    this.router.navigateByUrl(this.user.name+'/fleets');
  }

}
