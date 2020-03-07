import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
public API_OWNERS = 'https://thawing-chamber-47973.herokuapp.com/owners';
public API_OWNER = 'https://thawing-chamber-47973.herokuapp.com';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.API_OWNERS);
  }

  getOwner(dni):Observable<any>{
    return this.http.get(this.API_OWNER + '/owner?dni=' + dni);
  }

  createOwner(owner):Observable<any>{
    return this.http.post(this.API_OWNERS, owner);
  }

  deleteOwner(href):Observable<any>{
    return this.http.delete(href);
  }

  updateOwner(href, owner):Observable<any>{
        return this.http.put(href, owner);
  }
}
