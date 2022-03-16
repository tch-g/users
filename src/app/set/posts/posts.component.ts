import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
userId:any
posts:any
users:any
id:any
  constructor(private apiService: ApiService, private router: Router,  private route: ActivatedRoute,) { }

  ngOnInit(): void {
    
    this.userId = this.route.snapshot.params['usersId'];

    this.apiService.findPost(this.userId).subscribe((Posts: any)=>{
      this.posts = Posts
    });  
    
  }

  list(){
    this.router.navigate(['list']);
  }

  
}
