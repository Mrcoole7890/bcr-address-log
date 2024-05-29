import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmedAddressListComponent } from './components/confirmed-address-list/confirmed-address-list.component';
import { NewAddressFormComponent } from './components/new-address-form/new-address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfirmedAddressListComponent,
    NewAddressFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
