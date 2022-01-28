import { Component, OnInit } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Item } from 'firebase/analytics';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'sheet-smith';

	private itemsCollection: AngularFirestoreCollection<Item>;
	items: any;

	constructor(firestore: AngularFirestore) {
		this.itemsCollection = firestore.collection<Item>('testing');
		this.items = this.itemsCollection.valueChanges();
	}

	ngOnInit(): void {}
}
