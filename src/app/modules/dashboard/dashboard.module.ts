import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


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
    RouterModule.forChild(
      DASHBOARD_ROUTES
    ),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAoN8Mzv8eA-BBI3M_zsiQJdUg5jtwXaQk'
    })
  ],
  providers:[ApiService]
})
export class DashboardModule { }
