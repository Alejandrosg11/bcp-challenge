import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipePipe } from './safe-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AgencyListComponent,
    AgencyDetailComponent,
    SafePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
