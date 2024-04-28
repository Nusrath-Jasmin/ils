import { Component } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { Blog } from 'src/app/components/blog.interface'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent {
  blogs!:Blog[]
  noitem=false
  
  constructor(private apiService: ApicallService) { }

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.apiService.getBlogs().subscribe({
      next:(res:Blog[])=>{
        this.blogs=res
      },
      error:err=>{
        this.blogs=[]
      }
    });
  }
}
