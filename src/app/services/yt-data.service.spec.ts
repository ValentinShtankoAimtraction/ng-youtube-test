import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {YtDataService} from './yt-data.service';

describe('YtDataService', () => {
  let service: YtDataService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        YtDataService,
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(YtDataService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch items', () => {
    // const spy = spyOn(httpClient, 'get');
    service.fetchVideos();

    // expect(spy).toHaveBeenCalledWith({});
  })
});
