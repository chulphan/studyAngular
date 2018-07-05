import { Component, ViewEncapsulation } from '@angular/core';
// ProductService 서비스를 불러온다. 화면에 표시할 데이터는 이 서비스에서 제공한다.
import { Product, ProductService } from '../../services/product.service';

@Component({ // ApplicationComponent 클래스에 @Component 어노테이션을 붙여서 Angular 컴포넌트로 만든다.
  selector : 'auction-application',
  templateUrl : 'app/components/application/application.component.html',
  styleUrls : ['app/components/application/application.component.css'],
  encapsulation : ViewEncapsulation.None
})

export default class ApplicationComponent { // ApplicationComponent 는 다른 클래스인 AppModule 에서 사용되기 때문에 모듈 외부로 공개한다.

}

// 생성자의 인자로 객체를 전달하면 이 객체는 Angular 가 생성하고 주입한다.
// 객체가 주입되려면 프로바이더 설정이 필요하며 이 설정은 이전 AppModule을 정의할 때 작성했다.
