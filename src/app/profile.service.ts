import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string
  private clientid= '902a4af2571ddfa342d3'
  private clientsecret= '24fea8a1a3416ecdf4360fdd943c8833f24189bf'

  constructor(private http:HttpClient) { 
    this.username ='oscar9181'
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.
    clientid +"&client_secret=" + this.clientsecret)
    .pipe(map(res => res))
}
}