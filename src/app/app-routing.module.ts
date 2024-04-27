import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsComponent } from './pages/news/news.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',component:HomeComponent},
  { path: 'courses',component:CoursesComponent},
  { path: 'login',component:LoginComponent},
  { path: 'news',component:NewsComponent},
  { path:'reset-password',component:ResetPasswordComponent},
  { path:'add-blog',component:AddBlogComponent
  }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
