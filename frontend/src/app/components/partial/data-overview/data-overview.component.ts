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
  totalMaintainance: CountModel = {count: 200, name: 'Maintainance'};
  totalCompleted: CountModel = {count: 50, name: 'Completed'};
  totalOutstanding: CountModel = {count: 20, name: 'Outstanding'};
  totalOnline: CountModel = {count: 674, name: 'Online'};
  totalOffline: CountModel = {count: 350, name: 'Offline'};

  user!: User;

  totalData: CountModel[] = [this.totalOnline, this.totalOffline, this.totalMaintainance, this.totalCompleted, this.totalOutstanding]

  constructor(public authService: AuthenticateService){
    authService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

}
