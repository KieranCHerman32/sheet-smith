import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NavigationService {
	private mainNavSource = new BehaviorSubject('main');
	currentMainNav = this.mainNavSource.asObservable();

	constructor() {}

	changeMainNav(mainNav: string) {
		this.mainNavSource.next(mainNav);
	}
}
