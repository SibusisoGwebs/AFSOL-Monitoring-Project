import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';
import { VideoFootageService } from 'src/app/services/video-footage.service';

@Component({
  selector: 'app-videofootage',
  templateUrl: './videofootage.component.html',
  styleUrls: ['./videofootage.component.scss']
})
export class VideofootageComponent {
  VideoTicket: any = {valueOfCount: ''};
  allVideoRequest!: any;
  videoFootageForm: FormGroup = new FormGroup({
    'Vticket': new FormControl(''),
    'requestedBy': new FormControl(''),
    'busRegistration': new FormControl(''),
    'fleetNumber': new FormControl(''),
    'dateRequest': new FormControl(''),
    'dateOfFootage': new FormControl(''),
    'timePeriod': new FormControl(''),
  })

  constructor(private videoFootageService: VideoFootageService, private functionservice: FunctionsService, private router: Router) {
    this.GenerateVTicket()
  }

  GenerateVTicket(){
    this.functionservice.fetchVideofootageTicket().subscribe(data => {
      this.VideoTicket = data;
      this.videoFootageForm.setValue({
        'Vticket': this.VideoTicket.valueOfCount,
        'requestedBy': '',
        'busRegistration': '',
        'fleetNumber': '',
        'dateRequest': '',
        'dateOfFootage': '',
        'timePeriod': '',
      })
    })
  }

  onSubmit(){

    let PostData = {
      Vticket: this.videoFootageForm.value.Vticket,
      requestedBy: this.videoFootageForm.value.requestedBy,
      busRegistration: this.videoFootageForm.value.busRegistration,
      fleetNumber: this.videoFootageForm.value.fleetNumber,
      dateRequest: this.videoFootageForm.value.dateRequest,
      dateOfFootage: this.videoFootageForm.value.dateOfFootage,
      timePeriod: this.videoFootageForm.value.timePeriod,
    }

    let PostVticket = {
      ticket: this.VideoTicket.valueOfCount
    }

    this.videoFootageService.addRequestVideo(PostData);
    this.functionservice.PostVideofootageTicket(PostVticket);
    this.videoFootageForm.reset();
    this.router.navigateByUrl('View-Video-Footage')
  }

}
