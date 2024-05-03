import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
    FormsModule
    

  ],

  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
