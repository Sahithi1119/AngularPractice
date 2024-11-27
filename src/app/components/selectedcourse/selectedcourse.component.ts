import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css']
})
export class SelectedcourseComponent {

  courseid:any;
  constructor(private _activated:ActivatedRoute,
    private _CourseData:CourseService){}

  //ActivatedRoute class is used to get the values in root
  //ActivatedRoute has snapshot
  //this.courseId=parseInt(this._activated.snapshot.paramMap.get('id'))
  ngOnInit()
  {
    this.courseid=parseInt(this._activated.snapshot.paramMap.get('id'));
  }

  public course=this._CourseData.getCourse();

  myClass="true";
}
