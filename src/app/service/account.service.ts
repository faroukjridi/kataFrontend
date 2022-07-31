import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  public deposit(amount ): Observable<any> {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    return this.http.post<any>(this.url + '/deposit/' + amount, body, { headers })
  }
    public withdrawal(amount ): Observable<any> {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    return this.http.post<any>(this.url + '/withdrawal/' + amount, body, { headers })
  }

  public history(): Observable<any> {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    return this.http.get<any>(this.url + '/history', { headers })
  }
}
