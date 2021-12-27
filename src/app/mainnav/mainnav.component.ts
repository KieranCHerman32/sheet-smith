import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationService} from '../services/navigation.service';
import {environment} from './../../environments/environment';

@Component({
	selector: 'app-mainnav',
	templateUrl: './mainnav.component.html',
	styleUrls: ['./mainnav.component.scss'],
})
export class MainnavComponent implements OnInit {
	ssVer: string = environment.ssVer;

	nav: string = '';
	subscription!: Subscription;

	constructor(private data: NavigationService) {}

	ngOnInit() {
		this.subscription = this.data.currentMainNav.subscribe(
			nav => (this.nav = nav),
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
