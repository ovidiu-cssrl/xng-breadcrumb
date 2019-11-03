import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { HomeComponent } from './home/home.component';

// when deafalt route has no path or breadcrumb diplay home
export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      breadcrumb: {
        label: '',
        info: 'home'
      }
    }
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: {
      breadcrumb: 'my dashboard'
    }
  },
  {
    path: 'mentor',
    loadChildren: './mentor/mentor.module#MentorModule'
  },
  {
    path: 'mentee',
    loadChildren: './mentee/mentee.module#MenteeModule'
  },
  {
    path: 'connect',
    loadChildren: './connect/connect.module#ConnectModule'
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
