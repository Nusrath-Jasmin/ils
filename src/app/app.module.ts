import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NewsComponent } from './components/news/news.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    NewsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
