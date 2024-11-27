import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
    public title:string="hello world";
    public todaydate: Date=new Date(2002,5,20);
 public jsonval: any;
months: any='January';
   

}
