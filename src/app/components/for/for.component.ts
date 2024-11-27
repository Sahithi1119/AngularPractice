import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {

  names=["Sahithi","deepu" ,"java"]
  public emp =[
                {
                  id:1,
                  name:'Sai',
                  age:24
                },
                {
                  id:2,
                  name:'sonu',
                  age:20
                },
                {
                  id:3,
                  name:'deepu',
                  age:21
                }
  ]


}
