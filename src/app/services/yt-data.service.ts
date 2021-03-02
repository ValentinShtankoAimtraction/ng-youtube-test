import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IDtItem, IYtItem, IYtRequestOptions, IYtResponse} from 'src/app/models';
import {environment} from 'src/environments/environment';

@Injectable()
export class YtDataService {
  public ytItems$: Observable<IDtItem[]>;
  private _ytItemsSubject: Subject<IDtItem[]>;
  private _requestOptions: IYtRequestOptions;

  constructor(private _http: HttpClient) {
    this._requestOptions = {
      maxResults: '50',
      type: 'video',
      part: 'snippet',
      q: 'ag-grid'
    };

    this._ytItemsSubject = new BehaviorSubject<IDtItem[]>([]);
    this.ytItems$ = this._ytItemsSubject.asObservable();
  }

  fetchData() {
    return this._http.get(environment.api_link, {
      params: {
        key: environment.api_key,
        ...this._requestOptions,
      }
    }).toPromise().then(
      (response: IYtResponse) => {
        this._ytItemsSubject.next(response.items.map((item) => this._toDtItem(item)));
      }
    ).catch(
      () => {
        // Load mock data if get error
        this._http.get('/assets/mock/response.json').toPromise().then(
          (response: IYtResponse) => {
            this._ytItemsSubject.next(response.items.map((item) => this._toDtItem(item)));
          }
        )
      }
    )
  };

  private _toDtItem(item: IYtItem): IDtItem {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.default.url
    } as IDtItem
  }
}
