import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { OverviewComponent } from './modules/dashboard/components/overview/overview.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
