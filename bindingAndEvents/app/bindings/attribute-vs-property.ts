import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component ({
  selector : 'app',
  template : `
    <h3>Property vs Attribute binding : </h3>
    <input [value]="greeting"
           [attr.value]="greeting"
           (input)="onInputEvent($event)">
  `
})

class AppComponent{
  greeting : string = 'A value';

  onInputEvent (event : Event) : void {
    let inputElement : HTMLInputElement = <HTMLInputElement> event.target;

    console.log(`The input property value = ${inputElement.value}`);
    console.log(`The input attribute value = ${inputElement.getAttribute('value')}`);
    console.log(`The greeting property value = ${this.greeting}`);
  }
}

@NgModule({
  imports : [BrowserModule],
  declarations : [AppComponent],
  bootstrap : [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
