import { DatePipe } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Database, ref, set } from '@angular/fire/database';

@Injectable({
	providedIn: 'root',
})
export class DataService {
  private database: Database = inject(Database);

	constructor() {}

  writeTest() {
    const date = Date.now();
    set(ref(this.database, `testing/${date}`), {
      Data: `TestRun ${new DatePipe('en-EN').transform(date)}`
    });
  }

  // overwrites data at the specified location, including any child nodes.
  write(location: string, data: any) {
    set(ref(this.database, location), {
      data
    });
  }

  listen() {}

  get() {}

  getOnce() {}

  update() {}
}
