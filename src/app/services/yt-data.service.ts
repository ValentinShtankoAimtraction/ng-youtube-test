import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable()
export class YtDataService {

  constructor(private _http: HttpClient) { }

  fetchData() {
    let link = `https://www.googleapis.com/youtube/v3/search?key=${environment.api_key}&maxResults=50&type=video&part=snippet&q=john`;
    return this._http.get(link).toPromise()
  };
}
