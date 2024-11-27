import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfDirectiveComponent } from './components/if-directive/if-directive.component';
import { HomeComponent } from './components/home/home.component';
import { SInterpolationComponent } from './components/s-interpolation/s-interpolation.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SwitchDirectiveComponent } from './components/switch-directive/switch-directive.component';
import { ForComponent } from './components/for/for.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactFormComponent } from './components/react-form/react-form.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ProductsComponent } from './components/products/products.component';
import { SelectedcourseComponent } from './components/selectedcourse/selectedcourse.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { ClsBindingComponent } from './components/cls-binding/cls-binding.component';
import { NgOnCHANGEsHOOkComponent } from './components/ng-on-changes-hook/ng-on-changes-hook.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'if',
    component:IfDirectiveComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pipe',
    component:PipesComponent
  },
  {
    path:'interpolation',
    component:SInterpolationComponent
  },
  {
    path:'switch',
    component:SwitchDirectiveComponent
  },
  {
    path:'tdf',
    component:TdfComponent
  },
  {
    path:'for',
    component:ForComponent
  },
  {
    path:'react',
    component:ReactFormComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'details',
    component:CourseDetailsComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'Employee',
    component:EmployeeComponent
  },
  {
    path:'property',
    component:PBindingComponent
  },
  {
    path:'cls',
    component:ClsBindingComponent
  },
  {
    path:'selected/:id', //DynamicPath //ParamRoute
    component:SelectedcourseComponent
  },
  {
    path:'onChanges',
    component:NgOnCHANGEsHOOkComponent
  },
  { 
    path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) 
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
