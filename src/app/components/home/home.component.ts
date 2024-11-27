import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit()
  {
    let p=new Promise(
      (resolved,rejected) =>{
        console.log("Promise block");
        resolved("this sucess response");
        rejected("this is failure response");
      }
    )
    p.then(
      (res)=>
      {
        console.log("Sucess");
        console.log(res);
      },
      (fail)=>
      {
        console.log("failure");
        console.log(fail);
      }
    )

    let o=new Observable(
      (response) =>{
        console.log("this is observable");
        
      }
    )
    o.subscribe(
      (res)=>{
        console.log("sucess block");
        console.log(res);
      },
      (res)=>
      {
        console.log("Error block");
        console.log(res);
      },
      ()=>
      {
        console.log("complete block");
      }
    );
  }


}
