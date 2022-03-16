import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  id!: number;
  users:any
  posts:any
  userId:any
  constructor(private apiService: ApiService, private router: Router,  private route: ActivatedRoute,) { }

  ngOnInit(): void {

    // find user's post page wich equal [userId = userId]
    this.id = this.route.snapshot.params['usersId'];
      
    this.apiService.find(this.id).subscribe((Users: any)=>{
      this.users = Users;
    });  
    


  }

  back(){
    this.router.navigate(['list']);
  }

}
