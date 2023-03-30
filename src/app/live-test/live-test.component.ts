import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-live-test',
	templateUrl: './live-test.component.html',
	styleUrls: ['./live-test.component.scss']
})
export class LiveTestComponent {
	date: any;
	testPath = '';
	dateString: string | null | undefined;

	constructor(private dataService: DataService) { }

	ngOnInit(): void { this.refreshTestData(); }

	refreshTestData() {
		this.date = Date.now();
		this.testPath = `testing/${this.date}`;
		this.dateString = `Test ${new DatePipe('en-EN').transform(this.date)}`;
	}

	writeTest() {
		this.dataService.rtWrite(this.testPath, { date: this.dateString, notes: '' });
	}

	listenTest() {
		this.dataService.rtListen('testing');
	}

	stopListenTest() {
		this.dataService.rtStopListen('testing');
	}

	getTest() {
		this.dataService.rtGet(this.testPath);
	}

	getOnceTest() {
		this.dataService.rtGetOnce(this.testPath);
	}

	updateTest() {
		this.dataService.rtUpdate(`${this.testPath}/notes`, `Updated ${this.dateString}`);
	}

	deleteTest() {
		this.dataService.rtDelete(this.testPath);
	}
}
