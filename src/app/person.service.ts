import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

    private baseUrl = environment.apiUrl;
  
    constructor(private http: HttpClient) { }
  
    getPerson(id: number): Observable<Object> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createPerson(customer: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, customer);
    }
  
    updatePerson(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
  
    deletePerson(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
  
    getPersonList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
  
    getPersonByName(name: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/name/${name}`);
    }
  
    deleteAll(): Observable<any> {
      return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
    }

}
