import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent
{
  data: any;
  fname:any;
  getusername(input)
  {
    console.log(input.value);
    this.data=input.value;
  }

}
