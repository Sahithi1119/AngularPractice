import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent {

  constructor(private _formBuilder: FormBuilder)
  {
  }

  get userName()
  {
    return this.registrationForm.get('userName');
  }

  get pass()
  {
    return this.registrationForm.get('password');
  }

  registrationForm = this._formBuilder.group({
    "userName":["",[Validators.required,Validators.minLength(5)]],
    "password":[],
    "cPassword":[],
    "email":["",[Validators.required,Validators.email]],
    "city":[],
    "state":[],
    "pincode":[]
  })

 




 //registrationForm= new FormGroup({

//   "userName":new FormControl('',[Validators.required]),
//   "password":new FormControl(''),
//   "cPassword":new FormControl(''),
//   "email":new FormControl(''),
//   "city":new FormControl(''),
//   "state":new FormControl(''),
//   "pincode":new FormControl(''),

// })

}
