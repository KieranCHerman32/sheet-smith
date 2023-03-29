import { DatePipe } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { child, Database, get, onValue, push, ref, remove, set, update } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private database: Database = inject(Database);

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'dismiss', {
      duration: 3000,
      panelClass: 'center',
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  writeTest() {
    const date = Date.now();
    const testData = `TestRun ${new DatePipe('en-EN').transform(date)}`;
    set(ref(this.database, `testing/${date}`), {
      Data: testData
    }).then(() => {
      this.successNotif(testData);
      // Data saved successfully!
    })
      .catch((error: any) => {
        this.errorNotif(error, 'Test Failed')
        // The write failed...
      });
  }

  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#basic_write

  // For basic write operations, you can use set() to save data to a specified reference, replacing any existing data at that path.

  // Using set() overwrites data at the specified location, including any child nodes.

  rtWrite(location: string, data: any) {
    set(ref(this.database, location), {
      data
    }).then(() => {
      this.successNotif()
      // Data saved successfully!
    }).catch((error: any) => {
      this.errorNotif(error)
      // The write failed...
    });
  }

  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#web_value_events

  // To read data at a path and listen for changes, use onValue() to observe events.
  // You can use this event to read static snapshots of the contents at a given path, as they existed at the time of the event.
  // This method is triggered once when the listener is attached and again every time the data, including children, changes.
  // The event callback is passed a snapshot containing all data at that location, including child data.
  // If there is no data, the snapshot will return false when you call exists() and null when you call val() on it.

  // Important: onValue() is called every time data is changed at the specified database reference, including changes to children.
  // To limit the size of your snapshots, attach only at the lowest level needed for watching changes.
  // For example, attaching a listener to the root of your database is not recommended.

  // The listener receives a snapshot that contains the data at the specified location in the database at the time of the event.
  // You can retrieve the data in the snapshot with the val() method.

  rtListen(location: string) {
    const dataRef = ref(this.database, location);
    onValue(dataRef, (snapshot) => {
      this.successNotif('Fetched Successfully')
      const data = snapshot.val();
      this.updateVal(data);
    });
  }

  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#read_data_once_with_get

  // The SDK is designed to manage interactions with database servers whether your app is online or offline.

  // Generally, you should use the value event techniques described above to read data to get notified of updates to the data from the backend.
  // The listener techniques reduce your usage and billing, and are optimized to give your users the best experience as they go online and offline.

  // If you need the data only once, you can use get() to get a snapshot of the data from the database.
  // If unable to return the server value, the client will probe the local storage cache and return an error if the value is still not found.

  // Unnecessary use of get() can increase use of bandwidth and lead to loss of performance, which can be prevented by using a realtime listener as shown above.

  rtGet(location: string) {
    get(child(ref(this.database), location)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.updateVal(data);
        this.successNotif('Fetched Successfully')
      } else {
        this.successNotif('No Data Available')
      }
    }).catch((error: any) => {
      this.errorNotif(error)
    });
  }

  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#read_data_once_with_an_observer

  // In some cases you may want the value from the local cache to be returned immediately, instead of checking for an updated value on the server.
  // In those cases you can use once() to get the data from the local disk cache immediately.

  // This is useful for data that only needs to be loaded once and isn't expected to change frequently or require active listening.

  rtGetOnce(location: string) {
    return onValue(ref(this.database, location), (snapshot) => {
      const data = snapshot.val();
      this.updateVal(data);
      this.successNotif('Fetched Successfully')
    }, {
      onlyOnce: true
    });
  }

  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#update_specific_fields

  // To simultaneously write to specific children of a node without overwriting other child nodes, use the update() method.

  // When calling update(), you can update lower-level child values by specifying a path for the key.
  // If data is stored in multiple locations to scale better, you can update all instances of that data using data fan-out.

  // Using these paths, you can perform simultaneous updates to multiple locations in the JSON tree with a single call to update().
  // Simultaneous updates made this way are atomic: either all updates succeed or all updates fail.

  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#add_a_completion_callback

  // If you want to know when your data has been committed, you can add a completion callback.
  // Both set() and update() take an optional completion callback that is called when the write has been committed to the database.
  // If the call was unsuccessful, the callback is passed an error object indicating why the failure occurred.

  rtUpdate(location: string, data: string, updateLocs: string[]) {
    // Get a key for a new record.
    const dataId = push(child(ref(this.database), location)).key;
    const updates: any = {};

    for (const loc of updateLocs) {
      updates[`${loc}/${dataId}`] = data;
    }

    return update(ref(this.database), updates).then(() => {
      this.successNotif()
      // Data saved successfully!
    })
      .catch((error: any) => {
        this.errorNotif(error)
        // The write failed...
      });
  }

  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=en#delete_data

  // The simplest way to delete data is to call remove() on a reference to the location of that data.

  // You can also delete by specifying null as the value for another write operation such as set() or update().
  // You can use this technique with update() to delete multiple children in a single API call.

  rtDelete(location: string) {
    remove(ref(this.database, location)).then(() => {
      this.successNotif()
      // Data saved successfully!
    })
      .catch((error: any) => {
        this.errorNotif(error)
        // The write failed...
      });
  }

  // HELPER FUNCTIONS //
  updateVal(data: any) {
    console.log(data)
  }

  updateFanOut() { }

  successNotif(message?: string) {
    this.openSnackBar(`${message}` || `Saved Successfully!`);
  }

  errorNotif(error: any, message?: string) {
    this.openSnackBar(`${message}` || `Write Failed ... Error: ${error}`);
  }
}

