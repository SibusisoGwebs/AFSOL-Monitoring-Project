import { Component } from '@angular/core';
import { VideoFootageService } from 'src/app/services/video-footage.service';
import { VideoFootageModel } from 'src/app/shared/videoFootage.model';

@Component({
  selector: 'app-pendingvideofootage',
  templateUrl: './pendingvideofootage.component.html',
  styleUrls: ['./pendingvideofootage.component.scss']
})
export class PendingvideofootageComponent {
  AllVideoFootage: any = []

  constructor(private videoFootageService: VideoFootageService){
    this.videoFootageService.fetchAllRequest().subscribe((data) => {
      this.AllVideoFootage = data;
    })
  }
}
