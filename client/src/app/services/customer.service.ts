import { CustomerModel } from './../models/customer-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomer(){
    return this.http.get<CustomerModel[]>("http://localhost:3000/customers")
    .pipe(map((res:any) => {
      return res;
    }))
  }
}
