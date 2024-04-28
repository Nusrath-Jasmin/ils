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
  resetError=false
  constructor(private apicall:ApicallService ,private router: Router){}

  onSubmit(form: NgForm) {
    console.log('Form submitted!');
    this.apicall.login(form.value).subscribe({
      next: (response:any) => {
        if(response.logined){
        localStorage.setItem('tokenIls', response.token);
        if (localStorage.getItem('tokenIls')) {
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

  check(formData: any) {
    console.log("checking");
    console.log(formData);
    this.apicall.isAdmin(formData).subscribe({
      next:res=>{
        if(res.isAdmin){
          this.router.navigate(['/reset-password'])
        }
        else this.resetError=true
      },
      error:err=>{
        this.resetError=true
      }
    })
  }
}
