import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	constructor(private firestore: AngularFirestore) {}

	createNewTestingRecord(data: any) {
		return new Promise<any>((resolve, reject) => {
			this.firestore
				.collection('testing')
				.add(data)
				.then(
					res => {},
					err => reject(err),
				);
		});
	}
}
