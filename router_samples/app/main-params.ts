import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponentParam } from './components/product-param.component';

const routes : Router = [
  { path : '', component : HomeComponent },
  { path : 'product/:id', component : ProductDetailComponentParam }
];

@Component ({
  selector : 'app',
  template : `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product', 'aaa']">Product Details</a>
    <router-outlet></router-outlet>
  `
})

class AppComponent {}

@NgModule ({
  imports : [BrowserModule, RouterModule.forRoot(routes)],
  declarations : [AppComponent, HomeComponent, ProductDetailComponentParam],
  providers : [ { provide : LocationStrategy, useClass : HashLocationStrategy }],
  bootstrap : [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
