import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  public getCourse()
  {
    return [
      { id: 1, course: 'java', fee: 35000},
      {id: 2,course: 'MYSQL',fee: 30000},
      {id: 3,course: 'HTML/CSS',fee: 15000 },
      {id:4,course:'Angular',fee:25000}
    ];
  };
}
