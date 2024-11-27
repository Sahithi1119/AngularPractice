import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CareersComponent } from './components/careers/careers.component';
import { SInterpolationComponent } from './components/s-interpolation/s-interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { EBindingComponent } from './components/e-binding/e-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CBindingComponent } from './components/c-binding/c-binding.component';
import { ClsBindingComponent } from './components/cls-binding/cls-binding.component';
import { IfDirectiveComponent } from './components/if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './components/switch-directive/switch-directive.component';
import { ForComponent } from './components/for/for.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { PipesComponent } from './components/pipes/pipes.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactFormComponent } from './components/react-form/react-form.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseService } from './services/course.service';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { SelectedcourseComponent } from './components/selectedcourse/selectedcourse.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgOnCHANGEsHOOkComponent } from './components/ng-on-changes-hook/ng-on-changes-hook.component';
import { SquarePipe } from './pipe/square.pipe';
import { CubePipe } from './pipe/cube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CareersComponent,
    SInterpolationComponent,
    PBindingComponent,
    EBindingComponent,
    TwoWayBindingComponent,
    CBindingComponent,
    ClsBindingComponent,
    IfDirectiveComponent,
    SwitchDirectiveComponent,
    ForComponent,
    ParentComponent,
    ChildComponent,
    PagenotfoundComponent,
    PipesComponent,
    TdfComponent,
    ReactFormComponent,
    CourseComponent,
    CourseDetailsComponent,
    ProductsComponent,
    SelectedcourseComponent,
    EmployeeComponent,
    NgOnCHANGEsHOOkComponent,
    SquarePipe,
    CubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
