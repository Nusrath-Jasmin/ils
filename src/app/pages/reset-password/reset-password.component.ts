import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  showmsg=false
  error=false
  constructor(private apicall: ApicallService , private router:Router) {}

  resetPassword() {
    if (this.password !== this.confirmPassword) {
      this.showmsg=true
      console.error('Passwords do not match.');
      return;
    }

    this.apicall.resetPassword({password:this.password}).subscribe({
      next:(res:any) => {
        if(res.reset){
        console.log('Password reset successfully.');
          this.router.navigate(['/login'])
        }
        else{
          this.error=true
        }
      },
      error:() => {
        console.error('Error resetting password:');
        this.error=true
      }}
    );
  }
}
