import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivedCharacteristicsComponent } from './derived-characteristics.component';

describe('DerivedCharacteristicsComponent', () => {
  let component: DerivedCharacteristicsComponent;
  let fixture: ComponentFixture<DerivedCharacteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivedCharacteristicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivedCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
