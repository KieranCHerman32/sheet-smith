import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTestComponent } from './live-test.component';

describe('LiveTestComponent', () => {
	let component: LiveTestComponent;
	let fixture: ComponentFixture<LiveTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LiveTestComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LiveTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
