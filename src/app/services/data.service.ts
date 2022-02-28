import { Injectable } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Testing } from '../types/testing';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private dbPath = '/testing';
	testingRef: AngularFirestoreCollection<Testing>;
	constructor(private firestore: AngularFirestore) {
		this.testingRef = firestore.collection(this.dbPath);
		console.log('testingRef', this.testingRef);
	}

	getAll(): AngularFirestoreCollection<Testing> {
		return this.testingRef;
	}

	create(testing: Testing): any {
		return this.testingRef.add({ ...testing });
	}

	update(id: string, data: any): Promise<void> {
		return this.testingRef.doc(id).update(data);
	}

	delete(id: string): Promise<void> {
		return this.testingRef.doc(id).delete();
	}
}
