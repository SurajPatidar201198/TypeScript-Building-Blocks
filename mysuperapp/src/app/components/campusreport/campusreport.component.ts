import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campusreport',
  templateUrl: './campusreport.component.html',
  styleUrls: ['./campusreport.component.css']
})
export class CampusreportComponent implements OnInit {

  constructor() { }

  generateReport()
  {
    alert("Report generation simulation")
  }
  ngOnInit(): void {
  }

}
