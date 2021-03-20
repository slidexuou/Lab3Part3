import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { HomeComponent } from './home/home.component';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, CatalogModule, HomeModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
