import { TestBed } from '@angular/core/testing';

import { DateInterceptorInterceptor } from './date-interceptor.interceptor';

describe('DateInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DateInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DateInterceptorInterceptor = TestBed.inject(DateInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
