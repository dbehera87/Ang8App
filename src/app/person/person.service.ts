import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Person } from './Entity/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get<Person[]>('./assets/datasource/persons.json');

    //return this.http.post('./assets/datasource/persons.json',{});

    // let headerData = new HttpHeaders({
    //   'Content-Type':'application/json',
    //   'Authorization' : 'Bearer <token>'
    // });
    // this.http.get('http://localhost:8080/api/persons', { headers: headerData});

    //CORS
  }
}
