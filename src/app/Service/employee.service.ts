import { Employee } from './../Model/users/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/users/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8181/USERS/employee/list";
  private baseURL1 = "http://localhost:8181/USERS/employee/add";
  private baseURL2 = "http://localhost:8181/USERS/employee/customerDelete";
  

  constructor(public http: HttpClient) { }


  getEmployeeList(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseURL}`);
  }

  saveEmployee(employees: Employee): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.baseURL1}`, employees);
  }

  getEmployeeById(uuid: String): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseURL}/${uuid}`);
  }

  updateEmployee(uuid: String, employees: Employee): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(`${this.baseURL}/${uuid}`, employees);
  }

  deleteEmployee(uuid: String): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.baseURL2}/${uuid}`);
  }



}
