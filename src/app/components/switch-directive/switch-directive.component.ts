import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent {
  selectvalue:any="three";
  changeValue(newValue:string)
  {
    this.selectvalue=newValue;
  }
}
