import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
       blogs:any=[]
      constructor (private _blogs:BlogService){
           
        _blogs.getblog().subscribe(
            (data:any)=>{this.blogs=data;
               console.log(this.blogs); }
            
        )
      }
 
  }

