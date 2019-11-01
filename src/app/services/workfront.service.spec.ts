/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkfrontService } from './workfront.service';

describe('Service: Workfront', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkfrontService]
    });
  });

  it('should ...', inject([WorkfrontService], (service: WorkfrontService) => {
    expect(service).toBeTruthy();
  }));
});
