import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

xdescribe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
