import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { environment } from './../../environments/environment';

@Component({
	selector: 'app-mainnav',
	templateUrl: './mainnav.component.html',
	styleUrls: ['./mainnav.component.scss'],
})
export class MainnavComponent implements OnInit {
	ssVer: string = environment.ssVer;

	constructor() {}

	ngOnInit() {}

	ngOnDestroy() {}
}
