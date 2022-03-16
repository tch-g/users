import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: "root",
})
export class ApiService  {
 


  constructor(private http: HttpClient,) {}
  
  getUsers(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
 // get all post with out filter user id
  getPosts(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }
//find user
  find(id:number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  //find posts wich belongs user
  findPost(userId:any): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
  }


  
}