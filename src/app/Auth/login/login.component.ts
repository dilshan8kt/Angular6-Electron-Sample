import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var App: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'IMS';
  myName = 'Tharindu Dilshan';

  constructor() {
    
  }

  ngOnInit() {
    $(document).ready(function() {
      App.init();
    });
  }

}
