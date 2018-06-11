import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './app.routing';

@NgModule ({
  imports : [
    BrowserModule,
    routing
  ],
  declarations : [
    AppComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  providers : [{ provide : LocationStrategy, useClass : HashLocationStrategy }],
  bootstrap : [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
