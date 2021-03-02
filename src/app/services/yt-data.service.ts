import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IDtItem, IYtItem, IYtRequestOptions, IYtResponse} from 'src/app/models';
import {environment} from 'src/environments/environment';

@Injectable()
export class YtDataService {
  private _requestOptions: IYtRequestOptions;

  constructor(private _http: HttpClient) {
    this._requestOptions = {
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
        ...this._requestOptions,
      }
    }).pipe(
      map((reponse: IYtResponse) => reponse.items.map((item) => this._toDtItem(item)))
    )
  }

  fetchMockVideos(): Observable<IDtItem[]> {
    return this._http.get('/assets/mock/response.json').pipe(
      map((reponse: IYtResponse) => reponse.items.map((item) => this._toDtItem(item)))
    )
  }

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
