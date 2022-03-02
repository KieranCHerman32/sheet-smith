import { Injectable } from '@angular/core';
import { getDatabase, ref } from '@angular/fire/database';
import { onValue } from 'firebase/database';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	db = getDatabase();

	constructor() {}

	// Fetches character sheet data for given preset //
	// If no sheetType is provided, defaults to empty string to fetch all charSheet data. //
	getCharSheetData(sheetType: string = '') {
		let data = ref(this.db, `/charSheets/${sheetType}`);
		onValue(data, snapshot => {
			data = snapshot.val();
			console.log(data);
			return data;
		});
	}
}
