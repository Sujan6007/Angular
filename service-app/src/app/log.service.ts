import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
    
   }
  check(msg:any){
    console.log('message from data service '+msg)
  }

}
