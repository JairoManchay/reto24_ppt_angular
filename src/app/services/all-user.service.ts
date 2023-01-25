import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  constructor(private http: HttpClient) { }

  urlUser = environment.Api_url + 'users/';

  getAllUser(): Observable<string>{
    return this.http.get<string>(this.urlUser);
  }
}
