import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campusplacement',
  templateUrl: './campusplacement.component.html',
  styleUrls: ['./campusplacement.component.css']
})
export class CampusplacementComponent implements OnInit {

  constructor() { }

  branches = ["-select-","Computer Science & Engineering","Information Technology","Civil","Mechanical"]

  var_name=""
  var_email=""
  var_branch=""

  register_clickHandler()
  {
    // here we will prepare a json object whic we will
    // be sending to spring boot application(later)

    var applicant = {
      "id":this.var_name,
      "title":this.var_email,
      "description":this.var_branch
    }
    alert(JSON.stringify(applicant));
  }

  ngOnInit(): void {
  }

}
