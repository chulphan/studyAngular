import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { LoginGuard } from './guards/login.guard';
import { UnsavedChangesGuard } from './guards/unsaved_changes.guard';

const routes : Routes = [
  { path : '', component : HomeComponent },
  {
    path : 'product', component : ProductDetailComponent,
    canActivate : [LoginGuard], canDeactivate : [UnsavedChangesGuard]
  }
];

@Component({
  selector : 'app',
  template : `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/product']">Product Details</a>
    <router-outlet></router-outlet>
  `
})

class AppComponent {}

@NgModule ({
  imports : [BrowserModule, RouterModule.forRoot(routes)],
  declarations : [AppComponent, HomeComponent, ProductDetailComponent],
  providers : [{ provide : LocationStrategy, useClass : HashLocationStrategy }, LoginGuard, UnsavedChangesGuard],
  bootstrap : [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
