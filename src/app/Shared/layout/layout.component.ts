import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var App: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      App.init();
    });
  }

}
