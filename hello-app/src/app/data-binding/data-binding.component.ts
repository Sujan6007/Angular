import { Component, OnInit } from '@angular/core';



@Component({
selector: 'app-data-binding',
templateUrl: './data-binding.component.html',
styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
uname:string='Sujan';
city:string='Bangalore';
name= 'THBS';
year=1999;
source:string="assets/animal.jpg";
high:number=300;
lenth:number=300;
source1:string="assets/animal2.jpg";
enable:boolean=false;
string1:string="hello";
number1:number=70;
age:number=21;
stringData:string="Hello Everyone";
source2:string="assets/animal3.jpeg";
val:string=' '
tname:string=' '
constructor() { }



ngOnInit(): void {
}
getDetails()
{
return`hi this is ${this.uname} and city is ${this.city}`;
}
getAlldata1(){
return`This is ${this.string1} and number is ${this.number1}`;
}
getPersonalDetails(){
return `hi i am ${this.uname} and age is ${this.age}`;
}
demo(v1:any,v2:any){
  this.val=v1+v2;
}
twoway(a:any){
  this.tname=a;
}
}

