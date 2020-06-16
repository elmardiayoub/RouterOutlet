import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { VideosByDomaineComponent } from './videos-by-domaine/videos-by-domaine.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'videos', component: VideosComponent,
    children : [
      { path: 'videos1', component: VideosByDomaineComponent, outlet: 'route1' }
    ]
  },

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
