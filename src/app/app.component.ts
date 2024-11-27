import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CH17';

  a = true;
  test() {
    var b = 20;
    let c = 50;
    this.a = false;
  }

  test1() {
    this.test();
  }



}
