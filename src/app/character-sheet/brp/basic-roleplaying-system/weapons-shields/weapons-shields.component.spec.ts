import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WeaponsShieldsComponent } from './weapons-shields.component'

describe('WeaponsShieldsComponent', () => {
  let component: WeaponsShieldsComponent
  let fixture: ComponentFixture<WeaponsShieldsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeaponsShieldsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponsShieldsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
