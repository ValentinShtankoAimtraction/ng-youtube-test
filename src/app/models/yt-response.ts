import {IYtItem} from './yt-item';

export interface IYtResponse {
  etag: string;
  items: IYtItem[];
  kind: string;
  nextPageToken: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
}
