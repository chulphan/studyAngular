import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import ApplicationComponent from './components/application/application.component';
import CarouselComponent from './components/carousel/carousel.component';
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import ProductItemComponent from './components/product-item/product-item.component';
import SearchComponent from './components/search/search.component';
import StarsComponent from './components/stars/stars.component';
import { ProductService } from './services/product.service';
import HomeComponent from './components/home/home.component';
import ProductDetailComponent from './components/product-detail/product-detail.component';
import { FilterPipe } from './components/pipes/filter.pipe';

export const myComponents = [
  ApplicationComponent,
  CarouselComponent,
  FooterComponent,
  NavbarComponent,
  HomeComponent,
  ProductDetailComponent,
  ProductItemComponent,
  SearchComponent,
  StarsComponent,
  FilterPipe
];

@NgModule({
  imports : [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'products/:productId', component : ProductDetailComponent }
    ])
  ],
  declarations : [...myComponents],
  providers : [
    ProductService,
    { provide : LocationStrategy, useClass : HashLocationStrategy }
  ], // 의존성 주입 동작에 필요한 과정. ProductService 가 ApplicationComponent에 주입될 때 사용.
  bootstrap : [ApplicationComponent]
})

export class AppModule {}
