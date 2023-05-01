import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFleetComponent } from './components/pages/add-fleet/add-fleet.component';
import { AllschedulesComponent } from './components/pages/allschedules/allschedules.component';
import { ClosevideofootageComponent } from './components/pages/closevideofootage/closevideofootage.component';
import { DetailedHistMainComponent } from './components/pages/detailed-hist-main/detailed-hist-main.component';
import { FleetPageComponent } from './components/pages/fleet-page/fleet-page.component';
import { FleetbookingComponent } from './components/pages/fleetbooking/fleetbooking.component';
import { HistoryMaintainComponent } from './components/pages/history-maintain/history-maintain.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MaintainanceListComponent } from './components/pages/maintainance-list/maintainance-list.component';
import { MonitoringPageComponent } from './components/pages/monitoring-page/monitoring-page.component';
import { PendingvideofootageComponent } from './components/pages/pendingvideofootage/pendingvideofootage.component';
import { RecordPageComponent } from './components/pages/record-page/record-page.component';
import { RemoveFormComponent } from './components/pages/remove-form/remove-form.component';
import { VideofootageComponent } from './components/pages/videofootage/videofootage.component';
import { AddUserComponent } from './components/pages/add-user/add-user.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'fleets', component: FleetPageComponent},
  {path: 'add-fleet', component: AddFleetComponent},
  {path:'search/:searchTerm', component:FleetPageComponent},
  {path: 'record-page/:fleetNumber', component: RecordPageComponent},
  {path: 'fleet-monitor', component: MonitoringPageComponent},
  {path: 'fleet-monitor/:searchTerm', component: MonitoringPageComponent},
  {path: 'fleet-maintainance-list', component: MaintainanceListComponent},
  {path: 'remove-page/:fleetNumber', component: RemoveFormComponent},
  {path: 'booking-page/:fleetNumber', component: FleetbookingComponent},
  {path: 'All-Schedules', component: AllschedulesComponent},
  {path: 'History-Maintainance', component: HistoryMaintainComponent},
  // {path: 'History-Maintainance/more', component: DetailedHistMainComponent},
  {path: 'History-Maintainance/more/:ticket', component: DetailedHistMainComponent},
  {path: 'Video-Footage', component: VideofootageComponent},
  {path: 'View-Video-Footage', component: PendingvideofootageComponent},
  {path: 'Close-Video-Footage/:videoticket', component: ClosevideofootageComponent},
  {path: 'admin/add-user', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
