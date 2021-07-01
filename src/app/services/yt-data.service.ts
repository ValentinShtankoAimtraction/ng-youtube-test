import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { IYtRequestOptions, IDtItem, IYtResponse } from '../models';
import { toDtItems } from '../utils/dt-item-converter';
import { environment } from '../../environments/environment';

@Injectable()
export class YtDataService {
  requestOptions: IYtRequestOptions;

  constructor(private readonly _http: HttpClient) {
    this.requestOptions = {
      maxResults: '50',
      type: 'video',
      part: 'snippet',
      q: 'ag-grid'
    };
  }

  fetchVideos(): Observable<IDtItem[]> {
    return this._http.get(environment.api_link, {
      params: {
        key: environment.api_key,
        ...this.requestOptions,
      }
    }).pipe(
      map((response: IYtResponse) => toDtItems(response.items))
    );
  }

  fetchMockVideos(): Observable<IDtItem[]> {
    return this._http.get('/assets/mock/response.json').pipe(
      map((response: IYtResponse) => toDtItems(response.items))
    );
  }
}
