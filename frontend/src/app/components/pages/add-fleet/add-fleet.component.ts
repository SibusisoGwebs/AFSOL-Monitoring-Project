import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { FleetServicesService } from 'src/app/services/fleet-services.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-add-fleet',
  templateUrl: './add-fleet.component.html',
  styleUrls: ['./add-fleet.component.scss']
})
export class AddFleetComponent {
  addForm: FormGroup = new FormGroup({
    'fleetNumber': new FormControl(''),
    'depot': new FormControl(''),
  })

  constructor(private fleetService: FleetServicesService, private router: Router){

  }

  onSubmit(){
    this.fleetService.addFleet(this.addForm.value);
    console.log(this.addForm.value);
    this.addForm.reset();
    this.router.navigateByUrl('fleets');
  }

}
