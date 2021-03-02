export interface IDtItem {
  id: string;
  thumbnail: string;
  publishedAt: string;
  title: string;
  description: string;
}

export const dtColumnDefs = [
  { headerName: 'Image', field: 'thumbnail' },
  { headerName: 'Published on', field: 'publishedAt' },
  { headerName: 'Title', field: 'title' },
  { headerName: 'Description', field: 'description' },
];
