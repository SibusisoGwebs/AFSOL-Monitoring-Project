import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicianService } from 'src/app/services/technician.service';
import { VideoFootageService } from 'src/app/services/video-footage.service';

@Component({
  selector: 'app-closevideofootage',
  templateUrl: './closevideofootage.component.html',
  styleUrls: ['./closevideofootage.component.scss']
})
export class ClosevideofootageComponent {
  videoFootage!: any;
  videoTicket!: string;
  closingVideoFootageForm: FormGroup = new FormGroup({
    'techname': new FormControl('', Validators.required),
    'depot': new FormControl('', Validators.required),
    'refNumber': new FormControl('', Validators.required),
    'dateAndTime': new FormControl('', Validators.required),
    'available': new FormControl('', Validators.required),
    'downloadSuccess': new FormControl('', Validators.required),
    'delivered': new FormControl('', Validators.required),
    'formOfDelivery': new FormControl('', Validators.required)
  })
  showButton: boolean = false;
  showButtonAdd: boolean = true;

  constructor(activatedRoute: ActivatedRoute, private http: HttpClient, private videoFootageService: VideoFootageService, private techService: TechnicianService, private router: Router){
    activatedRoute.params.subscribe((params) => {
      this.showButton = false;
      this.videoTicket = params.videoticket;
      if(params.videoticket){
        this.videoFootageService.fetchOneVideoFootage(params.videoticket).subscribe((data) => {
          this.videoFootage = data;
          // this.closingVideoFootageForm.setValue({
          //   'techname': null,
          //   'depot': null,
          //   'refNumber': null,
          //   'dateAndTime': null,
          //   'available': null,
          //   'downloadSuccess': null,
          //   'delivered': null,
          //   'formOfDelivery': null,
          // })
        })
      }
    })
  }

  deleteFootage(ticket: string){
    this.http.delete(`http://localhost:5000/bureau/video-footage/delete/${ticket}`);
  }

  onSubmit(){
    this.videoFootageService.deleteFootage(this.videoTicket);
    this.closingVideoFootageForm.reset();
    this.router.navigateByUrl('View-Video-Footage');
  }


  onClick(){
    this.showButton = true;
    let historyData = {
      Vticket: this.videoFootage.Vticket,
      requestedBy: this.videoFootage.requestedBy,
      busRegistration: this.videoFootage.busRegistration,
      fleetNumber: this.videoFootage.fleetNumber,
      dateRequest: this.videoFootage.dateRequest,
      dateOfFootage: this.videoFootage.dateOfFootage,
      timePeriod: this.videoFootage.timePeriod,
    }

    this.videoFootageService.addRequestVideoToHistory(historyData);

    // let technician = {
    //   techname: this.closingVideoFootageForm.value.techname,
    //   fleetFleetNumber: this.videoFootage.fleetNumber,
    //   resolution: 'Video Delivered',
    //   ticket: this.videoFootage.Vticket
    // }

    let videoFootageData = {
      tecnician: this.closingVideoFootageForm.value.techname,
      depot: this.closingVideoFootageForm.value.depot,
      refNumber: this.closingVideoFootageForm.value.refNumber,
      dateAndTime: this.closingVideoFootageForm.value.dateAndTime,
      available: this.closingVideoFootageForm.value.available,
      downloadSuccess: this.closingVideoFootageForm.value.downloadSuccess,
      delivered: this.closingVideoFootageForm.value.delivered,
      formOfDelivery: this.closingVideoFootageForm.value.formOfDelivery,
      historyVideoFootageVticket: this.videoTicket
    }

    // this.techService.addCompleteMaintainance(technician);
    this.techService.addToTechOnVideo(videoFootageData);


    console.log(this.closingVideoFootageForm.value);
  }
}
