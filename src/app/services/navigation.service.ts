import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NavigationService {
	private navSource = new BehaviorSubject('/');
	currentNav = this.navSource.asObservable();

	constructor() {}

	changeNav(nav: string) {
		this.navSource.next(nav);
	}
}
