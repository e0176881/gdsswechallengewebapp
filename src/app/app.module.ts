import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxDropzoneModule} from "ngx-dropzone";
import { UserspageComponent } from './userspage/userspage.component';
import { UserstableComponent } from './userstable/userstable.component';
import { TableModule } from 'ngx-easy-table';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    UserspageComponent,
    UserstableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // required for input file change detection
    ReactiveFormsModule,
    HttpClientModule, // this is required for the actual http request
    NgxDropzoneModule,
    TableModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
