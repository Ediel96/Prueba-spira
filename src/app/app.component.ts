import { Component, OnInit } from '@angular/core';
import {WeatherService} from './servicios/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather;

  constructor (private weatherServices : WeatherService){

  }
   
  ngOnInit(){
  }
  
  getWeather(cityName:string , countyCode:string){
    this.weatherServices.getWeather(cityName,countyCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      err => console.log(err)
    )
  }

  submitLocation(cityName :HTMLInputElement, countyCode:HTMLInputElement){
    console.log(cityName.value ,  countyCode.value)
    
    if(cityName.value && countyCode.value){
      this.getWeather(cityName.value , countyCode.value);
  
      cityName.value = '';
      countyCode.value = '';
      cityName.focus();
    }else{
      alert('Ingresa un valor en los dos campos')
    }

    return false;
  }

}
