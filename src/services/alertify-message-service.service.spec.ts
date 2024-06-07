import { TestBed } from '@angular/core/testing';

import { AlertifyMessageServiceService } from './alertify-message-service.service';

describe('AlertifyMessageServiceService', () => {
  let service: AlertifyMessageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyMessageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
