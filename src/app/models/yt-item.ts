export interface IYtThumbnail {
  url: string,
  width: number;
  height: number;
}

export interface IYtSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: IYtThumbnail,
    high: IYtThumbnail,
    medium: IYtThumbnail
  },
  title: string
}

export interface IYtItem {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: IYtSnippet
}
