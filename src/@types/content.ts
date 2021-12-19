export enum EContentType {
  post = 'post',
  review = 'review',
}

export type TContent = {
  id: string;
  title: string;
  mainImagePath: string;
};
