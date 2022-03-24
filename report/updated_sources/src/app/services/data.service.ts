import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private db: AngularFireDatabase) {}

	// Fetch Realtime Data //
	// -- Can I fetch once?
	rtGet(path: string = '/'): Observable<any> {
		return this.db.list(path).valueChanges();
	}

	// OLD -- Will be Removed //

	// CREATE // UPDATE //
	// -- Non-Destructive Update -- //
	// dbWrite(path: string = 'testData', content: any = { name: `${new Date()}` }) {
	// 	const newData: any = {};
	// 	// Generate new key for object creation //
	// 	const newDataKey = push(child(this.dbRef, `${path}`)).key;
	// 	path = `/${path}/${newDataKey}`;
	// 	newData[path] = content;
	// 	return update(this.dbRef, newData)
	// 		.then(() => {
	// 			console.info(`Inserted record ${content.name} on path ${path}`);
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 		});
	// }

	// -- Destructive Update -- //
	// DO NOT CALL WITHOUT BACKUP IN PLACE //
	// dbReplace(
	// 	path: string = 'testData',
	// 	content: any = { name: `${path} child nodes replaced on ${new Date()}` },
	// ) {
	// 	set(ref(this.db, `${path}`), {
	// 		content,
	// 	});
	// }

	// READ //
	// -- Realtime Listener -- //
	// rtListen(
	// 	path: string = '',
	// 	listen: boolean = false, // Sets whether listener will close after initial return //
	// ) {
	// 	return onValue(
	// 		ref(this.db, `/${path}`),
	// 		snapshot => {
	// 			const data: any[] = snapshot.val().map((x: any) => x);
	// 			return data;
	// 		},
	// 		{ onlyOnce: listen },
	// 	);
	// }

	// -- Single GET -- //
	// dbGet(path: string = '') {
	// 	get(child(this.dbRef, `/${path}`))
	// 		.then(snapshot => {
	// 			if (snapshot.exists()) {
	// 				return snapshot.val();
	// 			}

	// 			console.error(`No Data found at path /${path}`);
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 		});
	// }

	// DELETE //
	// dbDelete(path: string = '') {
	// 	remove(child(this.dbRef, `/${path}`))
	// 		.then(() => {
	// 			console.info(`Data at path /${path} successfully deleted`);
	// 		})
	// 		.catch(error => {
	// 			console.error(error);
	// 		});
	// }
}
