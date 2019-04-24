import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe,PipeTransform} from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AggregationComponent } from './components/aggregation/aggregation.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ClickComponent } from './components/click/click.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { ViewparentComponent } from './components/viewparent/viewparent.component';
import { TdfComponent } from './components/tdf/tdf.component';
import {MdfComponent} from "./components/mdf/mdf.component";
import { InterceptorComponent } from './components/interceptor/interceptor.component';
//import { MyInterceptor} from "./components/my.interceptor";
import { PredefinedPipes } from './predefined.pipes';
import{Observable} from "rxjs";
import {Http,Response} from "@angular/http";
import { CountriesService } from './services/countries.http.services';
import { CountriesComponent } from './components/countries/countries.component';

import{HttpModule}from "@angular/http";
import { CustComponent } from './components/cust/cust.component';
import { CustService } from './services/cust.service';
import { IndexComponent } from './components/index/index.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { PagethreeComponent } from './components/pagethree/pagethree.component';
import { RouterModule } from "@angular/router";
//import { appRoutes } from "./app.routes";
import{mainRoutes} from"src/app/components/readdata/main.routes";

//import {MyModule} from "./my.module";
//import { lazyConst } from './app.routes';
import { authService } from './auth.service';
import { ChildoneComponent } from './components/childone/childone.component';
import { ChildtwoComponent } from './components/childtwo/childtwo.component';
import { NestedComponent } from './components/nested/nested.component';
import { ReaddataComponent } from './components/readdata/readdata.component';
import { MainComponent } from './components/readdata/main/main.component';
import { CreatereadComponent } from './components/readdata/createread/createread.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { loginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsService } from './components/products.service';
//import {Pipetransform} from "@angular/core";
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule} from "ngx-bootstrap/datepicker";
import { Login1Component } from './components/login1/login1.component';
import { Demo1Component } from './components/demo1/demo1.component';
//import { Departments} from "src/app/model/departments.model";
// "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css"
// "../node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",

@NgModule({
  declarations: [
  
    AppComponent,
   
   
    AggregationComponent,
    DatabindingComponent,
    ClickComponent,
    NgforComponent,
    ChildComponent,
    ParentComponent,
    ViewchildComponent,
    ViewparentComponent,
    TdfComponent,
    MdfComponent,
    InterceptorComponent,
    CountriesComponent,
    PredefinedPipes,
    CustComponent,
    IndexComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    ChildoneComponent,
    ChildtwoComponent,
    NestedComponent,
    ReaddataComponent,
    MainComponent,
    CreatereadComponent,
    LoginComponent,
    ProductsComponent,
    Login1Component,
    Demo1Component
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule,
    HttpModule,
   BsDatepickerModule.forRoot(),


    
    //PipeTransform,
   // lazyConst,
    //RouterModule.forRoot(appRoutes),
    //MyModule
   RouterModule.forRoot(mainRoutes),
    
    BrowserAnimationsModule
  ],
  providers: [CountriesService,CustService,authService,loginService,ProductsService
   /* {
      provide:HTTP_INTERCEPTORS,
      useClass:
      MyInterceptor,
      multi:true
    }*/
  ],
  bootstrap:[MainComponent]
})
export class AppModule{

}
