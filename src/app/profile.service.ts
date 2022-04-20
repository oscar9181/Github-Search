import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string
  private clientid= '9f0def4db73b382ea480'
  private clientsecret= '86bba7937181b01026e4f49ef0284e0ac6976a37'

  constructor(private http:HttpClient) { 
    this.username ='oscar9181'
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.
    clientid +"&client_secret=" + this.clientsecret)
    .pipe(map(res => res))
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id" + this.
  clientid +"&client_secret=" + this.clientsecret)
  .pipe(map(res => res))

}
}