import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, Review, ProductService } from '../../services/product.service';

@Component ({
  selector : 'auction-product-page',
  // template : `
  //   <div>
  //     <img src="http://placehold.it/820x320">
  //     <h4>{{ productTitle }}</h4>
  //   </div>
  // `
  templateUrl : 'app/components/product-detail/product-detail.component.html'
})

export default class ProductDetailComponent {
  product : Product;
  reviews : Review[];

  constructor (route : ActivatedRoute, productService : ProductService) {
    // this.productTitle = route.snapshot.params['prodTitle'];
    let prodId : number = parseInt(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
  }
}
