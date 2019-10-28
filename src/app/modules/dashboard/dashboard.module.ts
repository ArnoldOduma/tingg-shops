import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../../environments/environment.prod';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    NavBarComponent
  ],
  imports: [

  AppRoutingModule,
    HttpClientModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAPS_API_KEY
    })
  ],
  providers:[ApiService]
})
export class DashboardModule { }
