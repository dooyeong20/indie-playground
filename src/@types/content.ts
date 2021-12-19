export enum EContentType {
  post = 'post',
  review = 'review',
}

export type TContent = {
  id: string;
  type: EContentType;
  title: string;
  mainImagePath: string;
};
