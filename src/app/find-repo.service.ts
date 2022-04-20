import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Injectable(
  //{
 // providedIn: 'root'
//}
)
export class FindRepoService {
  private repository!:string
  private clientid= '9f0def4db73b382ea480'
  private clientsecret= '86bba7937181b01026e4f49ef0284e0ac6976a37';


  constructor(private http: HttpClient) { }
  getProfileRepos(){
    return this.http.get(`https://api.github.com/search/repositories?q=${this.repository}&client_secret=${this.clientSecret}`).pipe(map(res => res))

  }
  updateProfile(repository: string) {
    this.repository=repository;
  }
}