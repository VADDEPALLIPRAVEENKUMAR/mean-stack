import { Component, OnInit } from '@angular/core';
import {Pipe,PipeTransform} from "@angular/core";

@Component({
 // selector:'app-readdata',
  templateUrl: './readdata.component.html',
  styleUrls: ['./readdata.component.css']
})
export class ReaddataComponent implements OnInit {
  employees:Array<any>;
  constructor() { 
    this.employees=[
      {
        id:1,
        name:'Regeena',
        gender:'Male',
        contactPreference:'Email',
        email:'regeena0506@gmail.com',
        dateOfBirth:new Date('08/24/1995'),
        department:'IT',
        isActive:true,
        photoPath:'assets/emp1.png'

      },
      {
        id:1,
        name:'RajKumar',
        gender:'Male',
        contactPreference:'Phone',
        phoneNumber:73987484,
        dateOfBirth: new Date('06/05/1995'),
        department:'IT',
        isActive:true,
        photoPath:'assets/emp 2.png'

      },
      {
        id:1,
        name:'Sony',
        gender:'Male',
        contactPreference:'Email',
        email:'sony@gmail.com',
        dateOfBirth:new Date("10-05-1998"),
        department:'IT',
        isActive:true,
        photoPath:'assets/emp4.png'

      }
    ];
  }

  ngOnInit() {
  }

}
