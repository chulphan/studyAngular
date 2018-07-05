import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component ({
  selector : 'app',
  template : `
    <h2>Observable weather</h2>
    <input type="text" placeholder="Enter city" [formControl]="searchInput">
    <h3>{{ temperature }}</h3>
  `
})

export class AppComponent {
  private baseWeatherURL : string = "http://api.openweathermap.org/data/2.5/weather?q=";
  private urlSuffix : string = "&units=metric&appid=767794e9581700138304fc5208e73c6a";

  searchInput : FormControl = new FormControl();
  temperature : string;

  constructor (private http : Http){
    this.searchInput.valueChanges
        .debounceTime(200)
        .switchMap(city => this.getWeather(city))
        .subscribe(
          res => {
            this.temperature =
              `Current temperature is ${res['main'].temp} C, ` +
              `humidity: ${res['main'].humidity}%`;
          },
          err => console.log(`Can't get weather. Error Code: %s, URL: %s`, err.message, err.url),
          () => console.log(`Weather is retrieved`);
        );
  }

  getWeather (city : string) : Observable<Array<string>> {
    return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
               .map (res => {
                 console.log(res.json());
                 return res.json();
               })
               .catch( err => {
                 if (err.status === 404) {
                   console.log(`City ${city} not found`);
                   return Observable.of();
                 } // empty observable
               });
  }
}

@NgModule ({
  imports : [BrowserModule, ReactiveFormsModule, HttpModule],
  declarations : [AppComponent],
  bootstrap : [AppComponent]
})

class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
