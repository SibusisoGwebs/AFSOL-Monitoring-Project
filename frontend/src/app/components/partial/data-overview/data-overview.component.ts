import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { CountModel } from 'src/app/shared/count.model';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-data-overview',
  templateUrl: './data-overview.component.html',
  styleUrls: ['./data-overview.component.scss']
})
export class DataOverviewComponent {
  totalMaintainance: CountModel = {count: 0, name: '--'};
  totalCompleted: CountModel = {count: 0, name: '--'};
  totalOutstanding: CountModel = {count: 0, name: '--'};
  totalOnline: CountModel = {count: 0, name: '--'};
  totalOffline: CountModel = {count: 0, name: '--'};

  user!: User;

  totalData: CountModel[] = [this.totalOnline, this.totalOffline, this.totalMaintainance, this.totalCompleted, this.totalOutstanding]

  constructor(public authService: AuthenticateService){
    authService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

}
