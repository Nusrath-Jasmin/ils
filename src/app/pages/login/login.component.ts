import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error=false;

  constructor(private apicall:ApicallService ,private router: Router){}

  onSubmit(form: NgForm) {
    console.log('Form submitted!');
    this.apicall.login(form.value).subscribe({
      next: (response:any) => {
        if(response.logined){
        localStorage.setItem('token', response.token);
        if (localStorage.getItem('token')) {
            this.router.navigate(['/add-blog']);
          }
          console.log(response);
        }else{
          this.error=true
        }
        },
      error: (error:any) => {
        console.log(error);
        this.error=true
      },
    });
  }
}
