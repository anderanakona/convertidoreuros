import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionFormComponent } from './components/conversion-form/conversion-form.component';

//importar los servicios
import {MonedaConversionService} from './services/moneda-conversion.service';
@NgModule({
  declarations: [
    AppComponent,
    ConversionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [MonedaConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
