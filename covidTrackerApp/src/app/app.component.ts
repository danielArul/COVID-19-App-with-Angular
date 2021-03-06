import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidTrackerApp';

  globalData: any = {};
  allCountriesData: any = [];


  constructor(public http: HttpClient) {

    this.http.get("https://api.covid19api.com/summary").subscribe((value: any) => {
      //console.log(value);
      this.globalData = value.Global;
      this.allCountriesData = value.Countries;

      

    });

  }

}
