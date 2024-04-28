import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/components/blog.interface';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  post: Blog = { title: '', content: '' };
  error=false;
  errmsg=false;
  constructor(private apiService: ApicallService , private router:Router) {}

  submitPost() {
    if (!this.post.title || !this.post.content) {
      console.error('Title and content are required.');
      this.error=true;
      return;
    }

    this.apiService.postBlogs(this.post).subscribe({
      next:res=>{
        console.log(res);
        
        if(res.posted){
          this.router.navigate(['/news'])
        }
        else{
          this.errmsg=true
        }
      },
      error:err=>{
        this.errmsg=true
      }
    });
  }

  logout(){
    localStorage.removeItem('tokenIls');
    this.router.navigate(['/login'])
  }
}
