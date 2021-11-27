import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.css']
})
export class SideNavContentComponent implements OnInit {


  displayedColumns: string[] = [
    'name',
    'rpg',
    'campaign',
    'level',
    'class',
    'created',
    'lastEdit'
  ];

  sheetSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface sheetData {
  name: string;
  rpg: string;
  campaign: string;
  level: string;
  class: string;
  created: string;
  lastEdit: string;
}

const ELEMENT_DATA: sheetData[] = [

];

