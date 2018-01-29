import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class WeatherService {
  headers: any;
  constructor(private http: Http) { }

  getWeather(zipCode) {
    return this.http.get(environment.openWeather.baseUrl + 'weather?q=' + zipCode + '&appid=' + environment.openWeather.appId)
    .map(response => this.extractData(response));
  }

  private extractData(res: any) {
    const body = res.json();
    return body;
  }

}
