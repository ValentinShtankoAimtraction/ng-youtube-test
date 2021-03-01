import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IYtRequestOptions} from 'src/app/models';
import {environment} from 'src/environments/environment';

@Injectable()
export class YtDataService {
  private _requestOptions: IYtRequestOptions;
  constructor(private _http: HttpClient) {
    this._requestOptions = {
      maxResults: '50',
      type: 'video',
      part: 'snippet',
      q: 'john'
    }
  }

  fetchData() {
    return this._http.get(environment.api_link, {
      params: {
        key: environment.api_key,
        ...this._requestOptions,
      }
    }).toPromise()
  };
}
