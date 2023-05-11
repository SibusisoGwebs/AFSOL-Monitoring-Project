import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MonitorsService } from 'src/app/services/monitors.service';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent {
  monitorForm: FormGroup = new FormGroup({
    'name': new FormControl(''),
    'depot': new FormControl('')
  })

  constructor(private monitorsService: MonitorsService, private router: Router){}


  onSubmit(){
    this.monitorsService.addMonitor(this.monitorForm.value);
    this.monitorForm.reset();
  }

  onClick(){
    this.monitorsService.clearAllMonitors();
  }
}
