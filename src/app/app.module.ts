import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { HomeComponent } from './Components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardComponent } from './Components/card/card.component';
import { SpacePipePipe } from './Pipes/space-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    CardComponent,
    SpacePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
