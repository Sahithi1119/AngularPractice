import { Component } from '@angular/core';

@Component({
  selector: 'app-s-interpolation',
  templateUrl: './s-interpolation.component.html',
  styleUrls: ['./s-interpolation.component.css']
})
export class SInterpolationComponent 
{
  name:String="Sahithi";
    student={
        name:"Sai",
        rollno:20,
    };
   
   
   public image:String="assets/images/pic.jpg";
   public img1:String="../../../assets/images/pic.jpg";
}
