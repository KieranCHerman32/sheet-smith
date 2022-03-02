import { Injectable } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
	AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	dbPath = '/sheet-smith';
	collectionRef!: AngularFirestoreCollection<any>;
	constructor(private firestore: AngularFirestore) {
		this.collectionRef = firestore.collection(this.dbPath);
	}

	getAll(): AngularFirestoreCollection<any> {
		return this.collectionRef;
	}

	getDocument(id: any): AngularFirestoreDocument<any> {
		return this.firestore.collection(`${this.dbPath}`).doc(`${id}`);
	}

	create(doc: any): any {
		return this.collectionRef.add({ ...doc });
	}

	update(id: string, data: any): Promise<void> {
		return this.collectionRef.doc(id).update(data);
	}

	delete(id: string): Promise<void> {
		return this.collectionRef.doc(id).delete();
	}
}
