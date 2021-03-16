import {IDtItem, IYtItem} from 'src/app/models';

export const toDtItems = (items: IYtItem[]): IDtItem[] => items.map((item) => toDtItem(item));

export const toDtItem = (item: IYtItem): IDtItem => ({
  id: item.id.videoId,
  title: item.snippet.title,
  description: item.snippet.description,
  publishedAt: item.snippet.publishedAt,
  thumbnail: item.snippet.thumbnails.default.url
} as IDtItem);
