import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departments} from"src/app/model/departments.model";
import { BsDatepickerConfig} from "ngx-bootstrap/datepicker";

@Component({
 // selector:'app-createread',
  templateUrl: './createread.component.html',
  styleUrls: ['./createread.component.css']
})
export class CreatereadComponent implements OnInit {
  colorTheme = 'theme-blue';
  bsConfig: Partial<BsDatepickerConfig>;
  departments:Array<any>=[
    {"id":1,"name":"MCA"},
    {"id":2,"name":"MBA"},
    {"id":3,"name":"HR"},
    {"id":4,"name":"EEE"}
  ];
  previewPhoto:boolean;
  constructor() {
       this.bsConfig = Object.assign({},{ ContainerClass: this.colorTheme, showWeekNumbers:true,minDate:new Date(1990,0,1),maxDate:new Date(2018,11,31)});
   }
   applyTheme(pop: any) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: "theme-dark-blue" });
    setTimeout(() => {
      pop.show();
    });
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  
  ngOnInit() {
  }
  saveEmployee(employeeForm:NgForm):void{
    console.dir(employeeForm.value);
  }
 
}
