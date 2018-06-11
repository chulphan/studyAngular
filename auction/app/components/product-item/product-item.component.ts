import { Component, Input } from '@angular/core';
import StarsComponent from 'app/components/stars/stars.component';
import { Product } from 'app/services/product.service';

@Component({
  selector : 'auction-product-item',
  templateUrl : 'app/components/product-item/product-item.component.html'
})

export default class ProductItemComponent {
  // product 프로퍼티가 부모 컴포넌트에서 접근할 수 있도록 컴포넌트 외부로 공개되어있음.
  // 부모 컴포넌트에서 값을 지정할 수 있다는 것을 의미.
  @Input() product : Product;
}
