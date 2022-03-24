import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRoleplayingSystemComponent } from './basic-roleplaying-system.component';

describe('BasicRoleplayingSystemComponent', () => {
	let component: BasicRoleplayingSystemComponent;
	let fixture: ComponentFixture<BasicRoleplayingSystemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BasicRoleplayingSystemComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BasicRoleplayingSystemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
