import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {IYtResponse} from 'src/app/models';
import {environment} from 'src/environments/environment';
import {hasOwnProperty} from 'tslint/lib/utils';
import {YtDataService} from './yt-data.service';


const mockResponse: IYtResponse = {
  'kind': 'youtube#searchListResponse',
  'etag': 'DgR5u0uCAX2PRxABmGJcXd07LAE',
  'nextPageToken': 'CDIQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 50
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '9H0MDQ9zu46ZQvaYlFcIQ-D0Nus',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'test1'
      },
      'snippet': {
        'publishedAt': 'test1',
        'channelId': 'UCerp9sZdHwofLTW8zG6Sxtw',
        'title': 'test1',
        'description': 'test1',
        'thumbnails': {
          'default': {
            'url': 'test1',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/AeEfiWAGyLc/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/AeEfiWAGyLc/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'ag-Grid',
        'liveBroadcastContent': 'none',
        'publishTime': '2020-01-29T14:00:02Z'
      }
    },
  ]
};

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

  it('should fetch items', (done) => {
    const expectedResult = [
      {
        'description': 'test1',
        'id': 'test1',
        'publishedAt': 'test1',
        'thumbnail': 'test1',
        'title': 'test1'
      }
    ];

    service.fetchVideos().subscribe(
      (response) => {
        expect(response).toEqual(expectedResult);
        done();
      }
    );
    const {maxResults, type, part, q} = service.requestOptions;
    const req = httpMock.expectOne(`${environment.api_link}?key=${environment.api_key}&maxResults=${maxResults}&type=${type}&part=${part}&q=${q}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should fetch items', (done) => {
    const expectedResult = [
      {
        'description': 'test1',
        'id': 'test1',
        'publishedAt': 'test1',
        'thumbnail': 'test1',
        'title': 'test1'
      }
    ];

    service.fetchMockVideos().subscribe(
      (response) => {
        expect(response).toEqual(expectedResult);
        done();
      }
    );

    const req = httpMock.expectOne(`/assets/mock/response.json`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should normalize item data', () => {
    let mockItems = [
      {
        'kind': 'youtube#searchResult',
        'etag': '9H0MDQ9zu46ZQvaYlFcIQ-D0Nus',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'AeEfiWAGyLc'
        },
        'snippet': {
          'publishedAt': '2020-01-29T14:00:02Z',
          'channelId': 'UCerp9sZdHwofLTW8zG6Sxtw',
          'title': 'ag-Grid: Getting Started with Angular',
          'description': 'In this video Bam will be walking us through how easy it is to make a grid with ag-Grid & Angular. For more information about Ag-Grid please visit: ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/AeEfiWAGyLc/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/AeEfiWAGyLc/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/AeEfiWAGyLc/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'ag-Grid',
          'liveBroadcastContent': 'none',
          'publishTime': '2020-01-29T14:00:02Z'
        }
      },
    ];

    let result = service.toDtItems(mockItems);
    expect(hasOwnProperty(result[0], 'id')).toBeTruthy();
    expect(hasOwnProperty(result[0], 'title')).toBeTruthy();
    expect(hasOwnProperty(result[0], 'description')).toBeTruthy();
    expect(hasOwnProperty(result[0], 'publishedAt')).toBeTruthy();
    expect(hasOwnProperty(result[0], 'thumbnail')).toBeTruthy();
  });
});
