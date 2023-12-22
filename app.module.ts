import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // Make sure to import ReactiveFormsModule

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';  // Import your ContactFormComponent

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,  // Include ContactFormComponent in declarations
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
