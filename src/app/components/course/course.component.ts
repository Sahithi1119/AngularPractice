import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent 
{
  constructor(private _courseService:CourseService ){}
  
  public courses = this._courseService.getCourse();

}
