import { Injectable } from '@angular/core'; //Allows the service injection in other classes
import { HttpHeaders, HttpClient } from '@angular/common/http'; //Allows Ajax request
import { Observable } from 'rxjs'; //Allows working with observable

@Injectable({
  providedIn: 'root',
})
export class ExternalService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = 'https://reqres.in/';
  }

  getUser(): Observable<any> {
    //Returns observable object of any type
    return this._http.get(this.url + 'api/users/2');
  }

  getThisUser(id): Observable<any> {
    return this._http.get(this.url + 'api/users/' + id);
  }
}
