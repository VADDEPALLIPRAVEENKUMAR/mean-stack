import{RouterModule}from "@angular/router";
import { ReaddataComponent } from 'src/app/components/readdata/readdata.component';
import {CreatereadComponent} from "src/app/components/readdata/createread/createread.component";
import{ Routes} from "@angular/router";
export const mainRoutes:Routes=[
    {path: "list",component: ReaddataComponent},
    {path: "create",component: CreatereadComponent},
  // {path:"",redirectTo:"/list",pathMatch:"full"}

]