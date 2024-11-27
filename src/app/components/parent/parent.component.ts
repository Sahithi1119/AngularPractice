import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  msg="This msg is from parent";
  msg2="this msg is also from parent";

  test;

  receiveMsg(value){
    this.test=value;
    console.log(value);
    console.log(this.test);

  }

}
