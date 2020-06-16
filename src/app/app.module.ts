import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { VideosByDomaineComponent } from './videos-by-domaine/videos-by-domaine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    VideosByDomaineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
