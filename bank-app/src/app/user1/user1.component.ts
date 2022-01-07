import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  msg:any=[];
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }
  ngDoCheck():void{
    this.msg=this.data.callData();
  }
  send(msg:any):void
  {
    this.msg = this.data.dataServe("User 1 : "+msg);
    
    // console.log(`from:peter ${msg}`);
    // this.msg=`Ramesh : ${msg}`;
  }

}
