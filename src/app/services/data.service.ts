import { DatePipe } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Database, ref, set } from '@angular/fire/database';
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
    set(ref(this.database, `testing/${date}`), {
      Data: `TestRun ${new DatePipe('en-EN').transform(date)}`
    }).then(() => {
      this.openSnackBar('Saved Successfully!')
      // Data saved successfully!
    })
      .catch((error: Error) => {
        this.openSnackBar(`Error: ${error.message}`)
        // The write failed...
      });
  }

  // overwrites data at the specified location, including any child nodes.
  write(location: string, data: any) {
    set(ref(this.database, location), {
      data
    }).then(() => {
      this.openSnackBar('Saved Successfully!')
      // Data saved successfully!
    })
      .catch((error: Error) => {
        this.openSnackBar(`Error: ${error.message}`)
        // The write failed...
      });
  }

  listen() { }

  get() { }

  getOnce() { }

  update() { }
}
