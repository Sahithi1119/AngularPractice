import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent 
{
  public test()
  {
    console.log("Click event");
  }

  test1()
  {
    console.log("Double click event");
  }

  onmouseOver()
  {
    console.log("mouse over event");
  }

  onmouseOut()
  {
    console.log("mouse out event");
  }

  onmousemove()
  {
    console.log("mouse move event");
  }
  onmousedown()
  {
    console.log("mouse down event");
  }

  kdown()
  {
    console.log("key down");
  }

  public kup()
  {
    console.log("Key up event");
  }

  kpress()
  {
    console.log("key press event");
  }
  onfocus()
  {
    console.log("focus event");
  }

  onfocusin()
  {
    console.log("focus in");
  }

  onfocusout()
  {
    console.log("focus out");
  }

  onblur()
  {
    console.log("blur event");
  }

  oninput()
  {
    console.log("input event");
  }
}
