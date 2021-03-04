import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {YtDataService} from './yt-data.service';

describe('YtDataService', () => {
  let service: YtDataService;
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
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch items', () => {
    let mockItems = [];
    service.fetchVideos().subscribe(
      (res) => {
        expect(res).toEqual([])
      }
    );
    const req = httpMock.expectOne('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDnnxSaX4eqqOtDionGFZ5aKq1H0X5tk3c&maxResults=50&type=video&part=snippet&q=ag-grid');
    expect(req.request.method).toEqual("GET");
    req.flush(mockItems);

    httpMock.verify();
  })
});
