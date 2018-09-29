import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*Routing*/
import { AppRoutingModule } from './app-routing/app-routing.module';

/*Service*/
import { DataService } from './service/data.service';
import { DetailService } from './service/detail.service';

import { AppComponent } from './app.component';
import { DetailComponent } from './simple/detail/detail.component';
import { PortalComponent } from './simple/portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    DetailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
