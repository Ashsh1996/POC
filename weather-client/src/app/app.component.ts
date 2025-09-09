import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherForecast } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Weather Forecast</h1>
    <ul>
      <li *ngFor="let w of weather">
        {{ w.date | date:'shortDate' }} → {{ w.temperatureC }}°C / {{ w.temperatureF }}°F ({{ w.summary }})
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  weather: WeatherForecast[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
    });
  }
}
