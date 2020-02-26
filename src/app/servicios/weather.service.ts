import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '8376f35b5c1395b9cfed4a8ba8aa7747';
  URI : string;

  constructor(private httpClient : HttpClient) { 
    this.URI = `http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
  }

  getWeather(cityName:string, contryCode:string){
    return this.httpClient.get(`${this.URI}${cityName},${contryCode}`)
  }

}
