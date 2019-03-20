// // import { NgModule } from '@angular/core';
// // import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineItemsListComponent } from './timeline-items-list/timeline-items-list.component'
import { TimelineItemDetailComponent } from './timeline-item-detail/timeline-item-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ConfigComponent }   from './config/config.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'timelineItems', component: TimelineItemsListComponent },
  { path: 'detail/:id', component: TimelineItemDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}