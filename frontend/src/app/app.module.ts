import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FleetPageComponent } from './components/pages/fleet-page/fleet-page.component';
import { MonitoringPageComponent } from './components/pages/monitoring-page/monitoring-page.component';
import { HeaderComponent } from './components/partial/header/header.component';
import { SearchComponent } from './components/partial/search/search.component';
import { RecordPageComponent } from './components/pages/record-page/record-page.component';
import { MaintainanceListComponent } from './components/pages/maintainance-list/maintainance-list.component';
import { AddFleetComponent } from './components/pages/add-fleet/add-fleet.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RemoveFormComponent } from './components/pages/remove-form/remove-form.component';
import { FleetbookingComponent } from './components/pages/fleetbooking/fleetbooking.component';
import { AllschedulesComponent } from './components/pages/allschedules/allschedules.component';
import { HistoryMaintainComponent } from './components/pages/history-maintain/history-maintain.component';
import { DataOverviewComponent } from './components/partial/data-overview/data-overview.component';
import { DetailedHistMainComponent } from './components/pages/detailed-hist-main/detailed-hist-main.component';
import { VideofootageComponent } from './components/pages/videofootage/videofootage.component';
import { ClosevideofootageComponent } from './components/pages/closevideofootage/closevideofootage.component';
import { PendingvideofootageComponent } from './components/pages/pendingvideofootage/pendingvideofootage.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './components/pages/add-user/add-user.component'
import { ShortenPipe } from './shared/Features/shorten.pipe';
import { MonitorsComponent } from './components/pages/monitors/monitors.component';
import { BackButtonComponent } from './components/partial/back-button/back-button.component';
import { HeatmapComponent } from './components/pages/heatmap/heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FleetPageComponent,
    MonitoringPageComponent,
    HeaderComponent,
    SearchComponent,
    RecordPageComponent,
    MaintainanceListComponent,
    AddFleetComponent,
    LoginComponent,
    RemoveFormComponent,
    FleetbookingComponent,
    AllschedulesComponent,
    HistoryMaintainComponent,
    DataOverviewComponent,
    DetailedHistMainComponent,
    VideofootageComponent,
    ClosevideofootageComponent,
    PendingvideofootageComponent,
    AddUserComponent,
    ShortenPipe,
    MonitorsComponent,
    BackButtonComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    }),
    // GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
