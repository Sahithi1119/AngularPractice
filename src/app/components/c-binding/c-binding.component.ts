import { Component } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.css']
})
export class CBindingComponent 
{
  isactive: any=true;
  ispop=false;

  toggleActive()
  {
    this.isactive=!this.isactive;
   
  }

}
