import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { PersonComponent } from '../person/person.component';
import { ContactComponent } from '../contact/contact.component';
import { PersonService } from './person.service';

@NgModule({
  declarations: [
    PersonComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [PersonComponent]
})
export class PersonModule { }
