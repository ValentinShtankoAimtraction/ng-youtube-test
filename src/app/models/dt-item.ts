export interface IDtItem {
  id: string;
  thumbnail: string;
  publishedAt: string;
  title: string;
  description: string;
}

export const dateFormatter = (params) => {
  return new Date(params.value).toLocaleString();
};
export const dtColumnDefs = [
  {headerName: 'Image', field: 'thumbnail'},
  {headerName: 'Published on', field: 'publishedAt', valueFormatter: dateFormatter},
  {headerName: 'Title', field: 'title'},
  {headerName: 'Description', field: 'description'},
];

export const dtColumnTypes = {};
