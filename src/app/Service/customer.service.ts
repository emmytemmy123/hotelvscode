import { Customer } from 'src/app/Model/users/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Model/users/customer';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private baseURL = "http://localhost:8181/USERS/customer/list";
private baseURL1 = "http://localhost:8181/USERS/customer/add";
private baseURL2 = "http://localhost:8181/USERS/customer/customerDelete";
private baseURL3 = "http://localhost:8181/USERS/image/add";



  constructor(private http: HttpClient) { }
 

  getCustomerList(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseURL}`);
  }

  saveCustomer(customers: Customer): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.baseURL1}`, customers);
  }

  getCustomerById(uuid: String): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseURL}/${uuid}`);
  }

  updateCustomer(uuid: String, customers: Customer): Observable<ApiResponse>{
    return this.http.put<ApiResponse>(`${this.baseURL}/${uuid}`, customers);
  }

  deleteCustomer(uuid: String): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.baseURL2}/${uuid}`);
  }
 
  saveImage(customers: Customer): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.baseURL1}`, customers);
  }



}
