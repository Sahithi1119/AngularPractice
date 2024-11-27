import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  [x: string]: any;

  user=new User("Sahithi","sahithi@gmail.com","9948261327","female","");

constructor(private _addData:ProductsService){};

ngOnInit()
{
  this.postData(this.formdata);
};

postData(formData) 
{
  console.log(formData.value);

  //need to integrate with api //with spring api
  this._addData.addproducts(this.user).subscribe(
    (res)=>{
      console.log(res);
    }
  )

  
}

}
