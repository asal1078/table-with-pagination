import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LIST } from 'src/app/models/listModel'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  public getList<T>() {
    const _url = 'https://jsonplaceholder.typicode.com/todos';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<Array<LIST>>(_url, {
      headers : headers
    })
  }

}
