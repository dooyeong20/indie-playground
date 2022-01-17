import { DocumentData, DocumentReference } from 'firebase/firestore';

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
  comments: DocumentReference<DocumentData>[];
  rating?: number;
};

export type TComment = {
  id: string;
  author: string;
  created: number;
  content: string;
  rating: number;
};
