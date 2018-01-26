import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  temp: any;
  precipitation: any;
  humidity: any;
  wind: any;
  windType: any;
  windDirection: any;
  weatherUpdate: any;
  weatherIcon: string;
  cities = [
  {name: 'Hudsonville, MI', value: 49426},
  {name: 'Holland, MI', value: 49422},
  {name: 'Munster, IN', value: 46321}
  ];
  targetCity = this.cities[0];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherUpdate = (zipCode) => this.weatherService.getWeather(zipCode).subscribe(data => {
      this.temp = (parseFloat(data.main.temp) * 9 / 5 / 10 * 10 - 459.67).toFixed(1);
      this.precipitation =  data.weather[0].description;
      this.humidity = data.main.humidity + '%';
      this.wind = (parseFloat(data.wind.speed) * 2.236786).toFixed(1);
      this.weatherIcon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

      // wind direction from deg. set to windDirection
      const wd = data.wind.deg;
      if (wd > 338 || wd <= 23) {
        this.windDirection = 'North';
      } else if (wd > 23 && wd <= 68) {
        this.windDirection = 'North-East';
      } else if (wd > 68 && wd <= 113) {
        this.windDirection = 'East';
      } else if (wd > 113 && wd <= 158) {
        this.windDirection = 'South-East';
      } else if (wd > 158 && wd <= 203) {
        this.windDirection = 'South';
      } else if (wd > 203 && wd <= 248) {
        this.windDirection = 'South-West';
      } else if (wd > 248 && wd <= 293) {
        this.windDirection = 'West';
      } else if (wd > 293 && wd <= 338) {
        this.windDirection = 'North-West';
      }

      // wind type
      const ws = data.wind.speed;
      if (ws < .3) {
        this.windType = 'Calm';
        this.windDirection = '';
        this.wind = '';
      } else if (ws >= .3 && ws <= 1.5) {
        this.windType = 'Light Air';
      } else if (ws >= 1.6 && ws <= 3.3) {
        this.windType = 'Light Breeze';
      } else if (ws >= 3.4 && ws <= 5.5) {
        this.windType = 'Gentle Breeze';
      } else if (ws >= 5.6 && ws <= 7.9) {
        this.windType = 'Moderate Breeze';
      } else if (ws >= 8 && ws <= 10.7) {
        this.windType = 'Fresh Breeze';
      } else if (ws >= 8 && ws <= 10.7) {
        this.windType = 'Strong Breeze';
      } else if (ws >= 13.9 && ws <= 17.1) {
        this.windType = 'Moderate Gale';
      } else if (ws >= 17.2 && ws <= 20.7) {
        this.windType = 'Gale';
      } else if (ws >= 20.8 && ws <= 24.4) {
        this.windType = 'Strong Gale';
      } else if (ws >= 24.5 && ws <= 28.4) {
        this.windType = 'Storm';
      } else if (ws >= 28.5 && ws <= 32.6) {
        this.windType = 'Violent Storm';
      } else if (ws >= 32.7) {
        this.windType = 'Hurricane force';
      }
    });

    this.weatherUpdate(this.targetCity.value);
  }
  updateCityWeather(zipCode) {
    this.weatherUpdate(this.targetCity.value);
  }
}

