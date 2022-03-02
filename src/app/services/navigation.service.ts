import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NavigationService {
	private navSource = new BehaviorSubject('/');
	currentNav = this.navSource.asObservable();

	constructor() {}

	getNav() {
		return this.currentNav;
	}

	updateNav(nav: string) {
		this.navSource.next(nav);
	}
}
