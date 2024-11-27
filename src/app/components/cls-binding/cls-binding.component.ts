import { Component } from '@angular/core';

@Component({
  selector: 'app-cls-binding',
  templateUrl: './cls-binding.component.html',
  styleUrls: ['./cls-binding.component.css']
})
export class ClsBindingComponent {
  active: any = false;

  test = "isactive";

  myGroup = {
    isactive: false,
    inactive: true,
    colortext: false
  }

  ngOnInit() {
    console.log("this is hook");

    setTimeout(
      () => {
        this.myGroup = {
          /*isactive: false,
          inactive: false,
          colortext: true*/
          ...this.myGroup,
          isactive:false,
          colortext:true
        }
      }, 5000)
  }
  constructor() {
    console.log("Constructor");
  }
}
