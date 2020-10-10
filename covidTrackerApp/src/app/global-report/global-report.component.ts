import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-report',
  templateUrl: './global-report.component.html',
  styleUrls: ['./global-report.component.css']
})
export class GlobalReportComponent implements OnInit {
  @Input() globalData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
