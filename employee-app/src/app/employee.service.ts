import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _URL:string="http://localhost:8080";
  constructor(private http:HttpClient) { }

saveEmp(emp:Employee):Observable<Employee>{

  return this.http.post<Employee>(`${this._URL}/saveStd`,emp);
  
}
getAllEmp():Observable<Employee[]>{
  return this.http.get<Employee[]>(`${this._URL}/Students`);
}
}