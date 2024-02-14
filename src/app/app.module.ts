import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashModule } from './layout/dashboard/dashboard.module';
import { FullNamePipe } from './shared/full-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './core/services/course-mockup.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
