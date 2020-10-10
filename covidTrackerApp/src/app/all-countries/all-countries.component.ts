import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  @Input() allCountriesData :any;
  countrySelected:any;
  
  
  constructor() { }

  ngOnInit(): void {
    this.countrySelected=0;
  }

}
