import { TestBed } from '@angular/core/testing'

import { BrpDataService } from './brp-data.service'

describe('BrpDataService', () => {
  let service: BrpDataService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BrpDataService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
