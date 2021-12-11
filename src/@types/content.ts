export enum EContentType {
  post = 'post',
  review = 'review',
}

export type TContent = {
  id: number;
  type: EContentType;
  mainImagePath: string;
};
