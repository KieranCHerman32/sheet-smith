import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgSelectionComponent } from './rpg-selection.component';

describe('RpgSelectionComponent', () => {
  let component: RpgSelectionComponent;
  let fixture: ComponentFixture<RpgSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
