// src/app/services/employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = `${environment.apiUrl}/employees`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
  create(employee: any) {
    return this.http.post(this.baseUrl, employee);
  }
  update(id: number, employee: any) {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }
  
  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text'
    });
  }
  
  
  
}
