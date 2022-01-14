export enum EContentType {
  all = 'all',
  post = 'post',
  review = 'review',
}

export type TContent = {
  id: string;
  authorEmail: string;
  type: EContentType;
  title: string;
  mainImagePath: string;
  imagePaths: string[];
  created: number;
  content: string;
  rating?: number;
};
