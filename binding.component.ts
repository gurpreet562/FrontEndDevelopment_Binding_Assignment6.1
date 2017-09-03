import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
          name:string;
          age:number;
  
ngOnInit(){
  this.name="abc"
  this.age=20
}
}
