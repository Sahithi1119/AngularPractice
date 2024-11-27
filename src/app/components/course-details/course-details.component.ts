import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {


  constructor(private _courseService: CourseService ,
    private _router:Router) {};
  
  public courses = this._courseService.getCourse();

  selectCourse(course)
  {
    console.log(course);
    console.log(course.id);
    this._router.navigate(['selected',course.id]) //paramroute means the parmeter is must and should will passed
   // this._router.navigate(['/selectedcourse',{'courseId':course.id,'productId':course.id}]) //query Param means optinal parameters 
  }
}
