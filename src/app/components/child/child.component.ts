import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{

  @Input() postMan;
  @Input() postMan2;

  name ="Sahithi"; 
  @Output() cdata=new EventEmitter();

  sendData()
  {
    this.cdata.emit(this.name);
  }

  

}
