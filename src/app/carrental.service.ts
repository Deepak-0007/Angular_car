import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrental } from './carrental';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrentalService {
  private baseURL ="http://localhost:8080/api/v1/cars"
  constructor(private httpClient: HttpClient) { }
  getCarrentalList():Observable<Carrental[]>{
    return this.httpClient.get<Carrental[]>(`${this.baseURL}`);
  }
  createCarrental(save:Carrental):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, save);
  }
  getEmployeeById(id: number): Observable<Carrental>{
    return this.httpClient.get<Carrental>(`${this.baseURL}/${id}`);
  }
  updateCarrental(id: number, carrental: Carrental): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,carrental);

  }
  deleteCarrental(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

