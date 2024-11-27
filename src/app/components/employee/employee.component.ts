import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
empForm: any;
  data: any;

  constructor(private _addEmployee:ProductsService){}
  
  emp=[{id:'',
        name:'',
        dept:'',
        mobile:'',
        salary:''
  }];


postData(emp) 
{
  console.log(emp.value);

  //need to integrate with api //with spring api
  this._addEmployee.addEmp(emp.value).subscribe(
    (res) => {
      console.log(res);
      this.emp=res;
    }
  )

    
}


getData(){
  this._addEmployee.getEmp().subscribe(
    (res)=>
    {
      console.log(res);
      this.data=res;
    }
  )
}





}