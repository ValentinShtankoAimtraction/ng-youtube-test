import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IYtItem, IYtRequestOptions, IYtResponse} from 'src/app/models';
import {environment} from 'src/environments/environment';

@Injectable()
export class YtDataService {
  public ytItems$: Observable<IYtItem[]>;
  private _ytItemsSubject: Subject<IYtItem[]>;
  private _requestOptions: IYtRequestOptions;

  constructor(private _http: HttpClient) {
    this._requestOptions = {
      maxResults: '50',
      type: 'video',
      part: 'snippet',
      q: 'john'
    };

    this._ytItemsSubject = new BehaviorSubject<IYtItem[]>([]);
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
        this._ytItemsSubject.next(response.items);
      }
    )
  };
}
