import { Injectable } from '@angular/core';
import { get, getDatabase, push, ref, set } from '@angular/fire/database';
import { child, onValue, remove, update } from 'firebase/database';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	db = getDatabase();
	dbRef = ref(this.db);

	constructor() {}

	// Basic CRUD Functions //

	// CREATE // UPDATE //
	// -- Non-Destructive Update -- //
	dbWrite(path: string = 'testData', content: any = { name: `${new Date()}` }) {
		const newData: any = {};
		// Generate new key for object creation //
		const newDataKey = push(child(this.dbRef, `${path}`)).key;
		path = `/${path}/${newDataKey}`;
		newData[path] = content;
		return update(this.dbRef, newData)
			.then(() => {
				console.info(`Inserted record ${content.name} on path ${path}`);
			})
			.catch(error => {
				console.error(error);
			});
	}

	// -- Destructive Update -- //
	// DO NOT CALL WITHOUT BACKUP IN PLACE //
	dbReplace(
		path: string = 'testData',
		content: any = { name: `${path} child nodes replaced on ${new Date()}` },
	) {
		set(ref(this.db, `${path}`), {
			content,
		});
	}

	// READ //
	// -- Realtime Listener -- //
	rtListen(
		path: string = '',
		listen: boolean = false, // Sets whether listener will close after initial return //
	) {
		let data = ref(this.db, `/${path}`);
		onValue(
			data,
			snapshot => {
				data = snapshot.val();
				console.log(data);
				return data;
			},
			{ onlyOnce: listen },
		);
	}

	// -- Single GET -- //
	dbGet(path: string = '') {
		get(child(this.dbRef, `/${path}`))
			.then(snapshot => {
				if (snapshot.exists()) {
					return snapshot.val();
				}

				console.error(`No Data found at path /${path}`);
			})
			.catch(error => {
				console.error(error);
			});
	}

	// DELETE //
	dbDelete(path: string = '') {
		remove(child(this.dbRef, `/${path}`))
			.then(() => {
				console.info(`Data at path /${path} successfully deleted`);
			})
			.catch(error => {
				console.error(error);
			});
	}
}
