import { Component, OnInit } from '@angular/core'
import { DataService } from './../services/data.service'

@Component({
  selector: 'app-rpg-selection',
  templateUrl: './rpg-selection.component.html',
  styleUrls: ['./rpg-selection.component.scss']
})
export class RpgSelectionComponent implements OnInit {
	sheetData: any = [];
	constructor (private dataService: DataService) {}

	ngOnInit (): void {
	  this.fetchSheetData()
	}

	async fetchSheetData () {
	  this.sheetData = []
	  this.dataService.rtGet('charSheets').forEach(sheet => {
	    this.sheetData = [...sheet]
	  })
	}
}
